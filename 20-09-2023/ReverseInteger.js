function reverseNumber(num){
    let result = 0 ;
    while(num != 0 ){
        let remainder = num % 10 ;
        result = (result * 10) + remainder;
        num = Math.floor(num / 10);
    }
    return result;
}
let num = 1234;
console.log("The actual number is -->",num);
console.log("The number after reversing is -->"+reverseNumber(num));