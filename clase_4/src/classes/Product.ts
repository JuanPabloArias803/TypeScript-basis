export class Product{
    private name:string;
    private description:string;
    private price:number;
    private stock:number;
    constructor(name:string,description:string,price:number,stock:number){
        this.name=name;
        this.description=description;
        this.price=price;
        this.stock=stock;
    }
    getPrice():number{
        return this.price;
    }
    updateStock(sold:number):void{
        this.stock-=sold;
    }
    updatePrice(newPrice:number):void{
        this.price=newPrice;
    }
    showInfo():void{
        console.log(`Product: ${this.name}.\n${this.description}.\nPrice: ${this.price}`);
    }
}