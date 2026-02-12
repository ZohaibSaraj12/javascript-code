const names = ["Zohaib", "Saraj"];
const moreNames = ["Zabi", "Notty"];

// names.push(moreNames); // not merges but add that array as an index, --"Array inside An Array"--

// console.log(names)

// console.log(names[2][1]);

// concat method limitations is you can't add more arrays to concat
const allNames = names.concat(moreNames);
// console.log(allNames);

// spread operator same as the dart ---> (...) spread operator

const newArr = [...names, ...moreNames, "Hello", "This", 123];
// console.log(newArr)


const anotherArr = [1, 2, 3, 4, [5, 6, [7, 8, [7, 9, [5, 6, [4 , 5, [5, 7, [4, 6]]]]]]]]

// const newAnArr = anotherArr.flat(4); // you don't know the depth use infinity
const newAnArr = anotherArr.flat(Infinity);
// console.log(newAnArr);




// console.log(Array.isArray(["Zohaib"])); // check is this an array

// console.log(Array.from("Zohaib")); // converts an argument to the string like ["Z", "o", "h" ... so on]

// console.log(Array.from({name: "Zohaib"})); // returns empty array kion k wo kehta h main array nhn bana skta --> interesting


// console.log(Array.of(100, 200, 300));


//* Practice of arrays

const anArrayOne = [1, 2, 3, 4, 5];

const newAnArrayTwo = [1, 2, 3, 4, 5];



// anArray.push(newAnArray);

// console.log(anArray)


// const anotherAnArr = anArrayOne.concat(newAnArrayTwo)
// console.log(anotherAnArr);


 const anotherAnArr = [...anArrayOne, ...newAnArrayTwo, [1, 2, [3, 4, [5, 6, [7, 8,[9, 10, [11, 12,[13, 14]]]]]]]]
// console.log(anotherAnArr);


// convert a string to array
// const a = Array.from({name : "Zohaib"});
// const a = Array.from([1, 2, 3, 4, 5])
// console.log(a);



// console.log(Array.isArray(["Zohaib"]))




console.log(anotherAnArr.flat(Infinity))





// Array notes

// Methods Studied

// 1. unShift() -> used for adding an element at the 0th index
// 2. shift() -> opposite of unShift()
// 3. indexOf() -> returns index of an element, if an element is present and returns -1 otherwise
// 4. includes(//argument) -> check that element is present or not returns true or false in answer
// 5. join() -> converts an array into string
// 6. slice(starting_index, n) -> used for slicing an array slice from starting_index to the n - 1
// 7. splice() -> splices but also changes the modifies the main array, i.e includes elements except the elements in splice parenthesis
// 8. push() -> add argument as a data in another list like [1, 2, 3, [1, 2, 3]] if you push two arrays
// 9. concat() -> used to concat two arrays, not scalable for 3 or more arrays than 3
// 10. spread operators (...) -> used to concat strings, no matter how much
// 11. Array.of() -> used to convert into array
// 12. Array.from() -> converts into an array
// 13. Array.isArray() -> checks whether a given argument is an array or not
// 14. flat() -> use flat method to solve the problem of nested arrays in a single list,
// 15. Array.from({name : "zohaib"}) -> will never convert this to an array, would return an array which will be empty
