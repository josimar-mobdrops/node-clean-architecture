export class UserEntity {
  constructor(
    public id: number,
    public email: string,
    public password: string,
    public name: string,
    public birthat?: Date,
  ) {}
}
