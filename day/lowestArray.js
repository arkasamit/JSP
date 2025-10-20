// Task -1:
// Find the lowest number in the array below.
// // const heights2 = [167, 190, 120, 165, 137]; 


const heights2 = [167, 190, 120, 165, 137]

function findLowestNum(num) {
    
    let theNumber = num[0];
    for (let find of num) {
        if (theNumber > find) {
            
            theNumber = find;

        }
    }
return theNumber;
}

const result = findLowestNum(heights2);
console.log(result);
