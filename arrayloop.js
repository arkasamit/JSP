// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// Input: const statement = 'I am a hard working person'

// Output:

// 'person working hard a am I'

const statement = 'I am a hard working person'
const convertArray = statement.split(' ');
console.log(convertArray.reverse().join(' '));


// 2nd way for practice

const changeToArray = statement.split(' ');
const reverseState = [];

for (let i = 0; i < changeToArray.length; i++) {
    
 reverseState.unshift(changeToArray[i]);
    
}
console.log(reverseState.join(' '));


// push method

// const statement = 'I am a hard working person';
// const changeToArray = statement.split(' ');
// const reverseState = [];

// for (let i = changeToArray.length - 1; i >= 0; i--) {
//     reverseState.push(changeToArray[i]);
// }

// console.log(reverseState.join(' ')); // 'person working hard a am I'



