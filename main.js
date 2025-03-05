//UC2 Calculating daily wage

//cases
const Part_TIME = 1;
const FULL_TIME = 2;

//input
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let empHours =0;
empCheck = Math.floor(Math.random()*10) % 3;

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

let empWage = empHours * WAGE_PER_HOUR;
console.log("Employee Wage : " , empWage);