let Student = {
    name : " first name ",
    email : "USER@GMAIL.COM",
    course : "JavaScript, React, Node",
    marks : [45, 78, 60, 90, 33],
    hobbies : ["Music", "Cricket", "Reading"],
    address : ["India", ["Gujarat", "Ahmedabad"]]
};

// STRING OPERATIONS
// remove space
console.log("trim() : ",Student.name)

// convert upercase
console.log("toUpperCase() : ",Student.name.toUpperCase())

// email lowercase
console.log("toLowerCase() : ",Student.email.toLowerCase())

// check wether course includes
console.log("includes() : ",Student.course.includes("React"))

// find the index of "Node" in course
console.log("indexOf : ",Student.course.indexOf("Node"));

//replace "JavaScript" with "JS"
console.log("replace() : ",Student.course.replace("JavaScript","JS"))

// convert course string into an array

//display the length of student name
console.log("length() : ",Student.name.length)

// ARRAY OPERATION
//add "Swimming" to hobbies
