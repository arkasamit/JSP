// Count how many times a string has the letter a

let sentence = "I have a ball YAAA";
let count = 0;

for (const i of sentence) {
    if (i.toLowerCase() === "a") {
     count++
    }
}
console.log(count);

// Count how many times a string has the letter a or A
let sentences= "I have a ball YAAA";
let counta = 0;
let countA = 0;


for (const i of sentences) {
    if (i === "a") {
     counta++
    }
 else if (i === "A"){
   countA++
 }

}
// 2nd type of solution

console.log(`a is : ${counta} and A is : ${countA}`);

const counts = { a: 0, A: 0 };

for (const char of sentence) {
  if (char in counts) counts[char]++;
}

console.log(counts);


// Check whether a string contains all the vowels a, e, i, o, u

let vowel = {
    a : 0,
    e : 0,
    i : 0,
    o : 0,
    u : 0
};

let sentencess = "I am in very trouble";

for (const i of sentencess) {

    if (i === "a") {
        vowel[i]++;
    }
    else if (i === "e") {
         vowel[i]++;
    }

     else if (i === "i") {
         vowel[i]++;
    }
    
     else if (i === "o") {
        vowel[i]++;
    }
    
     else if (i === "u") {
        vowel[i]++;
    }
    
}

console.log(vowel);


//2nd way


function findVowel(state) {
    const Vowels = {
    a : 0,
    e : 0,
    i : 0,
    o : 0,
    u : 0
}
    
    for (const findV of state.toLowerCase()) {
        if (findV in Vowels) {
            Vowels[findV]++;
        }
    }

    return Vowels;
}

console.log(findVowel("I am very Hungry"));

// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

let word = "xY";
let words = "Yx"
let result = word.replaceAll("x" ,"X").replaceAll("Y", "y");
let results = words.replaceAll("x" ,"X").replaceAll("Y", "y");
console.log(result + results);

// Using function

function replace(str) {
    
    let finalResult = str.replaceAll("x", "X").replaceAll("y", "Y");

    return finalResult;
}

let value = "xy";
let values = "Yy";

console.log(replace(value)+ replace(values));


// Capitalize Every first Letter of each word in a String

let statement = "arka sarker amit";
let createarr = statement.split(" ");
let emptyarr = [];

for (const i of createarr) {
    
    let capital = i[0].toUpperCase() + i.slice(1);
    emptyarr.push(capital);
   
}

console.log(emptyarr.join(" "));




// Capitalize Every first Letter of each word in a String

let state = "arka sarker amit";
let createarry = state.split(" ");
let grandfinale = [];

for (const word of createarry) {
    
    let resulti = word.split('');
    let finalResultm = resulti[0].toUpperCase() + resulti.slice(1).join("") ;
     grandfinale.push(finalResultm);
    
}

  console.log(grandfinale.join(" "));  