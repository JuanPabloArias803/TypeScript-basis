interface IClient {
  firstName: string;
  lastName: string;
  fullName: string;
  address: string;
  purchases?: string[];
  seeHistory(): void;
}

export class Client implements IClient {
  private firstName: string;
  private lastName: string;
  private fullName: string;
  private address: string;
  private purchases?: string[];
  constructor(
    firstName: string,
    lastName: string,
    address: string,
    purchases: string[] = []
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = `${firstName} ${lastName}`;
    this.address = address;
    this.purchases = purchases;
  }
  seeHistory(): void {
    this.purchases?.forEach((order) => console.log(order));
  }
}
