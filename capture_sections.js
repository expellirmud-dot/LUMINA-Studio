import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const sections = [
    { name: 'home', url: 'https://lumina-studio-iota-ten.vercel.app/' },
    { name: 'story', url: 'https://lumina-studio-iota-ten.vercel.app/#story' },
    { name: 'work', url: 'https://lumina-studio-iota-ten.vercel.app/#work' },
    { name: 'studio', url: 'https://lumina-studio-iota-ten.vercel.app/#studio' },
    { name: 'contact', url: 'https://lumina-studio-iota-ten.vercel.app/#contact' }
  ];

  for (const section of sections) {
    console.log(`Capturing ${section.name}...`);
    await page.goto(section.url, { waitUntil: 'networkidle2' });
    // Small delay to ensure any scroll-triggered animations settle
    await new Promise(resolve => setTimeout(resolve, 1000));
    await page.screenshot({
      path: `reports/screenshots/${section.name}.png`,
      fullPage: false
    });
  }

  await browser.close();
  console.log('All screenshots captured.');
})();
