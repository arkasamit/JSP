// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.


 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ]; 


function employeeSalaries(employeeList) {

    if (!Array.isArray(employeeList) ||  employeeList.length === 0 ) {

      return `Error:Please provide vaid array`
    }

     let totalSalaryPay = 0; 
 
    for (const salary of employeeList) {

        if (typeof salary.experience !== 'number' || typeof salary.starting !== 'number' || typeof salary.increment !== 'number') {
                return `Error:Provide only Number`
        } // Validation Number 
        
        // Check for negative values
       if (salary.experience < 0 || salary.starting < 0 || salary.increment < 0) {
        return "Error: Negative values are not allowed";
    }

    let totalIncrement = salary.experience * salary.increment;
    let totalIndividualSalary = totalIncrement + salary.starting;
    totalSalaryPay = totalSalaryPay + totalIndividualSalary;

 }

 return `Comapany will total salary in one month is ${totalSalaryPay}`;

}

const result = employeeSalaries(employees);
console.log(result);
