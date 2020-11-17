import { Injectable } from '@nestjs/common';
import * as cheerio from 'cheerio';
import * as puppeteer from 'puppeteer';

@Injectable()
export class CrawlerService {

  constructor() {}

  async fetch(url: string) {
    return puppeteer.launch()
      .then((browser) => browser.newPage())
      .then((page) => page.goto(url).then(() => page.content()))
      .then((html) => html);
  }

  async extractArticle(html: any) {
    const title = cheerio("title", html).text();
    const description = cheerio('meta[name="description"]', html).attr('content');
    const ogimage = cheerio('meta[property="og:image"]', html).attr('content');
    const content = cheerio('article', html).html();
    const thumbnail = ogimage && ogimage.trim()
      ? ogimage
      : cheerio('article img', html).first().attr('src');
    return {
      title,
      description,
      content,
      thumbnail
    };
  }

}
