// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.

// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output:

// ['orange', 'yellow', 'green', 'blue', 'red']

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

const rev_color = [];

for (let i = 0; i < colors.length; i++) {

rev_color.unshift(colors[i])
    
}
console.log(rev_color);



// Type 2

const color = ['red', 'blue', 'green', 'yellow', 'orange'];

const revs_color = [];

for (const item of color) {
    
    revs_color.unshift(item);
}

console.log(revs_color);
