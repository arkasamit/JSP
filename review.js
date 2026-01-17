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
