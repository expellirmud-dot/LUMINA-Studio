import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const viewports = [
  { name: 'desktop', width: 1440, height: 900, hasHover: true },
  { name: 'tablet', width: 768, height: 1024, hasHover: true },
  { name: 'mobile', width: 390, height: 844, hasHover: false }
];

const outputDir = path.join('reports', 'screenshots', 'lens_sweep');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const url = 'http://localhost:3000';

  console.log(`Capturing Lens Sweep Experience...`);

  for (const vp of viewports) {
    console.log(`  Viewport: ${vp.name} (${vp.width}x${vp.height})`);
    
    // Set device attributes accurately
    await page.setViewport({ 
      width: vp.width, 
      height: vp.height, 
      hasTouch: !vp.hasHover,
      isMobile: !vp.hasHover 
    });
    
    try {
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const hero = await page.$('.hero-focal');
      if (!hero) {
        console.error('Hero container not found!');
        continue;
      }
      
      const box = await hero.boundingBox();
      
      if (vp.hasHover) {
        // Left
        await page.mouse.move(box.x + box.width * 0.1, box.y + box.height * 0.5);
        await new Promise(resolve => setTimeout(resolve, 800));
        await page.screenshot({ path: path.join(outputDir, `${vp.name}_left.png`) });
        
        // Center
        await page.mouse.move(box.x + box.width * 0.5, box.y + box.height * 0.5);
        await new Promise(resolve => setTimeout(resolve, 800));
        await page.screenshot({ path: path.join(outputDir, `${vp.name}_center.png`) });
        
        // Right
        await page.mouse.move(box.x + box.width * 0.9, box.y + box.height * 0.5);
        await new Promise(resolve => setTimeout(resolve, 800));
        await page.screenshot({ path: path.join(outputDir, `${vp.name}_right.png`) });
      } else {
        // Mobile fallback
        await page.screenshot({ path: path.join(outputDir, `${vp.name}_ambient.png`) });
      }
    } catch (e) {
      console.error(`Failed to capture ${vp.name}: ${e.message}`);
    }
  }

  await browser.close();
  console.log(`Capture complete.`);
})();
