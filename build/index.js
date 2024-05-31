"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
function loadJSON(filename, cb) {
    fs.readFile(filename, (err, data) => {
        if (err) {
            cb(err);
        }
        else {
            try {
                var parsed = JSON.parse(data.toString());
            }
            catch (error) {
                return cb(error);
            }
            return cb(null, parsed);
        }
    });
}
function readFileAsync(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err)
                reject(err);
            else
                resolve(data.toString());
        });
    });
}
function* gen() {
    let name = yield 'kadima';
}
let ite = gen();
console.log(ite.next());
console.log(ite.next());
console.log(ite.next());
