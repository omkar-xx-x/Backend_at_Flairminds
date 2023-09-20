/*
Approach 1 :
function isPrime(num){
    if(num <  2) return false;
    for(let i = 2 ; i <= num/2 ; i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}
function printPrimeInRange(startIndex , endIndex){
    let primeNumArray = [];
    for(let i = startIndex ; i <= endIndex ; i++){
        if(isPrime(i)){
            primeNumArray.push(i);
        }
    }
    return primeNumArray;
}
let startIndex = 50 , endIndex = 100;
console.log(" The prime numbers in the range "+startIndex+" to "+endIndex+"  are"+printPrimeInRange(startIndex , endIndex));
*/
// Approach 2 using sieve of eratosthenes
function countPrimes(startIndex , endIndex) {
        let count = 0;
        let primes = new Array(endIndex + 1).fill(false);
        for (let i = 2; i <= Math.sqrt(endIndex); i++) {
            if (!primes[i]) {
                for (let j = i * i; j <= endIndex; j += i) {
                    primes[j] = true;
                }
            }
        }
        for (let i = startIndex; i <= endIndex; i++) {
            if (!primes[i]) {
                console.log(i);
            }
        }
        return count;
    }

countPrimes(50, 100);
