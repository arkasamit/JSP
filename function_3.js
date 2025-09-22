// Write a function called make_avg() which will take an array of integers and the size of that array and
// return the average of those values.

function make_avg(putArray){
   
      let sum = 0; 
      
      for (const numbers of putArray) {
        
        sum = sum + numbers;
      }

    let result = sum / putArray.length
    return result;

}

const numberOfThAvg = make_avg([10, 5, 15 ])
console.log(numberOfThAvg);
