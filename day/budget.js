// Your task is to calculate the total budget required to buy electronics
    // laptop = 35000 tk
    // tablet = 15000 tk
    // mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.


const laptopPrice = 35000;
const tabletPrice = 15000;
const mobilePrice = 20000;

function calculateElectronicsBudget(laptopQty, tabletQty, mobileQty) {

    if (typeof laptopQty !== 'number' || typeof tabletQty !== 'number' || typeof mobileQty !== 'number') {
        return "Please input number"
    }

       if (laptopQty < 0 || tabletQty < 0 || mobileQty < 0) {
        return "Error: Quantities cannot be negative";
    }
    
    
    let totalLaptopPrice = laptopPrice * laptopQty;
    let totalTabletPrice = tabletPrice * tabletQty;
    let totalMobilePrice = mobilePrice * mobileQty;

    const total = totalLaptopPrice + totalTabletPrice + totalMobilePrice;

    return total;
      

    
}

const result = calculateElectronicsBudget(10, 3, 5);
console.log(result);
