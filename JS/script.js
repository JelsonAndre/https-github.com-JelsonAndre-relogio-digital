const hr = document.getElementById("hours")
const min = document.getElementById("minutes")
const sec = document.getElementById("seconds")

const tempo= setInterval(

function() {

let data = new Date();
let hours = data.getHours();
let minutes = data.getMinutes();
let seconds = data.getSeconds();

if(hours<10) hours = "0" + hours
if(minutes<10) minutes = "0" + minutes
if(seconds<10) seconds = "0" + seconds

hr.innerHTML = hours;
min.innerHTML = minutes;
sec.innerHTML = seconds;

})