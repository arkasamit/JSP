// // Generate a multiplication table for number 9
// let table = 0;

// for (let i = 1; i < 10; i++){
//     table = 9 * i;
//     console.log(`this is 9 * ${i} = ${table}`);
  
// }

// // Display sum of all the odd numbers from 91 to 129.
// let sum = 0;

// for (let i = 91; i <= 129; i++) {
   
//     if(i % 2 !== 0){

//         sum = sum + i
        
//     }
    
// }

// console.log(`This the total odd number's sum ${sum}`);

// // Implement a countdown timer that counts down from 81 to 65.

// for (let i = 81;  i >= 65; i--) {
    
//     console.log(`Here is my count down ${i}`);
    
// }



// const battername = ["Virat", "Ganguly", "tendulkar", "bumrah"]

// const run = [55, 130, 89, "5wk"]

// const combained = battername.concat(run);

// console.log(combained);

// let myName = "Arka Sarker Amit";
// let count = 0;

// for (const i of myName) {
    
//     if (i === "a" || i === "A") {
        
//         count++;
       
        
//     }
// }

//  console.log(count);

// Check whether a string contains all the vowels a, e, i, o, u

// let statement = "Education".toLowerCase();

// let checkVowel = {
//     a: statement.includes('a'),
//     e: statement.includes('e'),
//     i: statement.includes('i'),
//     o: statement.includes('o'),
//     u: statement.includes('u')
// }


// console.log(checkVowel);

// let statement = "Xy and Xx";

// let replaceStr =  statement.replaceAll("x", "y").replaceAll("X", "Y").replaceAll("y", "x");

// console.log(replaceStr);


// let myName = "arka sarker amit";
// let statement = myName.split(' ');
// let capital = [];

// for (let i = 0; i < statement.length; i++) {
     
// let word = statement[i];
// capital[i] = word.charAt(0).toUpperCase()+ word.slice(1);


// }

// console.log(capital.join(' '));

// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff",
//     "golden rod": '#daa520'
// };
// console.log(colors["golden rod"]);

// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };

// car.passenger = 200;
// console.log(car);


// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// };

// console.log(student.physics.marks);

// let student = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };

// let numberOfproperty = Object.keys(student);
// console.log(numberOfproperty.length);


let myObj = {
name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};

let convertArray = Object.keys(myObj);
let  result = Object.values(myObj);

for (let i = 0; i < convertArray.length; i++) {
     
  
    console.log(`${convertArray[i]} | ${typeof(result[i])}`);

    
}




