/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("node:fs");
const path = require("node:path");
const puppeteer = require("puppeteer");

const TOOL_NAME = "capture_review";
const DEFAULT_URLS = {
  local: "http://localhost:3000",
  production: "https://lumina-studio-iota-ten.vercel.app/",
};
const VIEWPORTS = {
  desktop: { name: "desktop", width: 1440, height: 900 },
  tablet: { name: "tablet", width: 768, height: 1024 },
  mobile: { name: "mobile", width: 390, height: 844 },
};
const SECTION_IDS = [
  "hero",
  "selected-stories",
  "moments-between",
  "behind-the-lens",
  "experience",
  "final-cta",
  "contact-details",
];
const ANALYTICS_HOSTS = [
  "google-analytics.com",
  "googletagmanager.com",
  "clarity.ms",
  "facebook.net",
  "vercel-insights.com",
  "vercel-analytics.com",
];

const sleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));
const portablePath = (filePath) => path.relative(process.cwd(), filePath).replaceAll(path.sep, "/");
const timestampSlug = (date = new Date()) => date.toISOString().replace(/[:.]/g, "-");

function usage() {
  return [
    "Usage: node scripts/capture_review.js [options]",
    "  --target local|production",
    "  --type hero|full|sections",
    "  --viewport desktop|tablet|mobile|all",
    "  --url <custom URL>",
    "  --output <directory>",
    "  --headed",
  ].join("\n");
}

function parseArgs(argv) {
  const options = {
    target: "production",
    type: "full",
    viewport: "all",
    output: path.join(".runtime-captures", "lumina", "screenshots"),
    headed: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === "--headed") {
      options.headed = true;
      continue;
    }
    if (!["--target", "--type", "--viewport", "--url", "--output"].includes(argument)) {
      throw new Error(`Unknown option: ${argument}\n${usage()}`);
    }
    const value = argv[index + 1];
    if (!value || value.startsWith("--")) {
      throw new Error(`Missing value for ${argument}\n${usage()}`);
    }
    options[argument.slice(2)] = value;
    index += 1;
  }

  if (!Object.hasOwn(DEFAULT_URLS, options.target)) throw new Error(`Invalid target: ${options.target}`);
  if (!["hero", "full", "sections"].includes(options.type)) throw new Error(`Invalid type: ${options.type}`);
  if (![...Object.keys(VIEWPORTS), "all"].includes(options.viewport)) throw new Error(`Invalid viewport: ${options.viewport}`);
  options.url = options.url || DEFAULT_URLS[options.target];
  const parsedUrl = new URL(options.url);
  if (!["http:", "https:"].includes(parsedUrl.protocol)) throw new Error("URL must use http or https");
  return options;
}

function classifyNoise(text, requestUrl = "") {
  const haystack = `${text} ${requestUrl}`.toLowerCase();
  const analytics = ANALYTICS_HOSTS.some((host) => haystack.includes(host));
  return {
    classification: analytics ? "expected-third-party-analytics" : "application-or-network",
    blocking: !analytics,
  };
}

function addBrowserDiagnostics(page, diagnostics) {
  page.on("console", (message) => {
    if (message.type() !== "error") return;
    diagnostics.consoleErrors.push({ text: message.text(), ...classifyNoise(message.text()) });
  });
  page.on("pageerror", (error) => {
    diagnostics.pageErrors.push({ text: error.message, classification: "application", blocking: true });
  });
  page.on("requestfailed", (request) => {
    const failure = request.failure();
    diagnostics.failedRequests.push({
      url: request.url(),
      method: request.method(),
      errorText: failure ? failure.errorText : "request failed",
      ...classifyNoise(failure ? failure.errorText : "request failed", request.url()),
    });
  });
  page.on("response", (response) => {
    if (response.status() < 400) return;
    diagnostics.failedRequests.push({
      url: response.url(),
      method: response.request().method(),
      status: response.status(),
      ...classifyNoise(`HTTP ${response.status()}`, response.url()),
    });
  });
}

async function waitForFontsAndImages(page) {
  await page.evaluate(async () => {
    if (document.fonts && document.fonts.ready) await document.fonts.ready;
    const images = [...document.images];
    await Promise.all(images.map((image) => {
      if (image.complete) return image.decode ? image.decode().catch(() => undefined) : undefined;
      return new Promise((resolve) => {
        const done = () => resolve();
        image.addEventListener("load", done, { once: true });
        image.addEventListener("error", done, { once: true });
        setTimeout(done, 15000);
      });
    }));
  });
}

