// map method usage
// .map() -> har element ko change kar k aik naya array deta h (transforms data)
// const users = [
//   { name: "Ali", dept: "SE" },
//   { name: "Zohaib", dept: "SE" }
// ];


// const names = users.map(u => u.name);
// console.log(names);


/*******************************/
// const users = [
//   {
//     active: true
//   },
//   {
//     active: false
//   }
// ];

// const activeUsers = users.filter(u => u.active); // condition true waly elements rakhta and unwanted remove karta
// console.log(activeUsers)

/****************************** */

// const users = [
//   {id: 1, name: "Zohaib", },
//   { id: 3, name: "Ali",},
//   {id: 3, name: "Fatima"},

// ];

// const checkElement = users.find(u => u.id === 3) // aik record nikalo pehla matching element nikalta, id same hain is case mein but dekho to pehla element hi return horaha h
// console.log(checkElement);



/*********************************** */
//reduce method
// const prices = [100, 200, 50];


// const total = prices.reduce((sum, p) => sum + p);
// console.log(total);

// prices.forEach(u => console.log(u))




/**********************************/
// some method
// koi aik match karta h agar aik bhi value array mein true to return true otherwise false return kro

// const roles = ["user", "editor", "admin"];
// const value = roles.some(r => r === "admin");
// console.log(value);





/**********************************/
// every() method
// sab match karty haiin k nhn return one value true or false

const array = [1, 2, 3, 4, 5];

// const val = array.every(e => e >= 0);
// console.log(val);

const ages = [18,22,30];
// console.log(ages.every(a => a >= 18));



// const cart = [
//   {price:100},
//   {price:200},
//   {price:50}
// ];



// let p = cart.reduce((acc, curr) => acc + curr.price, 0);

// console.log(p);


// const roles = ["user","editor","admin"];

// console.log(roles.some(e => e === "admin"));




// const users = [
//   {verified:true},
//   {verified:true},
//   {verified:false}
// ];


// console.log(users.every(e => e.verified === true || e.verified === false))


// const usersFE = [
//   {email:"a@gmail.com"},
//   {email:"b@gmail.com"}
// ];

// usersFE.forEach(u => console.log(u.email));

// const users = [
//   {active:true},
//   {active:false},
//   {active:true},
//   {active:true}
// ];


// let val = users.reduce((acc, curr) => {
//   if (curr.active === true) {
//     return acc + 1
//   }
//   else {
//     return acc
//   }
// }, 0);

// console.log(val)


// const nums = [5, 10, 15, 20];


// let val = nums.reduce((acc, curr) => acc + curr, 0);
// console.log(val);


const nums = [1,2,3,4,5,6,8];

// console.log(nums.reduce((acc, curr) => curr % 2 === 0 ? acc + 1 : acc));




// console.log([].reduce((box,n)=>box+n,0))
// console.log(["a","b","c"].reduce((box,ch)=>box+ch,""))


// gives error because no initial value given, initial value in a sense of [1, 2, 3] would be zero, in case of strings ["1", "2", "3"] will be empty string "" and in case of the object like [{active : false}] will be {}



// number → 0
// string → ""
// array → []
// object → {}

// console.log([].reduce((a,b)=>a+b));


const users = [
 {id:1,name:"Ali"},
 {id:2,name:"Zohaib"}
];

// const list = users.reduce((arr, user) => {
//   arr.push(user.name);
//   return arr;
// }, {})


// console.log(list);




const arr = users.reduce((arr, u) => {
 arr.push({username: u.name});
 return arr
}, [])

console.log(arr);
console.log(users);

const cart = [
 {item:"pen",price:10},
 {item:"book",price:50}
];

const arrayN = cart.reduce((arr, current) => {
 arr.push(current.price)
 return arr
}, [])


console.log(arrayN);

