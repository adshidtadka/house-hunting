import { IsEmail, IsString } from 'class-validator';

export class CreateRoomDto {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;
}
