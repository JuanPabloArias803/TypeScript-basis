import { Client } from './Client';
import { Product } from './Product';

export class Order{
    private orderId:number;
    private client:Client;
    private products?:Product[];
    private total:number;
    constructor(orderId:number,client:Client,products:Product[]=[],total:number){
        this.orderId=orderId;
        this.client=client;
        this.products=products;
        this.total=total;
    }
    addProduct(newProduct:Product):void{
        this.products?.push(newProduct);
    }
    showTotal():void{
        let total:number=0;
        this.products?.forEach(product=>total+=product.getPrice());
        console.log(`Order #${this.orderId} total amount is ${total}`);
    }
}