// const users = [
//   {
//     id:1,
//     name:"Ali"
//   },
//   {
//     id:2,
//     name:"Zohaib"
//   },
//   {
//     id:3,
//     name:"Hamza"
//   }
// ];

// const result = users.reduce((box,user)=>{
//  // box[user.id] -> reffering item in an object
//   box[user.id] = (user.name)
//   return box;
// },{});

// console.log(result);


// const orders = [
//  {user:1,price:100},
//  {user:1,price:50},
//  {user:2,price:200}
// ];

// const arr = orders.reduce((box, order) => {
  // box[order.user] for the first value is undefined and ! sign means not of !undefined which will be true,
//   if (!box[order.user]) {
//     box[order.user] = []
//   }
//   box[order.user].push(order.price);
//   return box;
// }, {})

// console.log(arr);


// const orders = [
//  {user:1,price:100},
//  {user:1,price:50},
//  {user:2,price:200}
// ];
// const totals = orders.reduce((box,order)=>{
//   box[order.user] = (box[order.user] || 0) + order.price;
//   return box;
// },{});
// console.log(totals);



const numbers = [3, 2, 4, 1, 5]
const newArr = [...numbers];
const reverted = [...newArr].reverse();

console.log(reverted)
console.log(newArr)
console.log(numbers)