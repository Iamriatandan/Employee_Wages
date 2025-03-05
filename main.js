//UC5 Calculating daily wage using function days =20 or working hours = 160

//function to calculate working hours

function getWorkingHours(empCheck){
    //input
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;

    switch(empCheck){
        case 1 : totalEmpHours = PART_TIME_HOURS;
        console.log("Employee worked Part-Time");
        break;
        
        case 2 : totalEmpHours = FULL_TIME_HOURS;
        console.log("Employee worked Full-Time");
        break;
        
        default : totalEmpHours =0;
        console.log("Employee did not work");
        break;
        }
        
        return totalEmpHours;
}

const WAGE_PER_HOUR = 20;

const MAX_HOURS_IN_A_MONTH =160;
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHours =0;
let totalWorkingDays =0;

while(totalEmpHours<MAX_HOURS_IN_A_MONTH && totalWorkingDays<NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10) % 3; 
    totalEmpHours += getWorkingHours(empCheck);
}

let empWage = totalEmpHours * WAGE_PER_HOUR;
console.log( " UC5 :- Total Days : " , totalWorkingDays ,"Total Hours : " , totalEmpHours , "Employee Wage : " , empWage);