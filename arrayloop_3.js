// Use a for...of loop to concatenate all the elements of an array into a single string.

// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// Output:

// 'TomTimTinTik'

var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

let strJoin = numbers.join('')

console.log(strJoin);

// 2nd portion 

let result = '';

for (const state of numbers) {
    
    result = result + state;   // Direct string concatenation

}

console.log(result);

