
// while loop

while (num <= 60) {

    console.log("I will invest at least 6 hrs every single day for next 60 days!" , num);
    num++;
}


// Practice task

let sum = 0;

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {

    console.log(i);
    sum = sum + i; 
  }
    
}

 console.log("The total number of ",sum);

// Array task

 const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < array.length; i++) {
 if (i == 5) {
 continue;
 }
 console.log(array[i]);
}


// Task 1
for (let i = 0; i <= 60 ; i++){

 console.log("I will invest at least 6 hrs every single day for next 60 days!", i);
 
}

// Task 2 find  odd number and even number

for (let i = 61; i <= 100 ; i++){
   if (i % 2 !== 0) {

    console.log("this is my odd number",i);
    
   }  
}

for(i = 78; i <= 98; i++){
  if (i % 2 === 0) {

    console.log("this is my even number", i);
    
  }

}


