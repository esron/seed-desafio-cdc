import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class AuthorDTO {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @Length(0, 400)
  description: string;
}
