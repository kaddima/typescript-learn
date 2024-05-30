import { TProduct, Order } from "./data/entities";

export class DomDisplay{

    public props:{
        products:TProduct[],
        order:Order
    }|undefined

    constructor(){
        this.props = undefined
    }

    getContent():HTMLElement{

        let el = document.createElement("h3")
        el.innerText = this.getElementText();
        el.classList.add("bg-primary", "text-center","text-white", "p-2")

        return el
    }

    getElementText(){

        return `${this.props!.products.length} Products, Order total: $${this.props!.order.total}`
    }
}