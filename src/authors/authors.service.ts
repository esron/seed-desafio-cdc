import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthorDTO } from './author.dto';
import { Author } from './author.entity';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author)
    private authorsRepository: Repository<Author>,
  ) {}

  create(authorDto: AuthorDTO): Promise<Author> {
    const author = new Author();

    author.name = authorDto.name;
    author.email = authorDto.email;
    author.description = authorDto.description;

    return this.authorsRepository.save(author);
  }
}
