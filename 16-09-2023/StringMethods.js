// Knowing the length()/size() of the string 
let a = "My Name is Omkar Hirave . My favourite language is Java . I Am Working As Backend Developer At Flairminds."
let b = "Omkar"
console.log("The size of the above string is " , b.length);

// Converting the string to lowercase letters
let lowerCaseLetters = a.toLowerCase();
console.log(lowerCaseLetters);

// Converting the string to uppercase letters
let upperCaseLetters = a.toUpperCase();
console.log(upperCaseLetters);

// Checking if some string sequence contains specified word
// Same as contains method in Java 
// It is case-sensitive function 
let stringSequence = a.includes("Ashok");
if(stringSequence) 
    console.log("Yes this string contains the specified words...");
else
    console.log("This string does not contains the specified word....");

// To check if a string starts with a specified word or not 
let startsWith = a.startsWith("MY Name");
if(startsWith)
    console.log("This string starts with the word you specified ....");
else
    console.log("This string does not start with the word you specified....");

let endsWith = a.endsWith("Flairminds..");
if(endsWith)
    console.log("This string ends with the word you specified...");
else 
    console.log("This string does not end with the word you specified...");


// Search() method --> Same as includes function but rather than returning the boolean value , it returns the index on which the value appears , -1 if value does not exist 
 
let searchMethod = a.search("Flairminds");
console.log("The specified word occurs at index--> "+searchMethod);

// match() method --> Same as search method but when finds the specified words it gives an array of those words that occured that occured particular number of times in a string 
let matchMethod = a.match(/A/g);
console.log(matchMethod);

// indexOf () method : This method is same as search method but it cannot take regex as an argument , 
let indexOfMethod = a.indexOf('is')
console.log("The first index where specified word occurs is--> "+indexOfMethod);

// lastIndexOf() method : This method is same as index of method but rather than returing the first occurence of a word in a string it returns the last occurence of a string 

let lastIndexOf = a.lastIndexOf('is');
console.log("The last index where specified word occurs is--> "+lastIndexOf);

// replace() function : It used to replace one word with another word in a string 
console.log(a);
let replaceFunction = a.replace("Backend" , "Frontend");
console.log(replaceFunction);

// trim() function : This function is used to remove whitespaces that the string might have 
let trim ='      My Name is Omkar Hirave . My favourite language is Java . I Am Working As Backend Developer At Flairminds.                              '
console.log(trim.trim());

// charAt() function : This function is used to find the character present a particular index 
// same as the one in Java 

let charAtMethod = a.charAt(32);
console.log(charAtMethod);


// charCodeAt() function : This function will give the code ASCII code of a particular value ; 
// For example : If give a as input it will return 97
let ASCII_value = 'AaBbCcDdEe';
let charCodeAt = ASCII_value.charCodeAt(1);
console.log(charCodeAt);

// fromCharCode() function : We can say that this method is complement of charCodeAt() method 
// This will take the ASCII code and give the value associated with it.
let fromCharCode = String.fromCharCode(97);
console.log(fromCharCode);


// concat() method : This method can be used to concat 2 or more strings into another string 
let str1 = "This is a first String "
let str2 = "This is a second String "
let str3 = "This is the third string "
let result = str1.concat(str2 , str3);
console.log(result);

// Split() method : This method split the string on the basis of character or word and returns an array 
let split = a.split('va');
console.log(split);

// repeat() method : This method will repeat the string for the specified no of times 
let firstName = "Omkar Hirave "
let repeat = firstName.repeat(5);
console.log(repeat);
// Above code will repeat the specified string 5 times

// slice() method : This method will give slices of the string based on the indexes specified..
// Negative indexing also works on the array , Giving negative indexing will start the loop from the end of the array 

let slice = a.slice(2 , 22);
console.log("Slice-->",slice);
// Above code will give me characters in the range of 2 and 22(inclusive )

// This method is same as slice method but it doesn't take negative values as arguments and when the startValue is greater than smaller then endValue and gives you the result.
let substringFunction = a.substring(2 , 22);
console.log("Substring -->",substringFunction);


// substr() function 
// The first argument of this function takes the start index and second argument takees no of characters you want to extract from it   
let substrFunction = a.substr(2 , 20);
console.log(substrFunction);

// toString() function 
// This function converts any other datatypes to string 
var intValue = 1313;
var stringValue = intValue.toString();
console.log(stringValue + 20);







