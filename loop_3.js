// Task 4 - Generate a multiplication table for number 9

let multiply = 0; // Variable to hold the result

for(let i = 1; i<=10; i++){

    multiply = 9 * i; // Multiply 9 by i
    console.log("9 *", i, "=", multiply);// Print the result
    
}

// Task 5- Implement a countdown timer that counts down from 81 to 65.

let i = 81;

while (i >= 65) {
    console.log("countdown timer", i);
    i--;
}