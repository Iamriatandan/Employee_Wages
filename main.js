//UC6 store daily wage with total wage

//function to calculate daily wage
const WAGE_PER_HOUR = 20;
function calculateDailyWage(empHours){
    return empHours *WAGE_PER_HOUR;
}

//function to calculate working hours

function getWorkingHours(empCheck){
    //input
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;

    switch(empCheck){
        case 1 : totalEmpHours = PART_TIME_HOURS;
        break;
        
        case 2 : totalEmpHours = FULL_TIME_HOURS;
        break;
        
        default : totalEmpHours =0;
        break;
        }
        
        return totalEmpHours;
}

const MAX_HOURS_IN_A_MONTH =160;
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHours =0;
let totalWorkingDays =0;
let employeeDailyWageArray = new Array();

while(totalEmpHours<MAX_HOURS_IN_A_MONTH && totalWorkingDays<NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10) % 3; 
    let empHours = getWorkingHours(empCheck);
    totalEmpHours += empHours;
    employeeDailyWageArray.push(calculateDailyWage(empHours));
}

let empWage = calculateDailyWage(totalEmpHours);
console.log( " UC6 :- Total Days : " , totalWorkingDays ,"Total Hours : " , totalEmpHours , "Employee Wage : " , empWage);