function soothsayer(work, language, city, car) {
    return "You will work " + work[Math.floor(Math.random() * work.length)] + " years on " + language[Math.floor(Math.random() * language.length)]
        + ".\nYou will live in " + city[Math.floor(Math.random() * city.length)] + " and drive " + car[Math.floor(Math.random() * car.length)];
}
console.log(soothsayer([3, 5, 2, 7, 9], ["Java", "Python", "C#", "JavaScript", "Ruby"],
    ["Silicon Valley", "London", "Las Vegas", "Paris", "Sofia"], ["BMW", "Audi", "Lada", "Skoda", "Opel"]));