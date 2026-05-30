import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const url = 'https://lumina-studio-iota-ten.vercel.app';
  console.log(`Navigating to ${url}...`);
  
  try {
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
    // Allow any lazy-loaded content or animations to finish
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const screenshotPath = 'reports/screenshots/full_page_desktop.png';
    await page.screenshot({
      path: screenshotPath,
      fullPage: true
    });
    
    console.log(`Full-page screenshot saved to ${screenshotPath}`);
    console.log('Page loaded successfully.');
  } catch (error) {
    console.error(`Failed to capture screenshot: ${error.message}`);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
