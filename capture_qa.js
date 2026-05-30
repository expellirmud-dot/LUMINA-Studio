import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 390, height: 844 }
];

const outputDir = path.join('reports', 'screenshots', 'QA-003-B');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const url = 'https://lumina-studio-iota-ten.vercel.app';

  console.log(`Capturing QA-003-B from ${url}...`);

  for (const vp of viewports) {
    console.log(`  Viewport: ${vp.name} (${vp.width}x${vp.height})`);
    await page.setViewport({ width: vp.width, height: vp.height });
    
    try {
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
      // Wait for reveal animations and initial layout
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      await page.screenshot({
        path: path.join(outputDir, `${vp.name}.png`),
        fullPage: false 
      });
    } catch (e) {
      console.error(`Failed to capture ${vp.name}: ${e.message}`);
    }
  }

  await browser.close();
  console.log(`QA-003-B capture complete.`);
})();
