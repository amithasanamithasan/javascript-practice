// // /  lype year 
//      function isLeapYear(year) {
//     // Leap years are divisible by 4
//     if (year % 4 !== 0) {
//       return false;
//     }
    
//     // However, years divisible by 100 are not leap years, unless...
//     if (year % 100 === 0) {
//       // ...they are also divisible by 400
//       if (year % 400 === 0) {
//         return true;
//       } else {
//         return false;
//       }
//     }
    
//     return true;
//   }
  
//   // Test the function
//   const yearToCheck = 2024;
//   if (isLeapYear(yearToCheck)) {
//     console.log(yearToCheck + " is a leap year.");
//   } else {
//     console.log(yearToCheck + " is not a leap year.");
//   }

function isLeapYear(year)
{
 const remainder= year % 4;
 if(remainder === 0)
 {
    // console.log('your year is  leap year',year);
    return true;
 }
 else
 {
    // console.log('your year is not a leap year',year);
    return false;
 }
 
}
// isLeapYear(1933);
// isLeapYear(1960);
// console.log(isLeapYeara);
const ismyleapyera = isLeapYear(1933);
 console.log('my year ',ismyleapyera);
 const isherleapyear = isLeapYear (1960);
 console.log ('her year', isherleapyear);