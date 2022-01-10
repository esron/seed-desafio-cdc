import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Author } from '../src/authors/author.entity';
import * as request from 'supertest';
import { AuthorsModule } from '../src/authors/authors.module';

describe('AuthorsController (e2e)', () => {
  let app: INestApplication;
  const authorsService = {
    findOne: jest.fn().mockResolvedValue(null),
    save: jest.fn().mockResolvedValue(false),
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AuthorsModule],
    })
      .overrideProvider(getRepositoryToken(Author))
      .useValue(authorsService)
      .compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  it('returns error when the email is already in use', async () => {
    return request(app.getHttpServer())
      .post('/authors')
      .expect(400)
      .expect({
        statusCode: 400,
        message: ['email already in use by another author'],
        error: 'Bad Request',
      });
  });
});
