// Modify array elements at an index position
var a = [10 , 20 , 30 , 40 , 50 , 60];
a[0] = "Omkar"
console.log(a[0]);

// Delete array elements at an index position 
var a = [10,20,40,50,20,50,"Omkar Hirave"];
delete a[6];
console.log(a[6]);

// sort() method : sorts the array in the alphabetical order
var a  = [42, "apple", 7, "banana", 15, "cherry", 3, "date", 10, "fig"];
a.sort();
console.log(a);

// reverse the array from its current position 
var a = ["apple", "banana", "cherry", "date", "fig"];
// a.reverse();
console.log(a);

// pop() method : removes the value from the end of the array 
var a = ["apple", "banana", "cherry", "date", "fig"];
a.pop();
console.log(a);

// push() method : adds the value to the end of the array 
a.push("Omkar A Hirave");
console.log(a);

// shift() method : removes the value from the begining of the array
var a = ["apple", "banana", "cherry", "date", "fig"];
a.shift();
console.log(a);

// unshift() method : adds the value to the begining of  the array
// same as addFirst() in java 
var a = ["apple", "banana", "cherry", "date", "fig"];
a.unshift("Omkar Hirave ");
console.log(a);

// concat() method : used to add one or more elements into the array  together
// or can even be used to add one or more arrays
var a = ["apple", "banana", "cherry", "date", "fig"];
var b = ["Omkar", "Ashok ", "Hirave", "Vadgaon ", "Nimbalkar"];
var c = ["Fergusson" , "College"];
var d = a.concat(b,c);
// var b = [10,20,40,50,20,50,"Omkar Hirave"];
console.log(d);

// join() method : 
// This method takes the elements in an array and converts them into a string with the help of separator. 
var a = ["apple", "banana", "cherry", "date", "fig"];
var b = a.join("/");
console.log(b);

// slice() method : 
// It is used to get some part of the data , we have give startIndex and endIndex to get some part of the array 
// This function also accepts negative functions
var a = ["apple", "banana", "cherry", "date", "fig"];
var b = a.slice(2,4);
console.log(b);
// Above will give us values at location 2 & 3


// splice() method : 
// This function is used to put elements in the particular index of an array
// first argument takes the index at which you have to insert elements  
// Second argument is the no of elements you want to delete to add elements 
// Next arguments it takes values  that you want to add 
var a = ["apple", "banana", "cherry", "date", "fig"];
console.log(a);
a.splice(2 , 2 , "Omkar" , "Ashok ");
console.log(a);

// isArray() method :
// This method is used to check if a particular variable is array 
var a = ["apple", "banana", "cherry", "date", "fig"];
var c = "Omkar Hirave"
var b = Array.isArray(c);
console.log("This is array or not -->",b);

// indexOf() method : 
// This method is used to give the index of the specified element in an array returns -1 if not found.
// First parameter takes the element to be searched , second element tells from which index you have to start searching 
var a = ["apple", "banana", "cherry", "date", "fig" ,'cherry'];
var indexOfMethod = a.indexOf("cherry" , 3);
console.log("Element found at index -->",indexOfMethod);

// lastIndexOf() method :
// This method is same as indexOf() method with the difference that element will be searched from the end of the array 
// This also takes same parameters are indexOf() method and returns -1 if the element is not found .
var a = ["apple", "banana", "cherry", "date", "fig" ,'cherry' , 'banana'];
var lastIndexOfMethod = a.lastIndexOf("banana");
console.log("Element found at index -->" + lastIndexOfMethod);

// includes() method :  
// To check if an element exists in an array , we can make use of the includes method , it returns true or false 

var a = ["apple", "banana", "cherry", "date", "fig" ,'cherry'];
var includesMethod = a.includes("banana");
console.log(includesMethod);

// some() method : 
// Checks if any of the elements of the array pass the test/condition or not 
// Returns true or false 
var numbers = [10 , 13 , 18 , 20];
var someMethod = numbers.some(checkAdult);
function checkAdult(age){
    return age >  17
}
console.log("Some method response -->",someMethod);

// every() function : 
// Used to check if this each value in an array passes the test/condition , if not it returns false 
var numbers = [10 , 13 , 18 , 20];
var everyFunction = numbers.every(checkAdult);
console.log("Every method response-->"+everyFunction);

// find() method : 
// It is used to return the first value that passes the test/condition
// It takes the function as an argument 
function checkAdult(age){
    return age >  17
} 
var numbers = [10 , 13 , , 18 , 20];
var findMethod = numbers.find(checkAdult);
console.log("find method response --> ",findMethod);
// Above method will return first value greater than 17 since this is the condition we have specified...
// returns undefined when the value is not found in an array with the condition 

// findIndex() method : 
// This method is same as find() method with the difference that instead of returning the value it returns the index of the number that passes the test . 
var numbers = [10 , 13 , 18 , 20];
var findIndexMethod = numbers.findIndex(checkAdult);
console.log("Find index method response -->",findIndexMethod);

// filter() method : 
// This method checks through an array if an elements with specified condition exists 
// And returns all the elements that pass the test/condition 
function checkAdult(age){
    return age >  17
}
var numbers = [10 , 13  , 18 , 20];
var filterMethod = numbers.filter(checkAdult);
console.log("filter method response --> ",filterMethod);
// Above will  return new array with values 18 and 20 since this are the only two values passing the condition/test.

// toString() method : 
// this method is used to convert an array to a string 
var numbers = [10 , 13  , 18 , 20];
numbers.toString();
console.log(typeof numbers); 

// valueOf() function:
// When we have to all the values of array , we can use valueOf() function .
// No special need of this condition 

// fill() function : 
// This function is used to fill all the values in an array with specified value .
var numbers = [10 , 13  , 18 , 20];
numbers.fill("Ram ");
console.log(numbers);
// Above will replace all the values in an array with Ram method 
 