async function scrollThroughPage(page) {
  await page.evaluate(async () => {
    const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));
    let previousHeight = 0;
    for (let top = 0; top < document.documentElement.scrollHeight; top += Math.max(240, Math.floor(window.innerHeight * 0.7))) {
      window.scrollTo({ top, behavior: "instant" });
      await delay(120);
      const height = document.documentElement.scrollHeight;
      if (top + window.innerHeight >= height && height === previousHeight) break;
      previousHeight = height;
    }
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "instant" });
    await delay(300);
  });
}

async function preparePage(page, url) {
  await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });
  await waitForFontsAndImages(page);
  await scrollThroughPage(page);
  await waitForFontsAndImages(page);
  await page.evaluate(() => window.scrollTo({ top: 0, left: 0, behavior: "instant" }));
  await sleep(1200);
}

async function collectQa(page) {
  return page.evaluate((canonicalIds) => {
    const images = [...document.images];
    const hrefTargets = [...document.querySelectorAll('a[href^="#"]')]
      .map((anchor) => decodeURIComponent(anchor.hash.slice(1)))
      .filter(Boolean);
    const requiredIds = [...new Set([...canonicalIds, ...hrefTargets])];
    return {
      imageCount: images.length,
      brokenImages: images
        .filter((image) => !image.complete || image.naturalWidth === 0)
        .map((image) => image.currentSrc || image.src || image.getAttribute("src")),
      missingInternalAnchors: requiredIds.filter((id) => !document.getElementById(id)),
      horizontalOverflowPx: Math.max(0, document.documentElement.scrollWidth - document.documentElement.clientWidth),
      h1Count: document.querySelectorAll("h1").length,
      pageHeight: document.documentElement.scrollHeight,
    };
  }, SECTION_IDS);
}

function hasQaFindings(run) {
  return run.brokenImages.length > 0
    || run.missingInternalAnchors.length > 0
    || run.horizontalOverflowPx > 0
    || run.h1Count !== 1
    || run.consoleErrors.some((item) => item.blocking)
    || run.pageErrors.some((item) => item.blocking)
    || run.failedRequests.some((item) => item.blocking);
}

async function capture(page, options, viewport, runDir) {
  const capturePaths = [];
  if (options.type === "sections") {
    for (const id of SECTION_IDS) {
      const element = await page.$(`#${id}`);
      if (!element) continue;
      const box = await element.boundingBox();
      if (!box || box.width <= 0 || box.height <= 0) continue;
      const filePath = path.join(runDir, `${viewport.name}-${viewport.width}x${viewport.height}-${id}.png`);
      await page.screenshot({
        path: filePath,
        clip: { x: Math.max(0, box.x), y: Math.max(0, box.y), width: box.width, height: box.height },
        captureBeyondViewport: true,
      });
      capturePaths.push(portablePath(filePath));
    }
  } else {
    const filePath = path.join(runDir, `${viewport.name}-${viewport.width}x${viewport.height}-${options.type}.png`);
    await page.screenshot({ path: filePath, fullPage: options.type === "full" });
    capturePaths.push(portablePath(filePath));
  }
  return capturePaths;
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const startedAt = new Date();
  const runDir = path.resolve(options.output, timestampSlug(startedAt));
  fs.mkdirSync(runDir, { recursive: true });
  const selectedViewports = options.viewport === "all" ? Object.values(VIEWPORTS) : [VIEWPORTS[options.viewport]];
  const manifest = {
    toolName: TOOL_NAME,
    timestamp: startedAt.toISOString(),
    target: options.target,
    url: options.url,
    captureType: options.type,
    viewport: selectedViewports,
    capturePaths: [],
    runs: [],
  };

  const browser = await puppeteer.launch({ headless: !options.headed });
  try {
    for (const viewport of selectedViewports) {
      const page = await browser.newPage();
      const diagnostics = { consoleErrors: [], pageErrors: [], failedRequests: [] };
      addBrowserDiagnostics(page, diagnostics);
      await page.setViewport({ width: viewport.width, height: viewport.height, deviceScaleFactor: 1 });
      try {
        await preparePage(page, options.url);
        const qa = await collectQa(page);
        const capturePaths = await capture(page, options, viewport, runDir);
        manifest.capturePaths.push(...capturePaths);
        manifest.runs.push({ viewport, capturePaths, ...qa, ...diagnostics });
      } finally {
        await page.close();
      }
    }
  } finally {
    await browser.close();
  }

  manifest.qaFindings = manifest.runs.filter(hasQaFindings).length;
  const manifestPath = path.join(runDir, "manifest.json");
  fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  console.log(JSON.stringify({ output: runDir, manifest: manifestPath, qaFindings: manifest.qaFindings }, null, 2));
  process.exitCode = manifest.qaFindings > 0 ? 2 : 0;
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});
