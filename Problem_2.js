function leapYear(year) {
    
if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    
    return "year is leap year"; 
    // return true;
}
else{
 
    return "year is normal year";  
    // return false;
}
}

const inputYear = leapYear(2024);
const inputYear_2 = leapYear(2025);
const inputYear_3 = leapYear(1992);
const inputYear_4= leapYear(1991);
console.log(`2024 = ${inputYear}, 2025 = ${inputYear_2}, 1992 = ${inputYear_3}, 1991 = ${inputYear_4}`);


// const leapYear = year => 
//   ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) 
//     ? `${year} year is leap year` 
//     : `${year} year is normal year`;

// condition ? valueIfTrue : valueIfFalse