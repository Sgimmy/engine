import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { CrawlerService } from '../commons/services/crawler.service';

@Controller('article')
export class ArticleController {

  constructor(
    private articleService: ArticleService,
    private crawlerService: CrawlerService
  ) {}

  @Get()
  getAll() {
    return this.articleService.findAll();
  }

  @Get(':id')
  getSingle(@Param('id') id: number) {
    return this.articleService.findOne(id);
  }

  @Post()
  async save(@Body() createArticleDto: CreateArticleDto) {
    const resource = await this.crawlerService.fetch(createArticleDto.source);
    const data = await this.crawlerService.extractArticle(resource);
    const article = {
      title: data.title,
      content: data.content,
      description: null,
      thumbnail: data.thumbnail,
      source: createArticleDto.source
    };
    if (data.description && data.description.length) {
      article.description = data.description;
    }
    return this.articleService.create(article);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateArticleDto: UpdateArticleDto
  ) {}

  @Delete(':id')
  cancel(@Param('id') id: number) {}

}
