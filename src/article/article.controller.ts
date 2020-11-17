import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Controller('article')
export class ArticleController {

  constructor(
    private articleService: ArticleService
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
  save(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.create(createArticleDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateArticleDto: UpdateArticleDto
  ) {}

  @Delete(':id')
  cancel(@Param('id') id: number) {}

}
