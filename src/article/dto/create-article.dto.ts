import { IsArray, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateArticleDto {
  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsUrl()
  source: string;

  @IsString()
  uid: string;

  @IsArray()
  tags: Array<string>;
}
