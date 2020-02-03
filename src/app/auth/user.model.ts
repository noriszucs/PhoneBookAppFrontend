export class User {
  constructor(
    public id: number,
    public username: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public address: string,
    public birthDate: string,
    public role: string
    //public phoneNumbers: PhoneNumbers[]
  ) {}
}