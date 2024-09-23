//  singleton

// object literals

const jsUser = {
    name: "hitesh",
    "full Name": "Hitesh choudhary",
    age: 18,
    location: "jaipur",
    email: "abc@123gmail.com",
    osLoggefIn: false,
    lastLoginDays: ["Monday", "Saturady"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full Name"]);

// jsUser.email = "hitesh@chatgpt.com"
// Object.freeze(jsUser)
// jsUser.email = "hitesh@microsoft.com"
// console.log(jsUser.email);

jsUser.greeting = function(){
    console.log("hello JS user");
}
jsUser.greeting2 = function(){
    console.log(`hello JS user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());
