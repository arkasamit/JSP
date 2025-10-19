// Find Minimum Phone Price

const mobile = [
{ mobileName: "Samsung A52s", price: 38000, camera: "16mp", color: "White"},
{ mobileName: "Realme", price: 28000, camera: "16mp", color: "Grey"},
{ mobileName: "iPhone", price: 108000, camera: "12mp", color: "Blue"},
{ mobileName: "Xiaomi", price: 15000, camera: "48mp", color: "Black"},
{ mobileName: "Techno", price: 10000, camera: "52mp", color: "Metal"},
]

function buyPhone(cost) {
    let miniPrice = cost[0];
    for (let mini of cost) {
        if (miniPrice.price > mini.price) { 

           miniPrice = mini;
        }
    }
   return miniPrice;
}

const lowestPriceOfMobile = buyPhone(mobile);
console.log(lowestPriceOfMobile);