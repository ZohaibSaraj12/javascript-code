const myArray = [1, 2, 3, 4, 5];

myArray.push(6);

// myArray.unshift(7); // Adds element at first place
// myArray.unshift(7);
// myArray.unshift(7);
// myArray.unshift(7);
// myArray.shift(); // remove element present at first place
// myArray.shift();
// myArray.shift();
// myArray.shift();
// myArray.shift();

//& console.log(myArray);




// indexOf method

const myNewArray = [1, 2, 3, 4, 5];

// console.log(myNewArray.indexOf(5)); // returns "index" if present, if not returns "-1"

// includes method

// console.log(myNewArray.includes(5)); // returns "boolean"



// const newArray = myNewArray.join(); // converts an array to a "String"

// console.log(myNewArray)
// console.log(newArray); // compare both outputs above and this, clearly covert into "String"



console.log("BEFORE SLICE ", myNewArray)
const myAnotherArray = myNewArray.slice(1, 3); // 1 se 3 index tak element but 3 index wala exclude
console.log("BEFORE SPLICE", myNewArray)
const anotherNewArray = myNewArray.splice(1, 3); // excludes element from 1 to 3 index
console.log("AFTER SLICE ", myAnotherArray);
console.log("AFTER SPLICE", anotherNewArray)
console.log("SPLICE MODIFIES THE ARRAY ", myNewArray)






