let year = document.getElementById("year");
let month = document.getElementById("month");
let day = document.getElementById("day");
let weekday = document.getElementById("weekday");
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


setInterval(()=>{
    const currentDateAndTime = new Date();
    year.innerHTML = currentDateAndTime.getFullYear();
    month.innerHTML = months[currentDateAndTime.getMonth()];
    day.innerHTML = currentDateAndTime.getDate();
    weekday.innerHTML = weekdays[currentDateAndTime.getDay()];
    hour.innerHTML = (currentDateAndTime.getHours()<10?"0":"")+currentDateAndTime.getHours();
    minute.innerHTML = (currentDateAndTime.getMinutes()<10?"0":"")+currentDateAndTime.getMinutes();
    second.innerHTML = (currentDateAndTime.getSeconds()<10?"0":"")+currentDateAndTime.getSeconds();
}, 1000);


