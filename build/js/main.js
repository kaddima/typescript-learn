"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataTypes_1 = require("./dataTypes");
let people = [
    new dataTypes_1.Person("Bob Smith", "London"),
    new dataTypes_1.Person("Dora Peters", "New York")
];
let products = [
    new dataTypes_1.Product("Running Shoes", 100),
    new dataTypes_1.Product("Hat", 25)
];
let cities = [
    new dataTypes_1.City("London", 8223345),
    new dataTypes_1.City("Paris", 2457802)
];
let employees = [
    new dataTypes_1.Employee("Bob Smith", "Sales"),
    new dataTypes_1.Employee("Alice Jones", "Sales")
];
class PersonCollection {
    constructor() {
        this.items = [];
    }
    add(...newItems) {
        this.items.push(...newItems);
    }
    get(name) {
        return this.items.find(item => item.name === name);
    }
    get count() {
        return this.items.length;
    }
}
let peopleCollection = new PersonCollection();
peopleCollection.add(new dataTypes_1.Person("Bob Smith", "London"), new dataTypes_1.Person("Dora Peters", "New York"));
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
