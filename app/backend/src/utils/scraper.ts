import axios from "axios";
import cheerio from "cheerio";
import { children } from "cheerio/lib/api/traversing";

const url = 'https://pt.wikipedia.org/wiki/Fernando_Pessoa';

const scraper = async ()  => { 
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);

  const products = [] as any;

  $('#mw-content-text > div.mw-parser-output > table.infobox.infobox_v2 > tbody').each((index, element) => {
    const product = {} as any;

    const test = $(element)
    .text() as any;
    products.push(test);
  });

  return products;
}

export default scraper;
