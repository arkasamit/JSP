// Time Calculation


function calculateWatchTime(sec) {

    if (!Array.isArray(sec)) {

        return "invalid" ; 
    }

    let totalSec = 0;
    const totaltime = {};

    for (const count of sec) {

        if (typeof count === "string" ) {
            return "invalid"
        }

        totalSec = totalSec + count;
    }

    let hour = Math.floor(totalSec / 3600);
    let minute = Math.floor((totalSec / 60) % 60);
    let second = Math.floor (totalSec % 60);
     
    totaltime.hours = hour;
    totaltime.minutes = minute;
    totaltime.seconds = second;

    return totaltime;
   
}

const time = [199, 119, 300];
const time1 = [1000, 2000, 725];
const time2 = [100, 3800];
const time3 = [];
const time4 = [5600];
const time5 = [1000, 3800, "90"];

console.log(calculateWatchTime(time));
console.log(calculateWatchTime(time1));
console.log(calculateWatchTime(time2));
console.log(calculateWatchTime(time3));
console.log(calculateWatchTime(time4));
console.log(calculateWatchTime(time5));



/* I can also do. 
        return {
        hours: Math.floor(totalSeconds / 3600),
        minutes: Math.floor((totalSeconds % 3600) / 60),
        seconds: totalSeconds % 60
     }; */
