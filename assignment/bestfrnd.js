// Please show they are Best Friend or not? 

function isBestFriend(f1, f2) {

    if(typeof f1 !== "object" || typeof f2 !== "object" || f1 === null || f2 === null){
     return "Invalid";
    }
       if (!f1.Roll || !f1.BestFriend || !f2.Roll || !f2.BestFriend) {
        return "Invalid";
    }
    

return f1.Roll === f2.BestFriend && f2.Roll === f1.BestFriend;

//     if (f1.Roll === f2.BestFriend && f2.Roll === f1.BestFriend) {
//         return "true"
//     }

//    else{
//     return "false"
// }

    
}



const friend = {name: "Hasem", Roll: 1, BestFriend: 2};
const friend2 = {name: "kasem", Roll: 2, BestFriend: 1};

const friend3 = {name: "Mohdu", Roll: 1, BestFriend: 2};
const friend4 = {name: "kasem", Roll: 2, BestFriend: 5};

const friend5 = {name: "Hasem", Roll: 1, BestFriend: 2};
const friend6 = "I have no friend";

const friend7 = {name: "Mohdu", Roll: 1, BestFriend: 2};
const friend8 = {name: "kasem", Roll: 2};

console.log(isBestFriend(friend, friend2));
console.log(isBestFriend(friend3, friend4));
console.log(isBestFriend(friend5, friend6));
console.log(isBestFriend(friend7, friend8));

