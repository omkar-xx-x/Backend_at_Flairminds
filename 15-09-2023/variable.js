// Variable created using var can be redeclared or reassigned...
// var also supports variable declaration hoisting 
console.log(firstName);
var firstName = "Variable created using var"
var firstName = "Variable created using var"
// This will not cause error
console.log(firstName);

// Variable created using let cannot be redeclared but can be reassigned
//  Hoisted to the top of its block, but in a "temporal dead zone"
console.log(clientName);
let clientName = "Variable created using let"
// This will cause error since we are re-assigning the variable 
// let clientName = "Variable created using let"
clientName = "Variable created using let";
console.log(clientName);

// Variable created using const can neither be declared or nor be re-initialized
// Hoisted to the top of its block, but in a "temporal dead zone"

const userName = "Omkar"
// This will cause error since we are using re-declaring the values 
// const userName = "Omkar"

console.log(userName);
