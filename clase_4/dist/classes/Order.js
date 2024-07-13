export class Order {
    constructor(orderId, client, products = [], total) {
        this.orderId = orderId;
        this.client = client;
        this.products = products;
        this.total = total;
    }
    addProduct(newProduct) {
        var _a;
        (_a = this.products) === null || _a === void 0 ? void 0 : _a.push(newProduct);
    }
    showTotal() {
        var _a;
        let total = 0;
        (_a = this.products) === null || _a === void 0 ? void 0 : _a.forEach(product => total += product.getPrice());
        console.log(`Order #${this.orderId} total amount is ${total}`);
    }
}
