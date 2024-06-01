"use strict";
function strEnum(o) {
    return o.reduce((result, key) => {
        result[key] = key;
        return result;
    }, Object.create(null));
}
const direction = strEnum(['North', 'South', "East", "West"]);
let foo = { bar: 234 };
function imutateFoo(foo) {
    foo.bar = 456;
}
imutateFoo(foo);
console.log(foo.bar);
