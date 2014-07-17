var d = new Date();
var hours = d.getHours();
var minutes = d.getMinutes();
if(minutes<10){minutes = "0" + minutes;}
console.log(hours + ":" + minutes);