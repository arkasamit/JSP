function willSuccess(marksModeltest) {

    if (!Array.isArray(marksModeltest)) {
        return "Invalid"
    }
    

    const calculatePassFail = {
        pass: 0,
        fail : 0
    }
    
for (const result of marksModeltest) {
    
    if(result >= 50){
       
        calculatePassFail['pass']++;
          
    }
    else if(result < 50) {

        calculatePassFail['fail']++;
    }
}

return calculatePassFail.pass > calculatePassFail.fail

}

console.log(willSuccess([100, 10, 29, 55,26]));
console.log(willSuccess([100, 10, 29, 55]));
console.log(willSuccess([100, 10, 29, 55,89]));
console.log(willSuccess("I am tensed"));


// function willSuccess(marksModeltest) {
//     let pass = 0;
//     let fail = 0;
    
//     for (const result of marksModeltest) {
//         if(result >= 50) {
//             pass++;
//         } else {
//             fail++;
//         }
//     }
    
//     return pass > fail;

