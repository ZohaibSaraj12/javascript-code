let string = new String("Hello, WORLD")

// "at" method
console.log(string.at(0))

// "charAt" method
console.log(string.charAt(string));

// "charCodeAt" method -> Works on UTF-16 Encoding (used to stored Unicode Numbers)

console.log(string.charCodeAt(0))


// "codePointAt" method -> Unicode Numbers value (numbers representation -> like in dictionary pairs)

console.log(string.codePointAt(1))


// "trim" method

console.log(" Hello ".trim())
console.log(" Hello ".trimStart())
console.log("     Hello ".trimEnd())



// "toLowerCase" method


console.log(string.toLowerCase())



// "toUpperCase" method

console.log(string.toUpperCase())


// "includes" method

console.log(string.includes(`,`))
if (!string.includes("@")) {
  console.log(`No way
    dude?`)
};


// "startsWith" check for the prefix
console.log(string.startsWith(`Hello`))


// "endsWith" check for suffix

console.log(string.endsWith("world".toUpperCase()))



// "slice" method

console.log("dafsdfadfasdfkfhjashd  asjdfhajsfhasjdfhk".slice(3))


// "split" -> method converts into array of strings

console.log("Muhammad, Zohaib, Saraj".split(`,`))



// "replace" -> used for replacing single thing

console.log("Hello, world".replace(`world`, 'Zohaib'))

// "replaceAll" -> used to replace a chain

console.log("My, Name, is, Zohaib".replaceAll(`,`, ''))


// "length" -> if you don't know, what length method used for leave the engineering -> not a method

console.log("Muhammad Zohaib".length)

if (string.length > 8) {
  console.log(`Do you know, you name characters length is greater than 8`)
} else {
  console.log('Wow, A terrific thing for me.')
}


// "indexOf" -> method used for analysing the index


console.log(string.indexOf('@') === -1)

