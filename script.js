const newYears = '21 Jul 2021';

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');


function countdown() {
    const eidulAdhaDate = new Date(newYears);
    const currentDate = new Date();
   
    const totalSeconds = (eidulAdhaDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    console.log(days, hours, minutes, seconds);
    
    daysEl.innerHTML = formateTime(days);
    hoursEl.innerHTML = formateTime(hours);
    minutesEl.innerHTML = formateTime(minutes);
    secondsEl.innerHTML = formateTime(seconds);
}

function formateTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

// initial call
countdown();

setInterval(countdown, 1000);