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

let peopleCollection: Icollection<Person> = new PersonCollection();

peopleCollection.add(new Person("Bob Smith"
,
"London"),
new Person("Dora Peters"
,
"New York"));
console.log(`Collection size:
${peopleCollection.count}`);

// class SearchableCollection extends DataCollection<Employee>{

//     constructor(initialItems:Employee[]){
//         super(initialItems)
//     }

//     find(name:string): Employee[]{
//         return this.items.filter(item=>item.name === name || item.role === name)
//     }
// }





// let firstPerson = peopleData.getItem(0)
// console.log(`First Person ${firstPerson.name}, ${firstPerson.city}`)
// console.log(`Person Names: ${peopleData.getNames().join(', ')}`)

// let cityData = new DataCollection<City>(cities);
// console.log(`City names: ${cityData.getNames().join(', ')}`)
