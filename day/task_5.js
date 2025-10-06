// Minimum Number

const height = [266, 6, 3, 3, 4, 25];

function minNum(number) {

    let min = number[0];
    for (const num of number) {
        if (min > num) {
            
            min = num;
        }
        
    }
   return min;
}

// Total Cost Calculation

const result = minNum(height);
console.log(`The minimum number is ${result}`);

function TotalTaka(ShirtQty, PantQty, ShoeQty) {
    const shirt = 500;
    const pant = 300;
    const shoe = 900;

    const myShirt = shirt * ShirtQty;
    const mypant = pant * PantQty;
    const myShoe = shoe * ShoeQty;

    const myTotalCost = myShirt + mypant + myShoe;

    return myTotalCost;

}


const qtyOfClothes = TotalTaka(2, 2, 1);
console.log(`My total expendeture is ${qtyOfClothes}`);

