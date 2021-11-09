//Script.js

const hourEL = document.querySelector('.hour');
const minuteEL = document.querySelector('.minute');
const secondEL = document.querySelector('.second');
const timeEL = document.querySelector('.time');
const toggleEL = document.querySelector('.toggle');
const dateEL = document.querySelector('.date');

const months = ['Jan','Feb','Mar', 'Aprl', 'May','Jun', 'Jul','Aug', 'Sep', 'Oct', 'Nov' , 'Dec'];

const days = ['Sunday','Monday','Tuesday', 'Wensday', 'Thursday', 'Friday' , 'Saturday'];




toggleEL.addEventListener('click', function(e) {
    const html = document.querySelector('html');

    if(html.classList.contains('dark')) {
        e.target.textContent = 'Dark Mode';
        html.classList.toggle('dark');
    } else {
        e.target.innerHTML = 'Light Mode';
        html.classList.toggle('dark');
    }

});

function setTime () {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours % 12
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();



    hourEL.style.transform = `translate(-50%,-100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`;
    minuteEL.style.transform = `translate(-50%,-100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
    secondEL.style.transform = `translate(-50%,-100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;

    timeEL.textContent = `${hours}:${minutes < 10 ? `0${minutes}`: minutes}`;

    dateEL.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;


}

const scale = function (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
};


setInterval(setTime, 1000);



