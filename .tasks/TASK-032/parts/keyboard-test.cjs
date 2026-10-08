/* eslint-disable @typescript-eslint/no-require-imports */
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 390, height: 844 });
    await page.goto("http://127.0.0.1:3011/#moments-between", { waitUntil: "networkidle2" });
    await page.focus(".mini-album-toggle");
    const before = await page.$eval(".mini-album-toggle", (el) => el.getAttribute("aria-expanded"));
    await page.keyboard.press("Enter");
    await new Promise((resolve) => setTimeout(resolve, 100));
    const afterEnter = await page.$eval(".mini-album-toggle", (el) => el.getAttribute("aria-expanded"));
    await page.keyboard.press("Space");
    await new Promise((resolve) => setTimeout(resolve, 100));
    const afterSpace = await page.$eval(".mini-album-toggle", (el) => el.getAttribute("aria-expanded"));
    console.log(JSON.stringify({ before, afterEnter, afterSpace }, null, 2));
    if (before !== "false" || afterEnter !== "true" || afterSpace !== "false") process.exitCode = 2;
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});
