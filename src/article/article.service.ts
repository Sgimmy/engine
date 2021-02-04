import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './dto/article.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
  ) {}

  async findAll(uid) {
    const articleList = await this.articleRepository.find({
      where: {
        uid,
      },
    });

    if (!articleList) {
      return [];
    }
    return articleList;
  }

  async findAllTags(uid) {
    const tags = await this.articleRepository.find({
      where: {
        uid,
      },
      select: ['tags'],
    });

    if (!tags) {
      return [];
    }

    return tags[0];
  }

  async findOne(id: number) {
    const article = await this.articleRepository.findOne({
      where: {
        id,
      },
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
