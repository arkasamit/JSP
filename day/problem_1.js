function conversion(inch , mile) {

    // convert inch to feet

    const convertFeet = Math.floor(inch/12);    //I can also use convertInterger = parseInt(convertFeet);
    const fractionValue = inch % 12;
    const totalFeet_inch = `${convertFeet} feet  ${fractionValue} inch`;
    
    // convert to km

    const convertKm = mile * 1.60934;
    const totalKm = `${mile} = ${convertKm} km`;

    return {totalFeet_inch, totalKm}
    
}

const result = conversion(68, 5);
console.log(result);
