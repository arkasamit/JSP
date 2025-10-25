// Print the election result 
function election(voteArr) {

    if (!Array.isArray(voteArr)) {

        return "Invalid"
    }
    
    const myObj = {};

    for (const vote of voteArr) {
        
        if (myObj[vote]) {
            myObj[vote]++
        }
        else{
            myObj[vote] = 1;
        }

    }

    let maxVote = 0;
    let result = [];

    for (const count in myObj) {
        
        if (myObj[count] > maxVote) {
      
            maxVote = myObj[count]; 
            result = [count]; 
        }

        else if(myObj[count] === maxVote){
            result.push(count);
        }
    
    }


      if (result.length > 1) {
        return "Draw";
        }
     else {
       return result[0];
     }
    
}

const myArray = ["mango", "banana", "apple", "mango", "apple"];
const myArray1 = ["mango", "banana", "apple", "mango", "grape"];
const myArray2 = ["mango", "banana", "apple", "banana", "grape"];
const myArray3 = "mango is win"

console.log(election(myArray));
console.log(election(myArray1));
console.log(election(myArray2));
console.log(election(myArray3));