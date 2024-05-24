import {Person, Product,City, Employee} from "./dataTypes"

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
    new Employee("Alice Jones","Sales")];

    type shapeType = {name:string}

interface Icollection<T extends shapeType>{
    add(...newItems:T[]):void
    get(name:string):T | undefined
    count:number
}

abstract class ArrayCollection<T extends shapeType> implements Icollection<T>{

    protected items:T[] = []

    add(...newItems: T[]): void {
        this.items.push(...newItems)
    }

    abstract get(searchTerm:string):T | undefined

    get count():number{
        return this.items.length
    }
}


class ProductCollection extends ArrayCollection<Product>{
    get(searchTerm: string): Product | undefined {
        return this.items.find(item=>item.name === searchTerm)
    }
}


class PersonCollection implements Icollection<Person>{

    private items:Person[] = []

    add(...newItems: Person[]): void {
        this.items.push(...newItems)
    }

    get(name: string): Person | undefined {
        return this.items.find(item=> item.name === name)
    }

    get count():number{
        return this.items.length
    }
}


let peopleColl : Icollection<Person> = new PersonCollection()
peopleColl.add(new Person("Bob smith","London"), 
new Person("Dora Peters", "New York"))

let productCollection: Icollection<Product> = new ProductCollection();
productCollection.add(new Product("Running Shoes",100), 
new Product("Hat", 25));

[peopleColl, productCollection].forEach(c =>
    console.log(`Size: ${c.count}`));