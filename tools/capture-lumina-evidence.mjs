import { chromium, devices } from 'playwright';
import fs from 'fs';
import path from 'path';

const TARGET_URL = process.env.LUMINA_CAPTURE_URL || 'https://lumina-studio-iota-ten.vercel.app';
const TASK_ID = process.env.LUMINA_CAPTURE_TASK || 'TASK-020B';

async function run() {
  const browser = await chromium.launch();
  
  const baseOutputDir = path.join(process.cwd(), '.runtime-captures', 'lumina', TASK_ID);
  const desktopDir = path.join(baseOutputDir, 'desktop');
  const mobileDir = path.join(baseOutputDir, 'mobile');
  
  if (!fs.existsSync(desktopDir)) fs.mkdirSync(desktopDir, { recursive: true });
  if (!fs.existsSync(mobileDir)) fs.mkdirSync(mobileDir, { recursive: true });

  // === DESKTOP ===
  console.log(`\n[Desktop] Capturing evidence for ${TARGET_URL}...`);
  let context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    recordVideo: { dir: desktopDir }
  });
  let page = await context.newPage();
  
  await page.goto(TARGET_URL, { waitUntil: 'networkidle' });
  
  console.log("[Desktop] Taking above-fold screenshot...");
  await page.screenshot({ path: path.join(desktopDir, 'desktop-above-fold.png') });
  
  console.log("[Desktop] Taking full-page screenshot...");
  await page.screenshot({ path: path.join(desktopDir, 'desktop-fullpage.png'), fullPage: true });

  console.log("[Desktop] Preloading full page for video...");
  for(let i = 0; i < 15; i++) {
    await page.evaluate(() => window.scrollBy(0, 500));
    await page.waitForTimeout(100);
  }
  
  await page.evaluate(() => window.scrollTo(0, 0));
  console.log("[Desktop] Waiting before slow scroll...");
  await page.waitForTimeout(3000);
  
  console.log("[Desktop] Starting slow review scroll...");
  for(let i = 0; i < 22; i++) {
    await page.mouse.wheel(0, 300);
    await page.waitForTimeout(2000);
  }
  
  await context.close();
  
  let desktopFiles = fs.readdirSync(desktopDir);
  let desktopWebm = desktopFiles.find(f => f.endsWith('.webm') && f !== 'desktop-scroll.webm');
  if (desktopWebm) {
      fs.renameSync(path.join(desktopDir, desktopWebm), path.join(desktopDir, 'desktop-scroll.webm'));
  }

  // === MOBILE ===
  console.log(`\n[Mobile] Capturing evidence for ${TARGET_URL}...`);
  const iPhone = devices['iPhone 14'] || devices['iPhone 13'];
  context = await browser.newContext({
    ...iPhone,
    recordVideo: { dir: mobileDir }
  });
  page = await context.newPage();
  
  await page.goto(TARGET_URL, { waitUntil: 'networkidle' });
  
  console.log("[Mobile] Taking above-fold screenshot...");
  await page.screenshot({ path: path.join(mobileDir, 'mobile-above-fold.png') });
  
  console.log("[Mobile] Taking full-page screenshot...");
  await page.screenshot({ path: path.join(mobileDir, 'mobile-fullpage.png'), fullPage: true });

  console.log("[Mobile] Preloading full page for video...");
  for(let i = 0; i < 20; i++) {
    await page.evaluate(() => window.scrollBy(0, 400));
    await page.waitForTimeout(100);
  }
  
  await page.evaluate(() => window.scrollTo(0, 0));
  console.log("[Mobile] Waiting before slow scroll...");
  await page.waitForTimeout(3000);
  
  console.log("[Mobile] Starting slow review scroll...");
  for(let i = 0; i < 30; i++) {
    await page.mouse.wheel(0, 280);
    await page.waitForTimeout(2300);
  }
  
  await context.close();

  let mobileFiles = fs.readdirSync(mobileDir);
  let mobileWebm = mobileFiles.find(f => f.endsWith('.webm') && f !== 'mobile-scroll.webm');
  if (mobileWebm) {
      fs.renameSync(path.join(mobileDir, mobileWebm), path.join(mobileDir, 'mobile-scroll.webm'));
  }
  
  await browser.close();
  console.log(`\nCapture complete! Evidence stored in: ${baseOutputDir}`);
}

run();
