// Task-1
// Take four parameters. Multiply the four numbers and then return the result

function multiply(a, b, c, d) {
    
    const result = a * b * c * d;
    return result;
}

const num = multiply(10, 10, 10, 10);
console.log(num);


// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function sum(number) {

    let result = 0;  
    if (number % 2 === 0) {
       result =  number / 2;
    }

    else if (number % 2 !== 0) {
         result =  number * 2;
    } 
    return result;
}

const itemNum = sum(22);
console.log(itemNum);
const itemNumodd = sum(23);
console.log(itemNumodd);


// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(arrnumber) {
    
    let avg = 0;

  for (let i = 0; i < arrnumber.length; i++) {

    avg = arrnumber[i] + avg;
  }

  let finalresult = avg / arrnumber.length;
  return finalresult;
}

const arrValue = make_avg([10, 4, 4, 10]);
console.log(arrValue);

const arrValueodd = make_avg([3, 3, 3, 5]);
console.log(arrValueodd.toFixed(2));


// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(bnrString) {

    let count = 0;

    for (const i of bnrString) {
       if (i === "0") {
        count++
       }
    }

  return count;    
}

let finalResult = count_zero("00110100");
console.log(finalResult);


// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd.


function odd_even(value) {

    if (value % 2 === 0) {

        return "Even";
        
    }
    else {
        return "Odd"
    }
    // return value % 2 === 0 ? "Even" : "Odd";
}

let integerNum = odd_even(20);
console.log(integerNum);
