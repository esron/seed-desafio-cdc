import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './authors/author.entity';
import { AuthorsModule } from './authors/authors.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'example',
      database: 'codeshouse',
      entities: [Author],
      synchronize: true,
    }),
    AuthorsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
