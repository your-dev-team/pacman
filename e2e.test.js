const puppeteer = require('puppeteer');

test('game loads correctly', async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000');
  await page.waitForSelector('#game');
  const game = await page.$('#game');
  expect(game).toBeTruthy();
  await browser.close();
});
