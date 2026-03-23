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


