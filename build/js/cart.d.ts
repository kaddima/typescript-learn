import { SportProduct } from "./product";
export declare class Cart {
    customerName: string;
    private items;
    constructor(customerName: string);
    addProduct(product: SportProduct, quantity: number): number;
    get totalPrice(): number;
}
