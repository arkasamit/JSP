function leapYear(year) {
    
if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    
    return (`${year} year is leap year`); 
}
else{
 
    return (`${year} year is normal year`);  
}
}

const inputYear = leapYear(2024);
console.log(inputYear);


// const leapYear = year => 
//   ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) 
//     ? `${year} year is leap year` 
//     : `${year} year is normal year`;

// condition ? valueIfTrue : valueIfFalse