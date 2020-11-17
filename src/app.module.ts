import { Module } from '@nestjs/common';
import { ArticleModule } from './article/article.module';
import { UserModule } from './user/user.module';
import { TagModule } from './tag/tag.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import configuration from './configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: configuration().database.host,
      port: configuration().database.port,
      username: configuration().database.user,
      password: configuration().database.pass,
      database: configuration().database.name,
      autoLoadEntities: true,
      synchronize: configuration().environment === 'development',
      logging: configuration().environment === 'development'
    }),
    ArticleModule,
    UserModule,
    TagModule
  ],
  exports: [],
  controllers: [],
  providers: [],
})
export class AppModule {}
