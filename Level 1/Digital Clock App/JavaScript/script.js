const date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


document.getElementById("hour").innerHTML = hour;
document.getElementById("minute").innerHTML = minutes;
document.getElementById("second").innerHTML = seconds;
document.getElementById("year").innerHTML = year;
document.getElementById("month").innerHTML = months[month];
document.getElementById("day").innerHTML = day;
document.getElementById("weekday").innerHTML = weekday[day]


