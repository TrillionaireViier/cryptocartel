const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  page.on('requestfailed', request => console.log('REQUEST FAILED:', request.url(), request.failure().errorText));

  console.log("Navigating to http://localhost:5173...");
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' }).catch(e => console.log("Goto error:", e));
  
  const content = await page.content();
  if (content.includes('features')) {
    console.log("Page rendered correctly with features section!");
  } else {
    console.log("Features section NOT found in HTML! Something crashed.");
  }
  
  await browser.close();
})();
