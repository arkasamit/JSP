const teamMember = ['Virat', 'Ganguly', 'Tendulkar', 'Virat'];
const run =[100, 50, 25, 100];


function noDuplicate(inputNumber) {
    const anotherArray = [];
    for (const item of inputNumber) {
        
        if (anotherArray.includes(item) === false) {
            
            anotherArray.push(item);
        }
    }

    return anotherArray;

}

let result = noDuplicate(teamMember);
console.log(result);
let result_2 = noDuplicate(run);
console.log(result_2);
