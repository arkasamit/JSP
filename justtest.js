// Generate a multiplication table for number 9
let table = 0;

for (let i = 1; i < 10; i++){
    table = 9 * i;
    console.log(`this is 9 * ${i} = ${table}`);
  
}

// Display sum of all the odd numbers from 91 to 129.
let sum = 0;

for (let i = 91; i <= 129; i++) {
   
    if(i % 2 !== 0){

        sum = sum + i
        
    }
    
}

console.log(`This the total odd number's sum ${sum}`);

// Implement a countdown timer that counts down from 81 to 65.

for (let i = 81;  i >= 65; i--) {
    
    console.log(`Here is my count down ${i}`);
    
}




