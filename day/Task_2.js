// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2


// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0

function arrayInput(arrayInfo, find) {
   let count = 0;

  for (let i = 0; i < arrayInfo.length; i++) {
  
    if (arrayInfo[i] === find) {
        
        count++;
    } 
  }
  
 return count;
   

}

const numbers = [5,6,11,12,98, 5];
const result = arrayInput(numbers, 5);
console.log(result);
const result_2 = arrayInput(numbers, 25);
console.log(result_2);
