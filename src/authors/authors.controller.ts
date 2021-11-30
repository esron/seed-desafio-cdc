import { Body, Controller, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthorDTO } from './author.dto';
import { Author } from './author.entity';

@Controller('authors')
export class AuthorsController {
  constructor(
    @InjectRepository(Author)
    private readonly authorsRepository: Repository<Author>,
  ) {}

  @Post()
  create(@Body() author: AuthorDTO): Promise<Author> {
    return this.authorsRepository.save(author);
  }
}
