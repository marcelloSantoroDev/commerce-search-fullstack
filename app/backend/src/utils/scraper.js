const fs = require('fs');
const { log } = require('console');
const puppeteer = require('puppeteer')

const scraper = async (url) => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.goto(url);

  const data = await page.evaluate(() => {
    const cards = Array.from(document.querySelectorAll('.Paper_Paper__HIHv0'));

    const results = cards.map((card) => {
      const permalink = (card.querySelector('a')).href;
      const thumbnail = (card.querySelector('.SearchCard_ProductCard_Body__2wM_H > div > span > img')).src;
      const title = (card.querySelector('.SearchCard_ProductCard_NameWrapper__Gv0x_ > div > h2')).innerText;
      const original_price = (card.querySelector('.SearchCard_ProductCard_NameWrapper__Gv0x_ + div > p')).innerText;

      return {
        permalink,
        thumbnail,
        title,
        original_price
      };
    });

    return results;
  });


  const regex = /^https:\/\/i\.zst\.com\.br\/thumbs\/45\//;
  const filter = data.filter((product) => regex.test(product.thumbnail));

  const site = {
    'https://www.buscape.com.br/geladeira': 'apis/fridge.json',
    'https://www.buscape.com.br/tv': 'apis/tv.json',
    'https://www.buscape.com.br/celular': 'apis/mobile.json',

  }

  let file = site[url];

  if (file) {
    fs.writeFile(file, JSON.stringify({ results: filter}, null, 2), (err) => {
      if (err) return log(`Error: ${err}}`);
      log('Scraping successful')
    });
  }

  await browser.close();

};


module.exports = scraper;

