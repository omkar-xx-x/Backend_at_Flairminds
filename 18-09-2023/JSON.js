var  a = {"Name" : "Omkar" , "age" : 18 , "College" : null};
console.log(a);

var a = {
    "Employee" : {"Name":"John" , "age" : 30 , "city" : "New York"}
} 
console.log("First it was -->",typeof a);
var myData = JSON.stringify(a);
console.log("Second it was -->",typeof myData);

// When receiving data from the web server converting it into JS object since data we receive is in the form of string.
var myData = JSON.parse(myData );
console.log("Third it was -->",typeof myData);

const text = '["Ford", "BMW", "Audi", "Fiat"]';
console.log(typeof text);
const myArr = JSON.parse(text);
console.log(myArr);
console.log(typeof myArr);


// Converting the function to a String before sending it to the browser since it accepts only in the form of string 
const obj = {name: "John", age: 30, city: "New York"};
var stringifyFunction = JSON.stringify(obj);
console.log(stringifyFunction);
console.log(typeof stringifyFunction);

// Stringify the array to convert to string 
const stringifyMethod = ["John", "Peter", "Sally", "Jane"];
const stringifyArray = JSON.stringify(stringifyMethod);
console.log(stringifyArray);
console.log(typeof stringifyArray);


// Accessing object values 
var myJSON = '{"name":"John", "age":30, "car":null}';
// Convert it into JS objects
var myObj = JSON.parse(myJSON);
// Access the object value using the dot operator 
x = myObj.car;
console.log(x);
// Other way of doing this is 
var myJSON = '{"name":"John", "age":30, "car":null}';
var myObj = JSON.parse(myJSON);
x = myObj["name"]; 
console.log(x);

// Looping an object 
var myJSON = '{"name":"John", "age":30, "car":null}';
var myObj = JSON.parse(myJSON);

var textValue = "";
// For in loop is used to iterate through keys in an object
for (const x in myObj) {
  textValue += x + ", ";
}
console.log(textValue);

// We can also use arrays in objects
var arrayInObject = {
    "name":"John",
    "age":30,
    "cars":["Ford", "BMW", "Fiat"]
    }
console.log(arrayInObject);