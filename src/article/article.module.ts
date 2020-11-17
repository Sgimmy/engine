import { HttpModule, Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './entities/article.entity';
import { CrawlerService } from '../commons/services/crawler.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5
    }),
    TypeOrmModule.forFeature([
      Article
    ])
  ],
  exports: [],
  controllers: [ArticleController],
  providers: [
    ArticleService,
    CrawlerService
  ]
})
export class ArticleModule {}
