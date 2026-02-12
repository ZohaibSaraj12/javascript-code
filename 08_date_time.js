const myDate = new Date()

// console.log(myDate.getSeconds())
// console.log(myDate.toLocaleString())

// console.log(Date.now());


// console.log(myDate.toString());


// "toDateString()" method
// console.log(myDate.toDateString());


// "toISOString" method -> internally for JS engine it is just a function
// Like this code

//  const user = {
//   name : "Zohaib",
//   greet: function() {
//     console.log(`Hello,${user.name}`)
//   }
// }
// console.log(user.name);
// console.log(user.greet()); // The function which returns nothing, js us ko undefined keh deti haye



//console.log(myDate.toISOString())




// "toJSON()"
// console.log(myDate.toJSON());


// console.log(expiry);


// console.log(myDate.getFullYear());
// console.log(myDate.getDate());
// console.log(myDate.getMonth()) // returns the month "current - 1" if feb so feb month = 2 and -1 => 1 so js uses months starting from 0 index

// console.log(myDate.getMinutes())

console.log(myDate.toDateString().length)
// console.log(myDate.toLocaleDateString());

let myNewDate = new Date(2026, 1, 7, 1, 45);
// console.log(myNewDate.toLocaleString());

// important part



let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log(myNewDate.getTime());


// console.log(myTimeStamp - myNewDate.getTime());


// console.log(Math.floor(Date.now() / 1000)) // to convert time started from january 1, 1970 till today in milliseconds to SECONDS 😬



console.log(myDate.getMonth() + 1);



console.log(`Today the date is ${myDate.toDateString()}`);





let timeStampNew  = Date.now()

let anotherNewDate = new Date(2023, 2, 8)


console.log(timeStampNew - anotherNewDate.getTime());



let a = "";

console.log(a.length);
