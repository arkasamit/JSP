// Task-1
// Access the golden rod color value in output.

const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};

console.log(colors["golden rod"]);

// The core reason is that JavaScript object keys with spaces or special characters must be accessed using bracket notation ([]), not dot notation (.).

// 1. The Problem with Dot Notation (.)
// Cannot contain spaces.
// Cannot start with a number.
// Cannot contain most punctuation (except $ and _).

// 2. The Solution: Bracket Notation ([])
// Bracket notation is more powerful and flexible. It allows you to use any string as the key, including strings with spaces, hyphens, or other characters.

// Task-2
// For this object below add a property named passenger capacity with value 5

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
};

car["passenger capacity"] = 5

console.log(car);

// Display the physics marks as output.

const student = {
    name : "Arka Sarker Amit",
    id : 998,
     physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
}

console.log(student.physics.marks);
console.log(student['physics']['subject']);

// If you are typing the property name yourself inside the brackets [], you must put it in quotes "".


// Task-4
// Count the number of properties.


let man = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

const keyArray = Object.keys(man);

console.log(keyArray.length);
console.log(keyArray);

const again = Object.values(man)

console.log(again);
