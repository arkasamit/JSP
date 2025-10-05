let input = "I am learning Programming to become a programmer";
let change = input.split(" ");
let longest = "";


for (let i = 0; i < change.length; i++) {
    
    if (change[i].length > longest.length) {
        
        longest = change[i];
        console.log(longest);
    }

}


console.log(longest);
