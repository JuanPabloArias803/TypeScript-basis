export class Product {
    constructor(name, description, price, stock) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
    }
    getPrice() {
        return this.price;
    }
    updateStock(sold) {
        this.stock -= sold;
    }
    updatePrice(newPrice) {
        this.price = newPrice;
    }
    showInfo() {
        console.log(`Product: ${this.name}.\n${this.description}.\nPrice: ${this.price}`);
    }
}
