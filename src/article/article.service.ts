import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './dto/article.dto';
import { Repository } from 'typeorm';
import { CreateArticleDto } from './dto/create-article.dto';

@Injectable()
export class ArticleService {

  constructor(
    @InjectRepository(Article) private readonly articleRepository: Repository<Article>
  ) {}

  async findAll() {
    return this.articleRepository.find();
  }

  async findOne(id: number) {
    const article = await this.articleRepository.findOne({
      where: {
        id
      }
    });
    if (!article) {
      throw new NotFoundException();
    }
    return article;
  }

  async create(article: Article) {
    const trx = await this.articleRepository.create(article);
    return this.articleRepository.save(trx);
  }

}
