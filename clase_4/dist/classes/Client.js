export class Client {
    constructor(firstName, lastName, address, purchases = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = `${firstName} ${lastName}`;
        this.address = address;
        this.purchases = purchases;
    }
    seeHistory() {
        var _a;
        (_a = this.purchases) === null || _a === void 0 ? void 0 : _a.forEach((order) => console.log(order));
    }
}
