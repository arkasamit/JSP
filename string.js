// Count how many times a string has the letter a

let myName = "Arka Sarker Amit";
let count = 0;
for (const qty of myName) {

    if (qty.toLowerCase() === 'a'){

        count++

    }
    
}
     console.log('This is a quantity:', count);

    //  Another way to do this:
    

let ftyName = "Great China Empire Ltd"
let num = 0;
let fix = ftyName.toLowerCase().split('');

for (let i = 0; i < fix.length; i++) {
    
    if (fix[i] === 'e'){
        num++

    }
    
}

console.log("This is a quantity:", num);


