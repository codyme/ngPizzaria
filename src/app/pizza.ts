export class Pizza {
  constructor(
    public id: number,
    public topping: string,
    public crust: string,
    public extras?: string
  ) {  }
}
