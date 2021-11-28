import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorsController } from './authors/authors.controller';

@Module({
  imports: [],
  controllers: [AppController, AuthorsController],
  providers: [AppService],
})
export class AppModule {}
