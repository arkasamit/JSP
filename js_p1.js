// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

function temperatureCovert(value) {

    const formula = (value*9/5)+32;
    return formula
}

let result = temperatureCovert(10);
console.log(result);

// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2


// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0

function repeatedNumber(num, find) {
  let count = 0;
    for (const i of num) {
        if (i === find) {
            count++
        }
    }
    return count;
}

let theCalculation = repeatedNumber([5,6,11,12,98, 5], 5);
console.log(theCalculation);
let theCalculationSecond = repeatedNumber([5, 6, 11, 12, 98, 5], 25);
console.log(theCalculationSecond);


// Write a function to count the number of vowels in a string.

function vowelCounter(str) {
    let countVowel = 0
    for (const i of str.toLowerCase()) {
        // if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
        //    countVowel++ 
        // }  

        if ("aeiou".includes(i)) {
        countVowel++;
         }
    }

    return countVowel;

}

let word = vowelCounter("Apple")
console.log(word);


// Task-4:
// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

function longestWordFinder(longestStr) {
 
   const newArr =  longestStr.split(" ");
   let finalWord = "";
    
for (const i of newArr) {

    if (i.length > finalWord.length) {
        finalWord = i
    }   
}

return finalWord

}

let theSentence = longestWordFinder("I am learning Programming to become a programmeriiiiiiiii");
console.log(theSentence);
