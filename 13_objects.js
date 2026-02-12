const mySymbol = Symbol("Key1")


const jsUser = {
  name: "Muhammad Zohaib",
  email: "zohaibsaraj10@gmail.com",
  gender: "male",
  location: "DaudKhel",
  isLoggedIn: false,
  lastLoginDays: ["Monady", "Thursday"],
  [mySymbol] : mySymbol
}

// use to print a symbol through an object
console.log(jsUser[mySymbol])

jsUser.greeting = function() {
  console.log("Hello, World");
}

jsUser["greeting"]();
