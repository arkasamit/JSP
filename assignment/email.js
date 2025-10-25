function vaildEmail(email) {

    if (typeof email !== "string") {
        return "Invalid";
    }
   
    const emailVaild = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailVaild.test(email)
   
}

const result = vaildEmail("arkaamitgb@gmail.com");
const result1 = vaildEmail("arkaamitgbgmail.com");
const result2 = vaildEmail(10);

console.log(result);
console.log(result1);
console.log(result2);


