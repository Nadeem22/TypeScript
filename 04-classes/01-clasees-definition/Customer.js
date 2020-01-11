var Customer = /** @class */ (function () {
    function Customer(theFirstName, theLastName) {
        this._firstName = theFirstName;
        this._lastName = theLastName;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lasName", {
        set: function (value) {
            this._lastName = value;
        },
        enumerable: true,
        configurable: true
    });
    return Customer;
}());
var myCustomer = new Customer("Mohammad", "Nadeem");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
