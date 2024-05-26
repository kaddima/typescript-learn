import { Product, SportProduct } from "./product";

class CartItem{

    constructor(public product:SportProduct, public quantity:number){}

    get totalPrice():number{

        return this.quantity * this.product.price
    }
}


export class Cart{

    private items = new Map<number, CartItem>()

    constructor(public customerName:string){}

    addProduct(product:SportProduct, quantity:number):number{

        if(this.items.has(product.id)){

            let item = this.items.get(product.id) as CartItem;
            item.quantity += quantity

            return item.quantity
        }else{
            this.items.set(product.id, new CartItem(product,quantity))

            return quantity
        }
    }

    get totalPrice():number{

        return [...this.items.values()].reduce((total,item)=>{
            return total += item.totalPrice
        }, 0)
    }

    get itemCount():number{
        return [...this.items.values()].reduce((total,item)=>{
            return total += item.quantity
        },0)
    }
}
