// Inch to Feet, miles to kilometre

function convert(i, m) {
    
    let convert_inch = i * 0.083;
    let convert_mile = m * 1.609;
   
    return convert_inch.toFixed(3) , convert_mile.toFixed(3);
     
}

let convert_num = convert(12, 2);
console.log(convert_num);
