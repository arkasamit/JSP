// Task 1
let price = 1000;
let fruiteCost = 700;

let refund = price - fruiteCost;
console.log("I have money", refund);

// Task 2

let math = 75.25;
let biology = 65;
let chemistry = 80;
let physics = 35.45;
let bangla = 99.50;

let total = math + biology + chemistry + physics + bangla;

let avarage = total / 5;

console.log("My avarage number is", avarage.toFixed(2));

// Task 3

let num = 119;

console.log(num%5);

// Task 4

// Example 1: isNaN with a string that can be converted to a number
var a = isNaN('11');
console.log("Value of 'a' after isNaN('11'):", a); // Output: Value of 'a' after isNaN('11'): false

// Example 2: isNaN with an arithmetic expression
var b = isNaN(2 - 10);
console.log("Value of 'b' after isNaN(2-10):", b); // Output: Value of 'b' after isNaN(2-10): false

// Example 3: Re-declaring 'a' (as in your original question)
var a = isNaN('11');      // 'a' is initially false
console.log("Value of 'a' after first declaration:", a); // Output: Value of 'a' after first declaration: false

var a = isNaN(2 - 10);    // 'a' is re-declared and reassigned
console.log("Value of 'a' after second declaration:", a); // Output: Value of 'a' after second declaration: false
