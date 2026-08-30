const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('LOG:', msg.text()));
  page.on('pageerror', error => console.log('ERROR:', error.message));
  await page.goto('https://alvarocapital.vercel.app/', { waitUntil: 'networkidle0' }).catch(e => console.log(e));
  console.log("Done");
  await browser.close();
})();
