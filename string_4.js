// If a given string has either x, replace x by y. if the given string has X, replace it by Y.
 
let statement = "my ex is always is X";
let result = statement.replaceAll("x", "y").replaceAll("X", "Y");

console.log(result);



// Task 5 Capitalize Every first Letter of each word in a String

// COMMIT: Split string into array of words
let myName = "arka sarker amit";
let convertArray = myName.split(' '); // ["arka", "sarker", "amit"]

// COMMIT: Initialize empty array for capitalized words
let capitalFirstWord = [];

// COMMIT: Loop through each word in array
for (let i = 0; i < convertArray.length; i++) {

    // COMMIT: Get current word from array
    let word = convertArray[i]; // "arka", "sarker", "amit"

    // COMMIT: Capitalize first letter + add rest of word
    capitalFirstWord[i] = word.charAt(0).toUpperCase() + word.slice(1);
    // "A" + "rka" = "Arka"
    // "S" + "arker" = "Sarker" 
    // "A" + "mit" = "Amit"
}

// COMMIT: Join capitalized words back into string
console.log(capitalFirstWord.join(' ')); // "Arka Sarker Amit"

// split(' ') - String to array conversion

// charAt(0) - Get first character

// toUpperCase() - Capitalize letter

// slice(1) - Get substring from position 1

// join(' ') - Array to string conversion

//Using this solve this problem in function method

function capitalWord(sentence) {
    
      let createArray = sentence.split(' ');
      let emptyValue = [];

     for (let m = 0; m < createArray.length; m++) {

        const finalValue = createArray[m];
        emptyValue[m] = finalValue.charAt(0).toUpperCase() + finalValue.slice(1);
        
     }

     return emptyValue.join(' ');

}

let example = "i am very good javascript developer"
let print = capitalWord(example);
console.log(print);

