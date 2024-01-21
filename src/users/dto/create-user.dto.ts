import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { UserRoleEnum } from '../enum';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum([UserRoleEnum], {
    message: 'Valid role required',
  })
  role: UserRoleEnum;
}
