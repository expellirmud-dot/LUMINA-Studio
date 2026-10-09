/* TASK-038 current-candidate Puppeteer regression. */
const puppeteer = require("puppeteer");
const fs = require("node:fs");
const path = require("node:path");

(async () => {
  const output = path.resolve(".runtime-captures", "lumina", "TASK-038");
  fs.mkdirSync(output, { recursive: true });
  const browser = await puppeteer.launch({ headless: true });
  const results = [];
  try {
    for (const viewport of [
      { name: "desktop", width: 1440, height: 900, touch: false },
      { name: "mobile", width: 390, height: 844, touch: true },
    ]) {
      const page = await browser.newPage();
      const errors = [];
      page.on("pageerror", (e) => errors.push(e.message));
      page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
      page.on("requestfailed", (r) => errors.push(r.failure()?.errorText || "failed request"));
      await page.setViewport({
        width: viewport.width, height: viewport.height,
        isMobile: viewport.touch, hasTouch: viewport.touch,
        deviceScaleFactor: 1,
      });
      const response = await page.goto("http://127.0.0.1:3012/", { waitUntil: "networkidle2", timeout: 60000 });
      const triggerCount = (await page.$$(".story-image-trigger")).length;
      const perImage = [];
      for (let i = 0; i < triggerCount; i++) {
        const trigger = (await page.$$(".story-image-trigger"))[i];
        if (viewport.touch) await trigger.tap();
        else await trigger.click();
        await page.waitForSelector(".story-focus-dialog[open] .story-focus-image", { timeout: 15000 });
        await page.waitForFunction(() => {
          const image = document.querySelector(".story-focus-dialog[open] .story-focus-image");
          return image?.complete && image.naturalWidth > 0 &&
            !document.querySelector(".story-focus-dialog[open] .story-focus-loading");
        }, { timeout: 20000 });
        const openState = await page.evaluate(() => {
          const dialog = document.querySelector(".story-focus-dialog[open]");
          const image = dialog?.querySelector("img");
          return {
            modal: !!dialog?.matches(":modal"),
            image: !!image,
            closeButton: !!dialog?.querySelector('button[aria-label="Close photograph"]'),
            title: dialog?.getAttribute("aria-label"),
          };
        });
        if (i === 0) {
          await page.screenshot({ path: path.join(output, viewport.name + "-image-focus.png"), fullPage: false });
        }
        await page.keyboard.press("Escape");
        await page.waitForFunction(() => !document.querySelector(".story-focus-dialog[open]"), { timeout: 7000 });
        const focusReturned = await page.evaluate((index) =>
          document.activeElement === document.querySelectorAll(".story-image-trigger")[index], i);
        perImage.push({ ...openState, focusReturned });
      }
      const button = (await page.$$(".story-image-trigger"))[0];
      await button.click();
      await page.waitForSelector(".story-focus-dialog[open]");
      await page.click(".story-focus-dialog[open] .story-focus-close");
      const closeButtonWorked = await page.evaluate(() => !document.querySelector(".story-focus-dialog[open]"));
      await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
      const qa = await page.evaluate(() => ({
        overflowPx: Math.max(0, document.documentElement.scrollWidth - document.documentElement.clientWidth),
        brokenImages: [...document.images].filter(img => img.complete && img.naturalWidth === 0).length,
        miniAlbumPresent: !!document.querySelector(".mini-album-toggle"),
        experienceSteps: document.querySelectorAll(".experience-list button").length,
      }));
      const pass = [200,304].includes(response?.status()) && triggerCount === 3 &&
        perImage.every(x => x.modal && x.image && x.closeButton && x.focusReturned && x.title) &&
        closeButtonWorked && qa.overflowPx === 0 && qa.brokenImages === 0 &&
        qa.miniAlbumPresent && qa.experienceSteps === 4 && errors.length === 0;
      results.push({ viewport, status: response?.status(), triggerCount, perImage, closeButtonWorked, ...qa, errors, pass });
      await page.close();
    }
  } finally { await browser.close(); }
  const pass = results.every(r => r.pass);
  fs.writeFileSync(path.join(output, "image-focus-smoke.json"), JSON.stringify({pass,results},null,2)+"\n");
  console.log(JSON.stringify({pass,results},null,2));
  if (!pass) process.exitCode = 1;
})().catch(e => { console.error(e.stack||String(e)); process.exitCode = 1; });
