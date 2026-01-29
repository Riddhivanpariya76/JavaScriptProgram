// object is the collection of any type data
// const person = {
//     name : 'testing',
//     age : 20,
//     hobbies : ['cricket', 'listen music'],
//     greet : function(){
//         console.log("hello")
//     }
// } 

// // access values from object
// console.log(person.name)
// console.log(person['name'])

// // adding or modifying the data of object
// person.job = "react developer"
// person.salary = 50000
// console.log(person)

// delete person.salary
// console.log(person)

// nested object
const person1 = {
    name : 'john',
    age : 20,
    address :{
        city : "keshod",
        zipcode : '362220',
        street : "123 main st."
    }
}
console.log(person1)
console.log(person1?.address?.city)
console.log(Object.keys(person1))
console.log(Object.values(person1))
console.log(Object.entries(person1))