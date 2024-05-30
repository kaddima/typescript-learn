"use strict";
var func = [];
for (var i = 0; i < 3; i++) {
    func.push(function () {
        console.log(i);
    });
}
console.log(func[0]());
