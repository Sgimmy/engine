import { HttpService, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import * as cheerio from 'cheerio';
import * as puppeteer from 'puppeteer';
import CheerioAPI = cheerio.CheerioAPI;

@Injectable()
export class CrawlerService {

  constructor(private httpService: HttpService) {}

  // async fetch(url: string) {
  //   return this.httpService.get(url).toPromise();
  // }

  async fetch(url: string) {
    return puppeteer.launch()
      .then((browser) => browser.newPage())
      .then((page) => page.goto(url).then(() => page.content()))
      .then((html) => html);
  }

  async extractArticle(html: any) {
    const title = cheerio('h1', html).text();
    const content = cheerio('article', html).html();
    const thumbnail = cheerio('article img', html).first().attr('src');
    return {
      title,
      content,
      thumbnail
    };
  }

}
