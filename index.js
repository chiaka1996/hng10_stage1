const utcDay = document.querySelector('#utcDay');
const utcSeconds = document.querySelector("#utcSeconds");

console.log(utcDay)
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


// get the specific day of the week
const d = new Date();
let day = weekday[d.getDay()];
utcDay.innerHTML = day;

//get time in miilisecond
let time = d.getTime()
utcSeconds.innerHTML = time;