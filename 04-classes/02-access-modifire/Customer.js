var Customer = /** @class */ (function () {
    function Customer(theFirstName, theLastName) {
        this.firstName = theFirstName;
        this.lastName = theLastName;
    }
    return Customer;
}());
var myCustomer = new Customer("Mohammad", "Nadeem");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
