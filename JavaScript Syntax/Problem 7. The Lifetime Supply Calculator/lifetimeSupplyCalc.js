function calcSupply(ageNow, maxAge, foodAmount) {
    return (((((maxAge - ageNow) * 365.25) * foodAmount).toFixed(0)) + " kg of beef would be enough until I am " + maxAge + " years old");
}

console.log(calcSupply(12, 82, 0.5));
console.log(calcSupply(27, 68, 1.4));
console.log(calcSupply(66, 115, 3.2));