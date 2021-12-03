import { Body, Controller, Post } from '@nestjs/common';
import { AuthorDTO } from './author.dto';
import { Author } from './author.entity';
import { AuthorsService } from './authors.service';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Post()
  create(@Body() author: AuthorDTO): Promise<Author> {
    return this.authorsService.create(author);
  }
}
