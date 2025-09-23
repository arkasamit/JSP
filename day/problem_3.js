function  oddNum_avg(num){
  let sum = 0;
  const odd = [];
for (const oddNum of num) {

    if (oddNum % 2 !== 0) {
        
        odd.push(oddNum);
        sum = sum + oddNum
        
    }
}
if (odd.length === 0) {

    return 0

}

return  sum / odd.length
}

const putArray = oddNum_avg([10, 2, 10, 20])
console.log(putArray);

    
