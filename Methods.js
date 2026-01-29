// string methods
// length()
// trim()
// toUpperCase()
// toLowerCase()
// includes()
// indexOf()
// slice()
// substring()
// replace()
// concat()
// split()

let str = " Hello JavaScript World ! "
console.log(str)
console.log("length() : ",str.length)

let trimText = str.trim();
console.log("trim() : ",trimText)

console.log("toUpperCase() : ",str.toUpperCase())
console.log("toLowerCase() : ",str.toLowerCase())

console.log("includes() : ",str.includes("JavaScript"))

console.log("indexOf() : ",str.indexOf("JavaScript"))

console.log("slice() : ",str.slice(2,7))

console.log("substring() : ",str.substring(2,7))

console.log("replace() : ",str.replace("JavaScript","react"))

let extraRext = " - HELLO JS";
console.log("concat() : ",str.concat(extraRext))

console.log("Split() : ",str.split(" "));