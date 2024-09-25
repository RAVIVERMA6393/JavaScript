
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// sayMyName()

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumber(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumber(3, 4)

// console.log("result: ", result);

function loginUserMessage(username){
    // if(username === undefined)
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} justlogged in`
}

// console.log(loginUserMessage("Hitesh"))
// console.log(loginUserMessage());


function calculateCardPrice(...num1){
    return num1
}

// console.log(calculateCardPrice(200, 300, 400))

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 300, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));
