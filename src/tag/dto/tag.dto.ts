import { IsArray, IsString, IsUrl } from 'class-validator';

export class Article {
  @IsString()
  title: string;

  @IsString()
  description: string | null;

  @IsString()
  content: string;

  @IsString()
  thumbnail: string;

  @IsArray()
  tags: Array<string>;

  @IsString()
  @IsUrl()
  source: string;
}
