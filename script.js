const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toogle = document.querySelector('.toogle')
const numbersEl = document.querySelector('.numbers')

const days = ['E diele', 'E hane', 'E marte', 'E merkure', 'E enjte', 'E premte', 'E shtune'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

toogle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark Mode'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light Mode'
    }
})

function addClockNumbers() {
    const radius = 130; 
    for (let i = 1; i <= 12; i++) {
        const numberEl = document.createElement('div');
        numberEl.classList.add('number');
        const angle = (i * 30) * (Math.PI / 180);
        const x = radius * Math.sin(angle);
        const y = radius * -Math.cos(angle);
        
        numberEl.style.position = 'absolute';
        numberEl.style.left = `calc(50% + ${x}px)`;
        numberEl.style.top = `calc(50% + ${y}px)`;
        numberEl.style.transform = 'translate(-50%, -50%)';
        numberEl.innerHTML = i;
        numbersEl.appendChild(numberEl);
    }
}


function setTime() {
    const time = new Date();
    const year = time.getFullYear();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hours = time.getHours();
    const ampm = hours >= 12 ? 'pm' : 'am';
    const hoursForClock = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 330)}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 354)}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 354)}deg)`;
    
    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
    dateEl.innerHTML = `${year}, ${days[day]}, ${months[month]} <span class='circle'>${date}</span>`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

addClockNumbers();
setTime();
setInterval(setTime, 1000);

