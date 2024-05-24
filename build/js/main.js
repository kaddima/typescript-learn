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
class ArrayCollection {
    constructor() {
        this.items = [];
    }
    add(...newItems) {
        this.items.push(...newItems);
    }
    get count() {
        return this.items.length;
    }
}
class ProductCollection extends ArrayCollection {
    get(searchTerm) {
        return this.items.find(item => item.name === searchTerm);
    }
}
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
let peopleColl = new PersonCollection();
peopleColl.add(new dataTypes_1.Person("Bob smith", "London"), new dataTypes_1.Person("Dora Peters", "New York"));
let productCollection = new ProductCollection();
productCollection.add(new dataTypes_1.Product("Running Shoes", 100), new dataTypes_1.Product("Hat", 25));
[peopleColl, productCollection].forEach(c => console.log(`Size: ${c.count}`));
