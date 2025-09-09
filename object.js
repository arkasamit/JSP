let myObject = {
    
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true

}
   let keyArray = Object.keys(myObject);

for (let i = 0; i < keyArray.length; i++) {

    // let key = keyArray[i];
    // console.log(key, typeof myObject[key]);
    
    console.log('key:', keyArray[i],"|", "type:", typeof myObject[keyArray[i]]);
    
}

// 2nd type

let myObj = {
name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};

let convertArray = Object.keys(myObj);
let  result = Object.values(myObj);

for (let i = 0; i < convertArray.length; i++) {
     
  
    console.log(`${convertArray[i]} | ${typeof(result[i])}`);

    
}



// The property name (key) isStudent is a string because all keys in a JavaScript object are strings.
// It looks like the key isStudent isn't a string. But behind the scenes, JavaScript automatically converts it to a string.