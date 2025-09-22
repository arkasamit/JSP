let myScore = 85; 
let frndScore = 80;

if (myScore >= 80) {
    console.log("You're inside your friend's score.");
   
    if (frndScore >= 80 ) {  
        console.log('Go for lunch');
    }
   else if (frndScore < 80 && frndScore >= 60 ) {
        console.log('Good Luck for next time');
   }

    else if (frndScore < 60 && frndScore >= 40 ){
          
        console.log('keep your friend message unseen');

    }
    else if ( frndScore < 40) {
      console.log('Block you');
      
    }   
} 
else {
    console.log("Go home, sleep 😴, and act sad 😢.");
   
}

