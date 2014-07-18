function checkDigit(num) {
    if (num < 1000) console.log("The number is lower than 1000.")
    else {
        console.log(Math.floor(num / 100) % 10 == 3);
    }
}

checkDigit(1234);
checkDigit(123);
checkDigit(65365);
checkDigit(1241234);
checkDigit(123124);
