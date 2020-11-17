import { IsOptional, IsString, IsUrl } from 'class-validator';

export class Article {
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsString()
  thumbnail: string;

  @IsString()
  @IsUrl()
  source: string;

}
