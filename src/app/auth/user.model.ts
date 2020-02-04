export class User {
  constructor(
    public id: number,
    public username: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public birthDate: Date,
    public role: string
  ) {}
}