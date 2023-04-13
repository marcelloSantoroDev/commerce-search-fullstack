// const puppeteer = require('puppeteer');
// const fs = require('fs');
// const { log } = require('console');

// (async (url) => {
//   const browser = await puppeteer.launch({ headless: false });

//   const page = await browser.newPage();

//   await page.goto(url);
  
//   const data = await page.evaluate(() => {
//     const cards = Array.from(document.querySelectorAll('.Paper_Paper__HIHv0'));

//     const results = cards.map((card) => {
//       const link = card.querySelector('a').href;
//       const image = card.querySelector('.SearchCard_ProductCard_Body__2wM_H > div > span > img').src;
//       const title = card.querySelector('.SearchCard_ProductCard_NameWrapper__Gv0x_ > div > h2').innerText;
//       const price = card.querySelector('.SearchCard_ProductCard_NameWrapper__Gv0x_ + div > p').innerText;
      
//       return {
//         link,
//         image,
//         title,
//         price
//       };
//     });

//     return results;
//   });

// const regex = /^https:\/\/i\.zst\.com\.br\/thumbs\/45\//;
// const filter = data.filter((product) => regex.test(product.image));

//     fs.writeFile('api.json', JSON.stringify(filter, null, 2), (err) => {
//     if(err) return log('erro');
//     log('deu bom')
//   })

//   await browser.close();
// })();

import puppeteer from 'puppeteer';
import fs from 'fs';
import { log } from 'console';

const scraper = async (url: string) => {
  const browser = await puppeteer.launch({ headless: false });

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
