export type TProduct = {

    id:number,
    name:string,
    category:string,
    price:number
}

export class OrderLine{

    constructor(public product:TProduct,public quantity:number){}

    get total():number{
        return this.product.price * this.quantity
    }
}

export class Order{

    private lines = new Map<number, OrderLine>();

    constructor(initialLines?:OrderLine[]){
        if(initialLines){
            initialLines.forEach(ol=>this.lines.set(ol.product.id,ol))
        }
    }

    public addProduct(prod:TProduct,qunatity:number){
        if(this.lines.has(prod.id)){
            if(qunatity === 0){
                this.removeProduct(prod.id)
            }else{
                //"!" non null assertion certain value wont be null
                this.lines.get(prod.id)!.quantity += qunatity
            }
        }else{
            this.lines.set(prod.id, new OrderLine(prod,qunatity))
        }
    }

    public removeProduct(id:number){
        this.lines.delete(id)
    }

    get productionCount():number{

        return [...this.lines.values()].reduce((total,ol)=>{
            return total += ol.quantity
        },0)
    }

    get total():number{

        return [...this.lines.values()].reduce((total,ol)=>{
            return total += ol.total
        },0)
    }
}