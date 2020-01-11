class Customer {
  firstName: string;
  lastName: string;
  constructor(theFirstName: string, theLastName: string) {
    this.firstName = theFirstName;
    this.lastName = theLastName;
  }
}
let myCustomer = new Customer("Mohammad", "Nadeem");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
