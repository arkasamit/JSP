// Task 1
const fruits = ["mango","jackfruits","Watermelon","Lichi","apple"];
console.log(fruits[3]);
fruits[3] = "jambura";
console.log(fruits);
console.log(fruits.indexOf("mango"));


// Task 2

const tourist = ["Cox-Bazar","Kashmir","Ayodhaya"];

tourist.push("Saint-martin"); //added one tourist place 
tourist.push("Bogura","Rangpur");//added another two tourist place
tourist.pop("Rangpur");// remove lasrt tourist place 
console.log(tourist);//final result
console.log(tourist.length);//array length output

// Task 3

const books = ["JS","C","Python","C++","Digital Maketing"];

if (books.includes("JS")) {
    console.log("I will read");
} 
else {
    console.log("Books not found");   
}

// Task 4

const age = [43, 36, 73];
const price  = 34;
const isStudent = true;
const names = "Rahim";

//The ternary operator condition ? 'true case' : 'false case' is used for clean output.
console.log(Array.isArray(age)? "Age is an array" : "Age not an array");
console.log(Array.isArray(price)?"Price is an array" : "Price is a product price");
console.log(Array.isArray(isStudent)? "isStudent is an array" : "isStudent is a boolean") 
console.log(Array.isArray(names)? "Name is an array" : "names is a variable");

// Task 5

const run = [20, 50, 100, 120];
const batter = ["Pant", "Rahul", "Kholi", "Ganguly"]
const total =run.concat(batter);//Concat formula in array to join two array

console.log("All batter run:", run);
console.log("Batter Name:",batter);
console.log(total);//Combain array


