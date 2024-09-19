// there are 2 types of datatypers
// 1-primitive, 2-non-primitive

// Primitive - 7-types
// String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const IsLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 1235774367n


// Reference (Non- primitive)

// Array, Objects, Functions 

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "ravi",
    age: 22
}

const myfunction = function() {
    // console.log("hello world");
}

// console.log((typeof outsideTemp));

// https://262.ecma-international.org/5.1/#sec-11.4.3


// ==============================================

// Stack(Primitive), Heap(Non-Primitive)

let myYoutubeNmae = "Reviverma.com"
let anotherName = myYoutubeNmae
anotherName = "code with ravi"

console.log(myYoutubeNmae);
console.log(anotherName);

let userone = {
    email: "user@133.com",
    upi: "user@ybl"
}
let usertwo = userone

usertwo.email = "ravi@123.com"
console.log(userone.email);
console.log(usertwo.email);

