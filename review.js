// Review day one

let myTaka = 1000;
let applePrice = 300;
let orangePrice = 400;

let returnMyMoney = myTaka - (applePrice + orangePrice);
console.log(returnMyMoney);

// next problem

let math = 75.25;
let biology = 65;
let chemistry = 80;
let physics = 35.45;
let bangla = 99.50;

let totalMarks = math + biology + chemistry + physics + bangla;
let myAvg = totalMarks / 5;
console.log(myAvg.toFixed(2));

// third repeat problem
let number = 119;
console.log(number % 5);

// Fourth Problem

let  myScore = 80;
let frndScore = 76;


if (myScore >= 80) {

 if (frndScore >= 80) {

        console.log(" Let's go for lunch"); 
    }
  else if(frndScore < 80 || frndScore >= 60){

    console.log("good luck next time"); 
  }
   else if(frndScore < 60 || frndScore >= 40){

    console.log("keep your friend's message unseen."); 
  }
    
  else if(frndScore < 40 ){

    console.log("block your friend");  
  }
   
} 

else {

    console.log("Go Home & Sleep");
    
}


// Question 4

let TicketFare = 800;
let age = 60;
let isStudent = false;
let finalFare;


if (age < 10) {

 finalFare = 0;

}
else if(isStudent === true){

    let discountPrice = TicketFare / 2;
    finalFare = discountPrice;

}

else if(age >= 60){
 
     discountPrice = TicketFare * 0.85;
     finalFare = discountPrice;
}

else{
     finalFare = TicketFare;
}

console.log(`Our ticket price is ${finalFare}`);

// loop task

let sentence =  "I ill invest at least 6 hrs every single day for next 60 days!"

for (let i = 0; i < 60; i++) {

  let count =  i + 1;
  console.log(`${count}. ${sentence}`);
}

for (let i = 61; i <= 100; i++) {
  
  if (i % 2 !== 0) {
    let oddNumber = i;
    console.log("This is my odd number :",i);
  }
  }

// ODD Sum

let  theTotal =  0;

for (let i = 91; i <= 129; i++){

if (i % 2 !== 0) {
  theTotal += i;
  console.log(theTotal);
}

}

// Generate a multiplication table for number 9

let table = 9;

for (let i = 1;  i <= 10; i++) {

  let multiply = table * i;
  console.log(`${table} * ${i} = ${multiply}`);
  
  
}

// Generate a multiplication table for number 9 Using function

function multiplication(a) {
  
  for (let i = 1;  i <= 10; i++) {
   
  let multiply = a * i;
  console.log(`${a} * ${i} = ${multiply}`);
 
}
}
multiplication(10);

// Implement a countdown timer that counts down from 81 to 65.

  for (let i = 81; i >= 65; i--){ 
    console.log(i);
    
  }
  
//  Subtask-1:

// Display sum of all the odd numbers from 81 to 131.

let toto = 0;
let i = 81;

while (i <= 131) {
  
  if (i % 2 !== 0) {
    toto = toto + i;
    console.log(toto);
   
  }
i++;
}


// Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)

for (let i = 1; i <= 100; i++) {
  let sqrt = Math.sqrt(i);       // Square root of i
  if (Number.isInteger(sqrt)) {  // Check if it’s a perfect square
    console.log(i);            
    break;                        // Stop at first square
  } else {
    console.log(i);               // Print non-square numbers
  }
}


// display odd number from 55 to 85 and skip the numbers divisible by 5.

for (let  i = 55;  i <= 85; i++) {

  if (i % 2 ===0 || i % 5 === 0 ) {

    continue;
  }

  console.log(i);
  
  
}