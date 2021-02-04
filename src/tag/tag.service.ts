import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './dto/tag.dto';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Article)
    private readonly tagRepository: Repository<Article>,
  ) {}

  async findAll(uid) {
    const articleList = await this.tagRepository.find({
      where: {
        uid,
      },
    });

    console.log('articleList', articleList)

    if (!articleList) {
      return [];
    }
    const tags = await articleList.forEach((article) => article.tags);

    console.log('tags', tags)

    return tags;
  }
}
