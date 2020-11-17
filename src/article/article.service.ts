import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './entities/article.entity';
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

  async create(createArticleDto: CreateArticleDto) {
    const article = await this.articleRepository.create(createArticleDto);
    return this.articleRepository.save(article);
  }

}
