import { Controller, Get, Param } from '@nestjs/common';
import { TagService } from './tag.service';

@Controller('tags')
export class TagController {
  constructor(private tagService: TagService) {}

  @Get(':uid')
  getAll(@Param('uid') uid: string) {
    return this.tagService.findAll('uid');
  }
}
