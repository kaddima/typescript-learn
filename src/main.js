"use strict";
function calc(quantity, price) {
    return quantity * price;
}
function getRandomValue() {
    return Math.floor(Math.random() * 4) + 1;
}
var Feature;
(function (Feature) {
    Feature[Feature["waterproof"] = 0] = "waterproof";
    Feature[Feature["insulated"] = 1] = "insulated";
})(Feature || (Feature = {}));
let hat = { name: "Hat", price: 100 };
let gloves = { name: "Gloves", price: 75 };
let umbrella = { name: "Umbrella", price: 30, waterproof: true, hasFeature: (feat) => feat === Feature.waterproof };
let mirrorShades = { name: "Sunglasses", price: 54, finish: "mirrored" };
let darkShades = { name: "Sunglasses", price: 54, finish: "flat" };
let products = [hat, gloves, umbrella, mirrorShades, darkShades];
products.forEach(prod => console.log(`${prod.name}:${prod.price} `
    + `Waterproof:
${prod.hasFeature ? prod.hasFeature(1) : "false"}`));
