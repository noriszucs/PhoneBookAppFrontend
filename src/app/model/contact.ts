export class Contact {
  constructor(
    public name: string,
    public countryCode: number,
    public areaCode: number,
    public number: number,
    public phoneType: string,
    public group: string
  ) {}
}