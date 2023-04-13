import fs from 'fs';
import { log } from 'console';
import puppeteer from 'puppeteer'

const scraper = async (url: string) => {
  const browser = await puppeteer.launch({
  executablePath: '/usr/bin/chromium-browser'
});

  const page = await browser.newPage();

  await page.goto(url);

  const data = await page.evaluate(() => {
    const cards = Array.from(document.querySelectorAll('.Paper_Paper__HIHv0'));

    const results = cards.map((card) => {
      const link = (card.querySelector('a') as HTMLAnchorElement).href;
      const image = (card.querySelector('.SearchCard_ProductCard_Body__2wM_H > div > span > img') as HTMLImageElement).src;
      const title = (card.querySelector('.SearchCard_ProductCard_NameWrapper__Gv0x_ > div > h2') as HTMLHeadingElement).innerText;
      const price = (card.querySelector('.SearchCard_ProductCard_NameWrapper__Gv0x_ + div > p') as HTMLParagraphElement).innerText;

      return {
        link,
        image,
        title,
        price
      };
    });

    return results;
  });

  interface product {
    link: string;
    image: string;
    title: string;
    price: string;
  }
  const regex = /^https:\/\/i\.zst\.com\.br\/thumbs\/45\//;
const filter = data.filter((product: product) => regex.test(product.image));

    fs.writeFile('api.json', JSON.stringify(filter, null, 2), (err) => {
    if(err) return log('erro');
    log('deu bom')
  })

  await browser.close();
}

export default scraper;
