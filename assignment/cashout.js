// Making a Cashout Function For Local Shop 

function cashOut(money, rate = 1.75) {

    if (typeof money !== "number" || money < 0 ) {
        return `Invalid`
    }
    
    let cashOutCharge = money * (rate/100);
    return cashOutCharge.toFixed(2);

}

const myCashOutCharge = cashOut(20000);
const rahimCashOutCharge = cashOut(100);
const karimCashOutCharge = cashOut("Taka Nai");
const modhuCashOutCharge = cashOut(0);
console.log(`Your Cash Out Charge is ${myCashOutCharge}`);
console.log(`Your Cash Out Charge is ${rahimCashOutCharge}`);
console.log(`Your Cash Out Charge is ${karimCashOutCharge}`);
console.log(`Your Cash Out Charge is ${modhuCashOutCharge}`);
