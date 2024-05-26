"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.costFormatter = exports.sizeFormatter = void 0;
//@ts-nocheck
/**
* Format something that has a money value
* @param {string} thing - the name of the item
* @param {number} cost - the value associated with the item
*/
function sizeFormatter(thing, count) {
    writeMsg(`the ${thing} has ${count} items`);
}
exports.sizeFormatter = sizeFormatter;
function costFormatter(thing, cost) {
    writeMsg(`The ${thing} cost $${cost.toFixed(2)}`);
}
exports.costFormatter = costFormatter;
function writeMsg(message) {
    console.log(message);
}
