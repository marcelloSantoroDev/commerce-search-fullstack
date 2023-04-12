// import pretty from 'pretty'
// import fs from 'fs'
import axios from "axios";
import cheerio from "cheerio";
import { children } from "cheerio/lib/api/traversing";

const scraper = async (url: string)  => {
  console.log(url);
  
  const response = await axios.get(url);
  const $ = cheerio.load(response.data);

  const products = [] as any;

  $(
    `
    div > div > div.col-lg-9 > div.Hits_Wrapper__3q_7P > div >
    `
    ).each((index, element) => {
      const product = {} as any;

    product.image = $(element).find('div').children().text();

    const test = $(element).find('div').children().text() as any;
    console.log('COMEÇA AQUI --------------------------------------' + test)
    products.push({ teste: test });
  });

  return products;
}

export default scraper;