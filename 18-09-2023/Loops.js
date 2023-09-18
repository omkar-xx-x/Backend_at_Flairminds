// When we have to iterate through keys of objects or indexes of an array , we can make use of for-in loop in JS 
var obj = {
    firstName : "Omkar",
    lastName : "Hirave",
    College : "FC", 
    city : "Pune"
}
for(let k in obj){
    console.log("key-->" , k);
}
var arr = [10,20,30,40,50,60,70,80,90,1000];
for(let key in arr){
    console.log("key-->" , key);
}

// When we have to iterate through values of an array we can make use of the for-of loop 
var arr = [10,20,30,40,50,60,70,80,90,1000];
for(let value of arr){
    console.log("key-->" , value);
}
// Use of for-each loop in an array 
// Method 1 
var arr = [10,20,30,40,50,60,70,80,90,1000];
arr.forEach((value , key)=>{
    console.log("key is -->"+key);
    console.log("value is -->"+value);
})

// Method 2 
console.log("Using method 2 -->");
var arr = [10,20,30,40,50,60,70,80,90,1000];
arr.forEach(loop)
function loop(value , key){
    console.log("key is -->"+key);
    console.log("value is -->"+value);
}
