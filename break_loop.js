// Task 1 - Write a loop 1 to 200. Use break to exit the loop once you find 100.

for(let i = 1; i <= 200; i++){

     console.log("Number list =", i);

    if (i === 100) {

        console.log("it's now break time", i);
        break;
        
    }

 
}

// Task 2- Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100

let n = 1;
let sum = 0;

while (n <= 200) {
     
    sum = sum + n;
    console.log(sum);
   
    if (sum >= 100) {
        
        console.log("Don't be exeed" , sum);
        break;
    }
    
  n++;
}

// Task 3 - Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)


for(let m = 2; m <= 100; m++){

    if (Number.isInteger(Math.sqrt(m))) {
        console.log("program will close", m);
        break; 
    }
        console.log("The square number is", m);
}

// In JavaScript, values are either "truthy" or "falsy" when used in a condition like an if statement.

// Falsy values include:
// false, 0, "" (empty string), null, undefined, and NaN.

// Everything else is truthy, including any non-zero number (like 2, 1.414, -5, etc.).