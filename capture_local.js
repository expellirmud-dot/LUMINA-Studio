import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const viewports = [
  { name: 'desktop_full', width: 1440, height: 900, fullPage: true },
  { name: 'mobile_full', width: 390, height: 844, fullPage: true }
];

const outputDir = path.join('reports', 'screenshots', 'wedding_party_trial');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const url = 'http://localhost:3000';

  console.log(`Capturing from ${url}...`);

  for (const vp of viewports) {
    console.log(`  Viewport: ${vp.name} (${vp.width}x${vp.height})`);
    await page.setViewport({ width: vp.width, height: vp.height });
    
    try {
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
      
      // Auto-scroll to trigger lazy loading
      await page.evaluate(async () => {
        await new Promise((resolve) => {
          let totalHeight = 0;
          const distance = 100;
          const timer = setInterval(() => {
            const scrollHeight = document.body.scrollHeight;
            window.scrollBy(0, distance);
            totalHeight += distance;

            if (totalHeight >= scrollHeight - window.innerHeight) {
              clearInterval(timer);
              resolve();
            }
          }, 50);
        });
      });
      
      // Scroll back to top
      await page.evaluate(() => window.scrollTo(0, 0));
      
      // Wait for reveal animations and images to settle
      await new Promise(resolve => setTimeout(resolve, 10000));
      
      const screenshotPath = path.join(outputDir, `${vp.name}.png`);
      await page.screenshot({
        path: screenshotPath,
        fullPage: vp.fullPage
      });
      console.log(`Screenshot saved to ${screenshotPath}`);
    } catch (e) {
      console.error(`Failed to capture ${vp.name}: ${e.message}`);
    }
  }

  await browser.close();
  console.log(`Capture complete.`);
})();
