// Q1 -> sum of all same user ID in one place and other in one place using reduce -> {}
// const payments = [
//  {user:1,amount:300},
//  {user:2,amount:200},
//  {user:1,amount:100},
//  {user:3,amount:500},
//  {user:2,amount:50}
// ];

// const value = payments.reduce((box, payment) => {
//   box[payment.user] = (box[payment.user] || 0) + payment.amount;
//   return box;
// }, {})

// // console.log(value);
// for (let i in value) {
//   console.log(`${i} : ${value[i]}`);
// }

// Q2 -> Group per user -> []
const logs = [
 {user:1,action:"login"},
 {user:2,action:"logout"},
 {user:1,action:"update"},
 {user:2,action:"login"},
 {user:3,action:"login"}
];

const array = logs.reduce((box, log) => {
 if (!box[log.user]) {
  box[log.user] = [];
 }
 box[log.user].push(log.action)
 return box;
}, {})
console.log(array);