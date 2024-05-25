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


class Collection<T, K extends keyof T> implements Iterable<T>{

    private items: Map<T[K],T>

    constructor(initialItems:T[] = [],private propertyName:K){
        this.items = new Map<T[K], T>()

        this.add(...initialItems)
    }

    [Symbol.iterator]():Iterator<T>{

        return this.items.values()
    }

    add(...newItems: T[]): void {
        newItems.forEach(newItem=>
            this.items.set(newItem[this.propertyName], newItem))
        
    }

    get(key:T[K]): T | undefined {
        return this.items.get(key)
    }

    get count():number{
        return this.items.size
    }


    values():IterableIterator<T>{

        return this.items.values()
    }
}


let peopleCollection = new Collection(people,"name")

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

//Type mapping
type MappedProduct = {

    [P in keyof Product]: Product[P]
}

let p:MappedProduct = {name:"kadima",price:35}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////


//Changing mappinf Names and types

type AllowStrings = {
    [P in keyof Product] : Product[P] | string
}

//here type script wont complain despite assign string to the price
//property instead of number
let q:AllowStrings = {name:"kadima",price:"apples"}
//////////////////////////////////////////////////////////////////
type changeNames = {
    [P in keyof Product as `${P}Property`]:Product[P]
}

//the changeNames type is created with a mapping that alters the name
//of each property by adding Property to it
let r:changeNames = {nameProperty:"kadima",priceProperty:21}
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

//Using generic Type parameter with a mapped Type
type Mapped<T> = {
    [P in keyof T]: T[P]
}

let p2:Mapped<Product> = {name:"kadima",price:358}
/////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////


//Changing property Optionality and mutability
/* Mapped types can change properties to make them optional, required
and to add or temove the readonly keyword */

type MakeOptional<T> = {
    [P in keyof T]? : T[P]
}

type MakeRequired<T> = {
    [P in keyof T]-? : T[P]
}

type MakeReadOnly<T> = {
    readonly [P in keyof T] : T[P]
}

type MakeReadWrite<T> = {
    -readonly [P in keyof T] : T[P]
}

/* Typescripts built in mapped types doing exactly the above */
type optionalType = Partial<Product>
type requiredType = Required<optionalType>
type readonlyType = Readonly<requiredType>
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

//Mapping specific properties
type SelectedProperties<T, K extends keyof T> = {

    [P in K] : T[P]
}

let p3:SelectedProperties<Product, "name"|"price"> = {name:'kadima',price:200} 
//the pick mapping specifies the keys that are to e kept in the mapped type
let p4:Pick<Product,"name"> = {name:'kadima'}
//Omit mapping works in opposite way and excludes one or more keys
let p5:Omit<Product, "price"> = {name:'kadima'}

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

//Creating types with a type mapping

type CustomMapped<K extends keyof any, T> = {

    [P in K] : T
}

let p6:CustomMapped<"name"|"city", string> = {
    name:"kadima",
    city:"London"
}

let p7: Record<"name"|"city", string> = {name:"kadima",city:"Lagos"}
///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Using conditional types
type resultType<T extends boolean> = T extends true ? string:number

let firstVal:resultType<true> = "string value"
let secondVal:resultType<false> = 100

//let mismatchCheck:resultType<false> = "string"

