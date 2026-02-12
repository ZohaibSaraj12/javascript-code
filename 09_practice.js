 //* Q1 -> "   Zohaib123@GMAIL.Com   " -> normalize this string
let str = "   Zohaib123@GMAIL.Com   ";
console.log(str.trim().toLowerCase());


/*
* Q2->Ensure that password must not be less than 8 chars
isValidPassword("abc123") → false
isValidPassword("abc12345") → true
*/

// Q2 - answer

// function isValidPassword(password) {
//   if (password.length < 8) {
//     return false;
//   }
//   else {
//     return true;
//   }
// }
// console.log(isValidPassword("abc123"));
// console.log(isValidPassword("abc12345"));


//* Q3 -> get username from "Zohaib123@GMAIL.Com" output should be Zohaib123
let newStr = str.split("@");

// console.log(newStr[0])

//* Q4 -> First letter capital in "zohaib" -> Zohaib



let newString = "zohaib";

console.log(newString[0].toUpperCase() + newString.slice(1))




//* Q5 -> check "12345" -> true and "12345Acs" --> false

function isNumberString(str) {
  return !isNaN(Number(str));
}

console.log(isNumberString("12345")); // true
console.log(isNumberString("123a5")); // false






