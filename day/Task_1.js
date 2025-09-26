// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

function convertTemp(temp) {
    
if (typeof temp !== 'number') {
        throw new Error('Input must be a number');
    }


    const calculate = (temp * 1.8)+32;

    return calculate

}

let inputTemp = convertTemp(10);
console.log(inputTemp);
