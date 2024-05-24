import {Person, Product,City, Employee} from "./dataTypes"

interface Icollection<T extends shapeType>{
    add(...newItems:T[]):void
    get(name:string):T | undefined
    count:number
}

type shapeType = {name:string}

let people = [
    new Person("Bob Smith", "London"),
    new Person("Dora Peters","New York")
]
let products:Product[] = [
    new Product("Running Shoes", 100),
    new Product("Hat", 25)
]

let cities = [
    new City("London", 8223345),
    new City("Paris", 2457802)
]

let employees = [
    new Employee("Bob Smith","Sales"),
    new Employee("Alice Jones","Sales")
];


class Collection<T extends shapeType>{

    private items: Map<string,T>

    constructor(initialItems:T[] = []){
        this.items = new Map<string, T>()

        this.add(...initialItems)
    }

    add(...newItems: T[]): void {
        newItems.forEach(newItem=>this.items.set(newItem.name, newItem))
        
    }

    get(name: string): T | undefined {
        return this.items.get(name)
    }

    get count():number{
        return this.items.size
    }


    values():Iterator<T>{

        return this.items.values()
    }
}


let productCollection = new Collection(products);

let iterator:Iterator<Product> = productCollection.values()

let result:IteratorResult<Product> = iterator.next()

console.log(result.value)

let p = productCollection.get("Hat")

console.log(`Product : ${p?.name}, ${p?.price}`)

