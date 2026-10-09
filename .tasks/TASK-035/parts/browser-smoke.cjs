/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("node:fs");
const path = require("node:path");
const puppeteer = require("puppeteer");

const base = "http://127.0.0.1:3012";
const outputDir = path.resolve(".runtime-captures", "lumina", "TASK-035");
const cases = [
  { route: "/", name: "home-desktop", width: 1440, height: 900, miniAlbum: true },
  { route: "/", name: "home-mobile", width: 390, height: 844, miniAlbum: true },
  { route: "/fastwork", name: "fastwork-desktop", width: 1440, height: 900, miniAlbum: false },
  { route: "/fastwork", name: "fastwork-mobile", width: 390, height: 844, miniAlbum: false },
];

async function scrollWholePage(page) {
  await page.evaluate(async () => {
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    const step = Math.max(420, Math.floor(window.innerHeight * 0.75));
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await sleep(90);
    }
    window.scrollTo(0, document.documentElement.scrollHeight);
    await sleep(250);
  });
}

async function waitForImages(page) {
  await page.evaluate(async () => {
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    const deadline = Date.now() + 12000;
    while (Date.now() < deadline) {
      const imgs = [...document.images];
      if (imgs.every((img) => img.complete)) break;
      await sleep(120);
    }
    // Hidden lazy images may never decode; only wait for images already loaded.
    await Promise.all([...document.images]
      .filter((img) => img.complete)
      .map((img) => Promise.race([
        img.decode?.().catch(() => undefined),
        sleep(1500),
      ])));
  });
}

(async () => {
  fs.mkdirSync(outputDir, { recursive: true });
  const browser = await puppeteer.launch({ headless: true });
  const results = [];
  try {
    for (const c of cases) {
      const page = await browser.newPage();
      const consoleErrors = [];
      const pageErrors = [];
      const failedRequests = [];
      page.on("console", (m) => { if (m.type() === "error") consoleErrors.push(m.text()); });
      page.on("pageerror", (e) => pageErrors.push(e.message));
      page.on("requestfailed", (req) => failedRequests.push({ url: req.url(), error: req.failure()?.errorText || "unknown" }));

      await page.setViewport({ width: c.width, height: c.height, deviceScaleFactor: 1 });
      const response = await page.goto(base + c.route, { waitUntil: "networkidle2", timeout: 60000 });

      await scrollWholePage(page);
      await waitForImages(page);

      let miniAlbum = null;
      if (c.miniAlbum) {
        await page.evaluate(() => document.querySelector(".mini-album-toggle")?.scrollIntoView({ block: "center" }));
        miniAlbum = await page.evaluate(() => {
          const b = document.querySelector(".mini-album-toggle");
          return b ? { exists: true, before: b.getAttribute("aria-expanded") } : { exists: false };
        });
        if (miniAlbum?.exists) {
          await page.focus(".mini-album-toggle");
          await page.keyboard.press("Enter");
          await new Promise((r) => setTimeout(r, 350));
          miniAlbum.after = await page.$eval(".mini-album-toggle", (b) => b.getAttribute("aria-expanded"));
          await scrollWholePage(page);
          await waitForImages(page);
        }
      }

      const metrics = await page.evaluate(() => {
        const all = [...document.images];
        const broken = all
          .filter((i) => i.complete && i.naturalWidth === 0)
          .map((i) => ({ src: i.getAttribute("src"), currentSrc: i.currentSrc, alt: i.alt }));
        return {
          title: document.title,
          h1Count: document.querySelectorAll("h1").length,
          imageCount: all.length,
          brokenImages: broken.length,
          brokenImageDetails: broken,
          overflowPx: Math.max(0, document.documentElement.scrollWidth - document.documentElement.clientWidth),
          bodyTextLength: document.body.innerText.length,
        };
      });

      await page.evaluate(() => window.scrollTo(0, 0));
      await new Promise((r) => setTimeout(r, 200));
      const shot = path.join(outputDir, c.name + "-v2.png");
      await page.screenshot({ path: shot, fullPage: false });

      results.push({
        ...c,
        httpStatus: response?.status() ?? null,
        ...metrics,
        miniAlbum,
        failedRequests,
        consoleErrors,
        pageErrors,
        screenshot: shot,
      });
      await page.close();
    }
  } finally {
    await browser.close();
  }

  const pass = results.every((r) =>
    [200, 304].includes(r.httpStatus) &&
    r.h1Count === 1 &&
    r.brokenImages === 0 &&
    r.overflowPx === 0 &&
    r.failedRequests.length === 0 &&
    r.consoleErrors.length === 0 &&
    r.pageErrors.length === 0 &&
    (!r.miniAlbum || (r.miniAlbum.exists && r.miniAlbum.before === "false" && r.miniAlbum.after === "true"))
  );

  const report = { base, pass, results };
  fs.writeFileSync(path.join(outputDir, "browser-smoke-v2.json"), JSON.stringify(report, null, 2) + "\n");
  console.log(JSON.stringify(report, null, 2));
  if (!pass) process.exitCode = 1;
})().catch((e) => {
  console.error(e.stack || e.message);
  process.exitCode = 1;
});
