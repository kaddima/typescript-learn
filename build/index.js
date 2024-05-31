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
loadJSON('./package.json', (err, data) => {
    console.log('our callback called');
    if (err) {
        console.log(err.message);
    }
    else {
        console.log(data);
    }
});
