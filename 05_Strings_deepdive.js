let nameOfPerson = "Zohaib"
let rollNo = 14

// String interpolation, in javascript,
// use backticks to provide the string interpolation
// console.log(`hello my name is "${nameOfPerson}" and my rollNo is "${rollNo}", and I see that String Interpolation in javascript is same in Dart`)


// console.log("Hello \"World\"");

/* IMPORTANT BAAAT YAAD RAKHNA
String literals (denoted by double or single quotes) and strings returned from String calls in a non-constructor context (that is, called without using the new keyword) are primitive strings. In contexts where a method is to be invoked on a primitive string or a property lookup occurs, JavaScript will automatically wrap the string primitive and call the method or perform the property lookup on the wrapper object instead.
*/


/*
//* Internally (conceptually)
let tempStr = new String("HELLO");
tempStr.toUpperCase();
tempStr = null; // wrapper destroy
*/
// This process is known as AUTO-BOXING
let newStr = "Hello".toUpperCase(); // temporary





let strObj = new String("World") // actual object


// console.log(`${typeof newStr} and ${typeof strObj}`)

// console.log(newStr === strObj)


// console.log("Hello".toUpperCase());


// Real object works, no need of wrapper object

let s = new String("HELLO");
s.x = 10;
console.log(s.x); // 10 ✅







