// Count how many times a string has the letter a or A

let myName = "Arka Sarker Amit";
let countLower = 0;
let countUpper = 0;

for (const i of myName){

    if (i === 'a') {
        countLower++;   
    }
 
    else if(i === 'A'){
        countUpper++
    }

}

console.log("The total number of a:", countLower, "\nThe total number of A:", countUpper) ;


// Alternative
// let myName = "I am very hungry";
// let countLower = 0;
// let countUpper = 0;

// for (let i = 0; i<myName.length; i++){

//     if (myName[i] === 'a') {
//         countLower++;   
//     }
 
//     else if(myName[i] === 'A'){
//         countUpper++
//     }

// }

// console.log("The total number of a:", countLower, "\nThe total number of A:", countUpper) ;

// Function Calling;


function myFunc(statement) {

     let counti = 0 ;
     let countI= 0;

     for(const qty of statement){

       if (qty === "i" ) {

             counti++;
       }

       else if(qty === "I"){

        countI++;

       }

     }
 
    console.log("The total number of i:", counti, "\nThe total number of I:", countI)


     
}

let text ="I am web dev and this is my first function"
myFunc(text);


// Two pera meter calling

function countLetters(text, letterToFind) {
    let count = 0;
    for(const char of text) {
        if(char === letterToFind) {
            count++;
        }
    }
    return count;
}

let txt = "Wow my first work is done, thank You!";
let searchi = countLetters(txt, "i");
let searchI = countLetters(txt, "I");
console.log("The total number of i:", searchi, "\nThe total number of I:", searchI);




