// If a given string has either x, replace x by y. if the given string has X, replace it by Y.
 
let statement = "my ex is always is X";
let result = statement.replaceAll("x", "y").replaceAll("X", "Y");

console.log(result);



// Task 5 Capitalize Every first Letter of each word in a String

let myName = "arka sarker amit";
let convertArray = myName.split(' ');
let capitalFirstWord = [];

for (let i = 0; i < convertArray.length; i++) {

        let word = convertArray[i];
        capitalFirstWord[i] = word.charAt(0).toUpperCase("")+ word.slice(1);

}

console.log(capitalFirstWord.join(' '));
