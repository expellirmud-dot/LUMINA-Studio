/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("node:fs");
const path = require("node:path");
const { chromium } = require("playwright");

const TOOL_NAME = "capture_video";
const DEFAULT_URLS = {
  local: "http://localhost:3000",
  production: "https://lumina-studio-iota-ten.vercel.app/",
};
const VIEWPORTS = {
  desktop: { name: "desktop", width: 1440, height: 900 },
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
const VIDEO_STOPS = ["selected-stories", "moments-between", "behind-the-lens", "experience", "final-cta"];
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
    "Usage: node scripts/capture_video.js [options]",
    "  --target local|production",
    "  --viewport desktop|mobile",
    "  --url <custom URL>",
    "  --output <directory>",
    "  --headed",
  ].join("\n");
}

function parseArgs(argv) {
  const options = {
    target: "production",
    viewport: "desktop",
    output: path.join(".runtime-captures", "lumina", "videos"),
    headed: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === "--headed") {
      options.headed = true;
      continue;
    }
    if (!["--target", "--viewport", "--url", "--output"].includes(argument)) {
      throw new Error(`Unknown option: ${argument}\n${usage()}`);
    }
    const value = argv[index + 1];
    if (!value || value.startsWith("--")) throw new Error(`Missing value for ${argument}\n${usage()}`);
    options[argument.slice(2)] = value;
    index += 1;
  }

  if (!Object.hasOwn(DEFAULT_URLS, options.target)) throw new Error(`Invalid target: ${options.target}`);
  if (!Object.hasOwn(VIEWPORTS, options.viewport)) throw new Error(`Invalid viewport: ${options.viewport}`);
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

async function scrollTo(page, top, duration = 900) {
  await page.evaluate(async ({ destination, milliseconds }) => {
    const start = window.scrollY;
    const distance = destination - start;
    const started = performance.now();
    await new Promise((resolve) => {
      const step = (now) => {
        const progress = Math.min(1, (now - started) / milliseconds);
        const eased = progress < 0.5 ? 2 * progress * progress : 1 - ((-2 * progress + 2) ** 2) / 2;
        window.scrollTo(0, start + distance * eased);
        if (progress < 1) requestAnimationFrame(step);
        else resolve();
      };
      requestAnimationFrame(step);
    });
  }, { destination: top, milliseconds: duration });
}

async function preScroll(page) {
  let top = 0;
  while (top < await page.evaluate(() => document.documentElement.scrollHeight - window.innerHeight)) {
    top += await page.evaluate(() => Math.max(300, Math.floor(window.innerHeight * 0.8)));
    await scrollTo(page, top, 180);
    await sleep(80);
  }
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
    || run.failedRequests.some((item) => item.blocking)
    || run.videoFileSize <= 0;
}

async function recordFlow(page) {
  await sleep(3000);
  for (const id of VIDEO_STOPS) {
    const top = await page.locator(`#${id}`).evaluate((element) => element.getBoundingClientRect().top + window.scrollY);
    await scrollTo(page, top, 1800);
    await sleep(1500);
  }
  const footerTop = await page.evaluate(() => Math.max(0, document.documentElement.scrollHeight - window.innerHeight));
  await scrollTo(page, footerTop, 1800);
  await sleep(3000);
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const viewport = VIEWPORTS[options.viewport];
  const startedAt = new Date();
  const runDir = path.resolve(options.output, timestampSlug(startedAt));
  fs.mkdirSync(runDir, { recursive: true });
  const diagnostics = { consoleErrors: [], pageErrors: [], failedRequests: [] };
  const browser = await chromium.launch({ headless: !options.headed });
  const context = await browser.newContext({
    viewport: { width: viewport.width, height: viewport.height },
    recordVideo: { dir: runDir, size: { width: viewport.width, height: viewport.height } },
  });
  const page = await context.newPage();
  addBrowserDiagnostics(page, diagnostics);
  let videoPath;

  try {
    await page.goto(options.url, { waitUntil: "networkidle", timeout: 60000 });
    await waitForFontsAndImages(page);
    await preScroll(page);
    await recordFlow(page);
    const qa = await collectQa(page);
    const video = page.video();
    await context.close();
    const rawVideoPath = await video.path();
    videoPath = path.join(runDir, `LUMINA-homepage-${viewport.name}-${viewport.width}x${viewport.height}.webm`);
    if (path.resolve(rawVideoPath) !== path.resolve(videoPath)) fs.renameSync(rawVideoPath, videoPath);
    const videoFileSize = fs.statSync(videoPath).size;
    const run = {
      viewport,
      capturePaths: [portablePath(videoPath)],
      ...qa,
      ...diagnostics,
      videoFileSize,
      videoResolution: { width: viewport.width, height: viewport.height },
    };
    const manifest = {
      toolName: TOOL_NAME,
      timestamp: startedAt.toISOString(),
      target: options.target,
      url: options.url,
      viewport,
      capturePaths: run.capturePaths,
      ...run,
      qaFindings: hasQaFindings(run) ? 1 : 0,
    };
    const manifestPath = path.join(runDir, "manifest.json");
    fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
    console.log(JSON.stringify({ output: runDir, manifest: manifestPath, video: videoPath, videoFileSize, qaFindings: manifest.qaFindings }, null, 2));
    process.exitCode = manifest.qaFindings > 0 ? 2 : 0;
  } finally {
    if (!videoPath) await context.close().catch(() => undefined);
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});
