// Write a function to count the number of vowels in a string.

// function checkVowel(statement) {
    
// const findVowel = {
//     a: statement.includes('a'),
//     e: statement.includes('e'),
//     i: statement.includes('i'),
//     o: statement.includes('o'),
//     u: statement.includes('u')
// }

// return findVowel;

// }

// console.log(checkVowel('education'.toLocaleLowerCase()));

function checkVowel(statement) {
    let vowel = 'aeiou';
    let count = {a:0, e:0, i:0, o:0, u:0}

   for (let check of statement.toLowerCase()) {

    if (vowel.includes(check)) {

             count[check]++;
      
    }

   }
   return count;
        
    }


console.log(checkVowel('education'));




