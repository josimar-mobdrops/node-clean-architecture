import { IsEmail, IsString, IsStrongPassword } from "class-validator";

export class CreateUserDto {
  @IsString()
  private _name: string;

  @IsEmail()
  private _email: string;

  @IsStrongPassword({
    minLength: 6,
    minLowercase: 0,
    minNumbers: 0,
    minSymbols: 0,
    minUppercase: 0,
  })
  private _password: string;

  private _birthAt: Date;

  constructor(email: string, password: string, name: string, birthAt: Date) {
    this._email = email;
    this._password = password;
    this._name = name;
    this._birthAt = birthAt;
  }

  public get email(): string {
    return this._email;
  }

  public set email(value: string) {
    this._email = value;
  }

  // Getter e Setter para o password
  public get password(): string {
    return this._password;
  }

  public set password(value: string) {
    this._password = value;
  }

  // Getter e Setter para o name
  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  // Getter e Setter para o name
  public get birthAt(): Date {
    return this._birthAt;
  }

  public set birthAt(value: Date) {
    this._birthAt = value;
  }
}
