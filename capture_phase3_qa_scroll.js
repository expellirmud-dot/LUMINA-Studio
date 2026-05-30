import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const viewports = [
  { name: 'desktop-1440', width: 1440, height: 900 },
  { name: 'desktop-1280', width: 1280, height: 800 },
  { name: 'mobile-390', width: 390, height: 844 },
  { name: 'mobile-375', width: 375, height: 812 },
  { name: 'mobile-360', width: 360, height: 780 }
];

const outputDir = path.join('reports', 'screenshots', 'Phase3-QA');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function autoScroll(page){
    await page.evaluate(async () => {
        await new Promise((resolve) => {
            var totalHeight = 0;
            var distance = 100;
            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if(totalHeight >= scrollHeight - window.innerHeight){
                    clearInterval(timer);
                    resolve();
                }
            }, 50);
        });
    });
}

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const url = 'http://localhost:3000';

  console.log(`Capturing Phase 3 QA from ${url}...`);

  for (const vp of viewports) {
    console.log(`  Viewport: ${vp.name} (${vp.width}x${vp.height})`);
    await page.setViewport({ width: vp.width, height: vp.height });
    
    try {
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
      // Wait for reveal animations and initial layout
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Scroll to bottom to trigger lazy loading
      await autoScroll(page);
      
      // Wait for images to load
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Scroll back to top just in case
      await page.evaluate(() => window.scrollTo(0, 0));
      await new Promise(resolve => setTimeout(resolve, 1000));

      await page.screenshot({
        path: path.join(outputDir, `${vp.name}-full.png`),
        fullPage: true 
      });
      await page.screenshot({
        path: path.join(outputDir, `${vp.name}-hero.png`),
        fullPage: false 
      });
    } catch (e) {
      console.error(`Failed to capture ${vp.name}: ${e.message}`);
    }
  }

  await browser.close();
  console.log(`Phase 3 QA capture complete.`);
})();
