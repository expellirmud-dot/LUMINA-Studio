/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("node:fs");
const path = require("node:path");
const puppeteer = require("puppeteer");

const baseUrl = "http://127.0.0.1:3011/#moments-between";
const outputDir = path.resolve(".runtime-captures", "lumina", "TASK-032");
const viewports = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
];

async function waitForImages(page) {
  await page.evaluate(async () => {
    const images = [...document.images];
    await Promise.all(
      images.map((image) => {
        if (image.complete) {
          return image.decode ? image.decode().catch(() => undefined) : undefined;
        }
        return new Promise((resolve) => {
          image.addEventListener("load", resolve, { once: true });
          image.addEventListener("error", resolve, { once: true });
          setTimeout(resolve, 12000);
        });
      }),
    );
  });
}

async function run() {
  fs.mkdirSync(outputDir, { recursive: true });
  const browser = await puppeteer.launch({ headless: true });
  const results = [];

  try {
    for (const viewport of viewports) {
      const page = await browser.newPage();
      const errors = [];
      page.on("console", (message) => {
        if (message.type() === "error") errors.push(message.text());
      });
      page.on("pageerror", (error) => errors.push(error.message));

      await page.setViewport({
        width: viewport.width,
        height: viewport.height,
        deviceScaleFactor: 1,
      });
      await page.goto(baseUrl, { waitUntil: "networkidle2", timeout: 60000 });
      await page.evaluate(() =>
        document.getElementById("moments-between")?.scrollIntoView({ block: "start" }),
      );
      await new Promise((resolve) => setTimeout(resolve, 500));
      await waitForImages(page);

      const section = await page.$("#moments-between");
      if (!section) throw new Error("moments-between section not found");

      const closedPath = path.join(outputDir, `local-${viewport.name}-closed.png`);
      await section.screenshot({ path: closedPath });

      await page.click(".mini-album-toggle");
      await new Promise((resolve) => setTimeout(resolve, 500));
      await waitForImages(page);

      const openPath = path.join(outputDir, `local-${viewport.name}-open.png`);
      await section.screenshot({ path: openPath });

      const qa = await page.evaluate(() => {
        const button = document.querySelector(".mini-album-toggle");
        const rail = document.querySelector(".mini-album-rail");
        const images = [...document.querySelectorAll(".mini-album-frame img")];
        return {
          ariaExpanded: button?.getAttribute("aria-expanded"),
          ariaControls: button?.getAttribute("aria-controls"),
          buttonTag: button?.tagName,
          buttonTabIndex: button?.tabIndex,
          itemCount: document.querySelectorAll(".mini-album-item").length,
          brokenAlbumImages: images.filter(
            (image) => !image.complete || image.naturalWidth === 0,
          ).length,
          pageOverflowPx: Math.max(
            0,
            document.documentElement.scrollWidth - document.documentElement.clientWidth,
          ),
          railScrollable: rail ? rail.scrollWidth > rail.clientWidth : false,
          railScrollWidth: rail?.scrollWidth ?? 0,
          railClientWidth: rail?.clientWidth ?? 0,
        };
      });

      await page.emulateMediaFeatures([
        { name: "prefers-reduced-motion", value: "reduce" },
      ]);
      const reducedMotion = await page.evaluate(() => ({
        panelTransition: getComputedStyle(
          document.querySelector(".mini-album-panel"),
        ).transitionDuration,
        stackTransition: getComputedStyle(
          document.querySelector(".mini-album-stack-frame"),
        ).transitionDuration,
      }));

      results.push({
        viewport,
        closedPath,
        openPath,
        ...qa,
        reducedMotion,
        errors,
      });
      await page.close();
    }
  } finally {
    await browser.close();
  }

  const reportPath = path.join(outputDir, "runtime-qa.json");
  fs.writeFileSync(reportPath, JSON.stringify({ baseUrl, results }, null, 2) + "\n");
  console.log(JSON.stringify({ reportPath, results }, null, 2));
}

run().catch((error) => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});
