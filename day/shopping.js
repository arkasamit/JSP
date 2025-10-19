// total shopping cost 

const shoppingList = [
    {product: "shirt", price: 500,  quantity:2 },
    {product: "pant", price: 1100,   quantity:4 },
    {product: "book", price: 3000,   quantity: 3 },
    {product: "laptop", price:50000, quantity: 1 } 
]

function totalPrice(cost) {
    let total = 0;

    for (const producrtPrice of cost) {

        let productCost = producrtPrice.price * producrtPrice.quantity;
        total = total + productCost;

    }

   return total;
}


myCost = totalPrice(shoppingList);
console.log(myCost);
