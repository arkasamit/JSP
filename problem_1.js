// Inch to Feet, miles to kilometre

function convert(i, m) {
    
    // convert inch
    const convert_feet = i / 12;
    const modifyInterger = parseInt(convert_feet); // I can also use here math.floor(i/12);
    const convert_inch = i % 12;
    const totalFeet_inch =  `${modifyInterger}feet ${convert_inch} inch`;

    // convert to mile
    let convert_mile = m * 1.609;

    // value return
    return {totalFeet_inch , convert_mile}
      
}

let convert_result = convert(75, 2);
console.log(convert_result);

