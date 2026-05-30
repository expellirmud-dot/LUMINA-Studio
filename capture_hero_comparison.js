import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 390, height: 844 }
];

const version = process.argv[2] || 'A';
const outputDir = path.join('reports', 'screenshots', `version_${version}`);

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const url = 'http://localhost:3000';

  console.log(`Capturing Version ${version}...`);

  for (const vp of viewports) {
    console.log(`  Viewport: ${vp.name} (${vp.width}x${vp.height})`);
    await page.setViewport({ width: vp.width, height: vp.height });
    
    try {
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
      // Wait for reveal animations
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      await page.screenshot({
        path: path.join(outputDir, `${vp.name}.png`),
        fullPage: false // Only hero is needed, but we'll take the above-the-fold view
      });
    } catch (e) {
      console.error(`Failed to capture ${vp.name}: ${e.message}`);
    }
  }

  await browser.close();
  console.log(`Version ${version} capture complete.`);
})();
