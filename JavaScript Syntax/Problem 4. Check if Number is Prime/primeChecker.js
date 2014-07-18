
function isPrime(num) {
    var count = 0;
    for (var i=3;i*i<=num;i+=2) {
        if (num % i == 0) count++;
        else continue;
    }
    if (count == 0) console.log(true);
    else console.log(false);
}
isPrime(552);
isPrime(97);
isPrime(443);
isPrime(113);