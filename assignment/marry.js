function  marriage(groom, bride) {

    if (typeof groom !== "object" || typeof bride !== "object") {

        return "Invalid"
    }

    let difference = Math.abs(groom.age - bride.age);

    if(groom.gender !== bride.gender && difference <= 7 && groom.age >= bride.age){

        return true;
    }

    else {
        return false;
    }
}

const boy = {name: "Arka", gender: "male", age: 30};
const girl = {name: "Pritha", gender: "female", age: 32};

const boy1 = {name: "Arka", gender: "male", age: 30};
const girl1 = {name: "Pritha", gender: "female", age: 20};

const boy2 = {name: "Arka", gender: "male", age: 30};
const girl2 = {name: "Pritha", gender: "female", age: 26};

const boy3 = {name: "Arka", gender: "male", age: 30};
const girl3 = "My name is Prithe, I am female and my age 20";

console.log(marriage(boy, girl));
console.log(marriage(boy1, girl1));
console.log(marriage(boy2, girl2));
console.log(marriage(boy3, girl3));

