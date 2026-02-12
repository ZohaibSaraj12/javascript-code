// Q1 -> sum of all salaries

// const employees = [
//   {salary:500},
//   {salary:700},
//   {salary:800}
// ];


// let sal = employees.reduce((result, current) => result + current.salary, 0)
// console.log(sal)

// Q2 -> return a new array of name from users array

// const users = [
//  {name:"Ali",active:true},
//  {name:"Hamza",active:false},
//  {name:"Zohaib",active:true}
// ];

// const arr = users.reduce((arr, current) => {
//   arr.push(current.name);
//   return arr;
// }, [])


// console.log(arr);


// Q3 -> cart total quantity

// const cart = [
//  {qty:2},
//  {qty:3},
//  {qty:5}
// ];

// const value = cart.reduce((initialValue, currentValue) => {
//   return initialValue + currentValue.qty
// }, 0)
// console.log(value);


//Q4 -> lower case kar k email ko new array mein store karwao

// const users = [
//  {email:"ALI@GMAIL.COM"},
//  {email:"ZOHAIB@GMAIL.COM"}
// ];

// const arr = users.reduce((arr, curr) => {
//   arr.push(curr.email.toLowerCase())
//   return arr
// }, [])
// console.log(arr);


// Q5 -> Even numbers -> push in new array

const nums = [1,2,3,4,5,6];

// reduce ko har case mein kuch na kuch return chahiye hota h har iteration pe to is code mein sirf even k case mein number ja rahy and then jab wo index 0 par hota h to initialValue=0 but if wali statement na chali to us n return kuch nhn kia 1st iteration pr and return kar dia undefined jab wo undefined + 1 hoa to us n kaha NaN


// rule yaad rakhna ----> ----> "Reduce callback MUST always return accumulator or total or initialValue in this code"
// const val = nums.reduce((initialValue, current) => {
//   if (current % 2 === 0) {
//     return initialValue + 1
//   }
// }, 0)
// console.log(val); // returns NaN

// correct version of the above code

const val = nums.reduce((initialValue, current) => {
  if (current % 2 === 0) {
    return initialValue + 1
  }
  return initialValue;
}, 0)
console.log(val); // returns 3

