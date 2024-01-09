const d = new Date();
let hour = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();

document.getElementById("hour").innerHTML = hour;
document.getElementById("minute").innerHTML = minutes;
document.getElementById("second").innerHTML = seconds;
