// import axios from "axios";
// import cheerio from "cheerio";
// import puppeteer from "puppeteer";
const puppeteer = require('puppeteer');
const fs = require('fs');
const { log } = require('console');

const url = 'https://www.buscape.com.br/celular';


(async () => {
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();

  await page.goto(url);

  
  const api = await page.evaluate(() => {

    const hrefNode = document.querySelectorAll('.Paper_Paper__HIHv0 > a');
    const hrefArray = Array.from(hrefNode);
    const href = hrefArray.map(({ href }) =>  href);

    const imgNode = document.querySelectorAll('.Paper_Paper__HIHv0 > a > .SearchCard_ProductCard_Body__2wM_H > div > span > img');
    const imgArray = Array.from(imgNode);
    const img = imgArray.map(({ src }) =>  src)

    const titleNode = document.querySelectorAll('.SearchCard_ProductCard_NameWrapper__Gv0x_ > div > h2');
    const titleArray = Array.from(titleNode);
    const title = titleArray.map(({ innerHTML }) => innerHTML);

    const priceNode = document.querySelectorAll('.SearchCard_ProductCard_NameWrapper__Gv0x_ + div > p');
    // console.log(Array.from(priceNode))
    const priceArray = Array.from(priceNode);
    const price = priceArray.map(({ innerHTML }) => innerHTML);
    console.log(price);

    return { href, img, title, price };
  })
  fs.writeFile('api.json', JSON.stringify(api, null, 2), (err) => {
    if(err) return log('erro');
    log('deu bom')
  })
})()