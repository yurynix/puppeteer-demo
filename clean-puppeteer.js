'use strict';
const puppeteer = require('puppeteer');

(async() => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto('http://ynet.co.il');
  await page.screenshot({path: 'ynet.png'});
  await browser.close();
})();