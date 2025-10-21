// Task-4:
// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

// Input


//     const phones = [
//         { model: "PhoneA", brand: "Iphone", price: 95000 },
    //     { model: "PhoneB", brand: "Samsung", price: 40000 },
    //     { model: "PhoneC", brand: "Oppo", price: 26000 },
    //     { model: "PhoneD", brand: "Nokia", price: 35000 },
    //     { model: "PhoneE", brand: "Iphone", price: 105000 },
    //     { model: "PhoneF", brand: "HTC", price: 48000 },
    // ];



 const phone = [
    { model: "phoneA", model:"Iphone", price:95000},
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 }
 ]      


 function findAvgPhonePrice(arrOfPhone) {

    if (!Array.isArray(arrOfPhone) || arrOfPhone.length === 0 ) {
        return "Error: Please You must input valid array"
    }
    
let totalPhonePrice = 0;
for (const price of arrOfPhone) {

    totalPhonePrice = totalPhonePrice + price.price;
    
    
}

const totalavg = totalPhonePrice / arrOfPhone.length 
return totalavg.toFixed(2);

 }

 const result = findAvgPhonePrice(phone);
 console.log(result);
 