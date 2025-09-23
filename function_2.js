// Take a number if the number is odd multiply it by 2 and return the result. 
// If the number is even divide it by two and return the result.

let result = function calculate(num1){
    let finalResult;

    if (num1 % 2 === 0){
     
        finalResult = num1 * 2;
          
    } 
    
    else {
        
        finalResult = num1 / 2;  
    }

  return finalResult;
}
    
let input = result(10);

console.log(input);
