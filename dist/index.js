"use strict";
let sales = 123456789;
let course = 'TypeScript';
let is_published = true;
let level;
level = 1;
level = 'apple';
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3,];
numbers.forEach(n => n + 1);
let user = [1, 's'];
user[0].toString;
user[1].toUpperCase;
user.push(1);
console.log(user);
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
let weight;
let textBox = {
    drag: () => { },
    resize: () => { }
};
//# sourceMappingURL=index.js.map