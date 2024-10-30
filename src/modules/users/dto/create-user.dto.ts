import { IsEmpty } from 'class-validator';

export class CreateUserDto {
  @IsEmpty({ message: "Está vazio o nome ou email"})
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  image: string;
}
 