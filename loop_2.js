// Task 3 - Display sum of all the odd numbers from 91 to 129.

let sum = 0;

for(i = 91; i <= 129; i++){

 if (i % 2 !== 0) {

    sum = sum + i;
    console.log("The break sum",sum);
    
 }
}

 console.log("The total sum of all the odd numbers is", sum);

 // Task 3 - Display sum of all the even numbers from 51 to 85 with while loop

let n = 51;
let total = 0;

while (n <= 85) {
    if (n % 2 === 0) {

        console.log("even numbers", n);
        
        total = total + i
    }
    n++
}
 console.log("The total sum of all the even numbers is", total);