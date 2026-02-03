"use strict"


let score = 33;

// console.log(typeof score)
// console.log(typeof (score))



let valueInNumber = Number(score);

// console.log(typeof vauleInNumber);
// console.log(valueInNumber);


//conversion

// "33" => easily converted to 33 using line 7
// "33abc" => not converted to number, rather a NaN
// "null" => converted to zero
// "undefined" => converted to NaN(not a number)
// "zohaib" => converted to NaN


let isLoggedIn = undefined;
let booleanConversionIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanConversionIsLoggedIn);




let someNumber = 40;

let stringNumber = String(someNumber)


// console.log(stringNumber);
// console.log(typeof stringNumber);




// ********************* Operations *******************


// console.log(1 + 2 + "Hello");
// console.log("1" + 2);
// console.log("hello" + 2 + 2)
// console.log("hello" + 2 + 2 + 5 + 6)
// console.error("2" == 2)



// console.log(typeof NaN);

let x = 10;
let y = "10"

// console.log(x == y, x === y);


// console.log("5" / 2)
// console.log(true + true)
// console.log(typeof [])
// console.log([] == false)
// js treats true as a number 😬
// console.log(true + 1 + false - true * true)
// js compares object by reference not by value
// console.log([] === [])



parseInt("101", 2); // 5

//console.log(parseInt("101", 2))


let userOne = {
  email: "Userone@gmail.com",
  phoneNumber: 923026102243,

}


let userTwo = userOne;


userTwo.email = "usertwo@gmail.com"

// console.log(userOne.email);
// console.log(userTwo.email)


// JS mein + string ka dost hai
// baqi operators maths ke
// console.log("37" + 5)
// console.log(4 + 5 + "37" + 5)
// console.log("37" - 5)
// console.log("37" * 5)
// console.log("37" / 5)
// console.log("37" % 5)
// console.log("Hello" - 2)




/* Hello these are my comments how are you now *\/ and the most important thing*/

// console.log(Boolean(String(Number(String(20)))) + 30)


console.log(parseFloat(3.14))
console.log(parseFloat("3.14"))
console.log(parseFloat("  3.14  "))
console.log(parseFloat("314e-2"))
console.log(parseFloat("0.0314E+2"))
console.log(parseFloat("0.0314E+2"))
console.log(parseFloat("3.14some non-digit characters"))

console.log(parseFloat({
  toString() {
    return "3.14"
  },
}))



