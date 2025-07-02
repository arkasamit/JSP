// Task 1- Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.

for(let i = 1; i <= 40; i++){
    
    if (i % 2 !== 0) {
        
      continue;
        
        
    }
    
console.log("Print even number -", i);

}

// Task 2- display odd number from 55 to 85 and skip the numbers divisible by 5.

let n = 55;

while (n < 85) {
  
    if (n % 5 === 0 || n % 2 === 0) {
        n++;
        continue;
    }
   
    console.log("Print odd number =", n);
    n++
}

// continue এবং break এর পার্থক্য:
// ✅ continue:
// continue ব্যবহার করলে, লুপের বাকি অংশ স্কিপ করে সরাসরি পরবর্তী iteration-এ চলে যায়।

// ➡️ অর্থাৎ, যদি continue এর আগে n++ না লেখা থাকে, তাহলে n এর মান বাড়বে না — লুপ একই মানে আটকে যাবে।

// ✅ break:
// break ব্যবহার করলে, লুপ একদম বন্ধ হয়ে যায়। আর কোন iteration হয় না।

