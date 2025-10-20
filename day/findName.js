// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

 const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];


function smallestName(nameOfArray) {

   const finalHeight = [];  
   let comapare = nameOfArray[0];
      
for (let list of nameOfArray) {

   if (comapare.length > list.length) {
           
     comapare = list;
        
    }
}

finalHeight.push(comapare)
return finalHeight
 }

 const result = smallestName(heights2);
 console.log(result);
 