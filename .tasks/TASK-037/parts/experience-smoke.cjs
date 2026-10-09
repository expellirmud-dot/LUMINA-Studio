const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({headless: true});
  try {
    for (const width of [1440, 390]) {
      const page = await browser.newPage();
      await page.setViewport({width, height: width === 390 ? 844 : 900});
      await page.goto('http://127.0.0.1:3012', {waitUntil:'domcontentloaded', timeout: 45000});
      await page.waitForSelector('.experience-list button');
      const buttons = await page.$$('.experience-list button');
      let pass = buttons.length === 4;
      const srcs = [];
      for (let i=0; i<buttons.length; i++) {
        await buttons[i].focus();
        await new Promise(resolve => setTimeout(resolve, 120));
        const s = await page.evaluate(() => ({
          pressed: [...document.querySelectorAll('.experience-list button')].map(b => b.getAttribute('aria-pressed')),
          src: document.querySelector('.experience-media-image')?.getAttribute('src')
        }));
        srcs.push(s.src);
        pass = pass && s.pressed[i] === 'true' && s.pressed.filter(x => x === 'true').length === 1;
      }
      pass = pass && new Set(srcs).size === 4;
      console.log(JSON.stringify({width, steps:buttons.length, uniqueImages:new Set(srcs).size, pass}));
      if (!pass) process.exitCode = 1;
      await page.close();
    }
  } finally {await browser.close();}
})().catch(err => {console.error(err);process.exitCode=1});