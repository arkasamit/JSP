// Task 3- Check whether a string contains all the vowels a, e, i, o, u

const statement = "I am very noob developer";

const vowelCheck = {
    a: statement.includes("a"),
    e: statement.includes("e"),
    i: statement.includes("i"),
    o: statement.includes("o"),
    u: statement.includes("u")
}

console.log(vowelCheck);

// Using Function

function findVowel(sentence) {

    const lowerCase = sentence.toLowerCase();

    const findYourvowel = {
    a: lowerCase.includes("a"),
    e: lowerCase.includes("e"),
    i: lowerCase.includes("i"),
    o: lowerCase.includes("o"),
    u: lowerCase.includes("u")
}
    return findYourvowel;
}

let state = "Education"
let checker = findVowel(state);
console.log(checker);

