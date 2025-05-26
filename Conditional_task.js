// Task 1
let burgerPrice = 300;

if (burgerPrice > 500){

    console.log("Coke is free");
    
}
else{

    console.log("Coke Price 30tk only");
    
}

// Task 2

let studentMarks = 55;

console.log("My Score is -", studentMarks);

if (studentMarks <= 100 && studentMarks >= 90) {
    console.log("hurrah I Got A");
    
}

else if (studentMarks <= 89 && studentMarks >= 80) {
     console.log("I Got B");
}

else if (studentMarks <= 79 && studentMarks >= 70) {
     console.log("I Got C");
}

else if (studentMarks <= 69 && studentMarks >= 60) {
     console.log("I Got D");
}

else if (studentMarks <= 59 && studentMarks >= 33) {
     console.log("I Got D");
}

else {

console.log("again Try");

}

// Task 3

const myMarks = 89;
const frndMarks = 56;

if (myMarks >= 80) { //When I get 80 marks then program going to my friends portion
 
    if (frndMarks > 80){

        console.log("Let's go for lunch");     
    }
    else if (frndMarks >= 60){

        console.log("Good Luck for next time");    
    }
    else if(frndMarks >= 40){

        console.log("Keep his sms unseen");
        
    }
    else{
        
        console.log("Block his number");
        
    }
   
}

else {
    console.log("I am really Sad");
    
}

// Task 4

let age = 50;
let ticketPrice = 800;
let student = false;
let finalPrice;

if (age < 10) {

    finalPrice = 0
}

else if (student == true){

    let discount = ticketPrice*50/100;
     finalPrice = ticketPrice - discount;
    
}

else if (age >= 60){
 
    let discount = ticketPrice*15/100;
    finalPrice = ticketPrice - discount;
    

}

else {

    finalPrice = ticketPrice;
    
}

console.log(`You have to pay ${finalPrice}`);



// let age = 0;
// let ticketPrice = 800;
// let student = false;
// let finalFare;

// if (age < 10) {
//   finalFare = 0;
// } else if (student) {
//   finalFare = ticketPrice * 0.5;
// } else if (age >= 60) {
//   finalFare = ticketPrice * 0.85;
// } else {
//   finalFare = ticketPrice;
// }

// console.log(`The final ticket fare is ${finalFare} tk`);