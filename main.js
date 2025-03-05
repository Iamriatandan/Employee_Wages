//UC4 Calculating daily wage using function

//function to calculate working hours

function getWorkingHours(empCheck){
    //input
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;

    switch(empCheck){
        case 1 : empHours = PART_TIME_HOURS;
        console.log("Employee worked Part-Time");
        break;
        
        case 2 : empHours = FULL_TIME_HOURS;
        console.log("Employee worked Full-Time");
        break;
        
        default : empHours =0;
        console.log("Employee did not work");
        break;
        }
        
        return empHours;
}

const WAGE_PER_HOUR = 20;

let empHours =0;
const NUM_OF_WORKING_DAYS = 20;
for(let day = 0 ;day<NUM_OF_WORKING_DAYS;day++){
    let empCheck = Math.floor(Math.random()*10) % 3; 
    empHours += getWorkingHours(empCheck);
}

let empWage = empHours * WAGE_PER_HOUR;
console.log("Total Hours : " , empHours , "Employee Wage : " , empWage);