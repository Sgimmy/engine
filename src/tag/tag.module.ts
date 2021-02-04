import { HttpModule, Module } from '@nestjs/common';
import { TagController } from './tag.controller';
import { TagService } from './tag.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './entities/tag.entity';

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
  controllers: [TagController],
  providers: [TagService]
})
export class TagModule {}
