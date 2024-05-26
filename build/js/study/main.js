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
class Collection {
    constructor(initialItems = [], propertyName) {
        this.propertyName = propertyName;
        this.items = new Map();
        this.add(...initialItems);
    }
    [Symbol.iterator]() {
        return this.items.values();
    }
    add(...newItems) {
        newItems.forEach(newItem => this.items.set(newItem[this.propertyName], newItem));
    }
    get(key) {
        return this.items.get(key);
    }
    get count() {
        return this.items.size;
    }
    values() {
        return this.items.values();
    }
}
let peopleCollection = new Collection(people, "name");
let p = { name: "kadima", price: 35 };
//here type script wont complain despite assign string to the price
//property instead of number
let q = { name: "kadima", price: "apples" };
//the changeNames type is created with a mapping that alters the name
//of each property by adding Property to it
let r = { nameProperty: "kadima", priceProperty: 21 };
let p2 = { name: "kadima", price: 358 };
let p3 = { name: 'kadima', price: 200 };
//the pick mapping specifies the keys that are to e kept in the mapped type
let p4 = { name: 'kadima' };
//Omit mapping works in opposite way and excludes one or more keys
let p5 = { name: 'kadima' };
let p6 = {
    name: "kadima",
    city: "London"
};
let p7 = { name: "kadima", city: "Lagos" };
let firstVal = "string value";
let secondVal = 100;
//let mismatchCheck:resultType<false> = "string"
