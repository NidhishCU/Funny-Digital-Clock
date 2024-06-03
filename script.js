function updateClock() {
    const clockContainer = document.getElementById('clock-container');
    const hourSpan = document.getElementById('hour');
    const minuteSpan = document.getElementById('minute');
    const secondSpan = document.getElementById('second');
    const ampmSpan = document.getElementById('ampm');
    
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    
    hourSpan.textContent = String(hours).padStart(2, '0');
    minuteSpan.textContent = String(minutes).padStart(2, '0');
    secondSpan.textContent = String(seconds).padStart(2, '0');
    ampmSpan.textContent = ampm;
    
    if (hours % 2 === 0) hourSpan.style.color = 'darkgreen';
    else hourSpan.style.color = '';

    if (minutes % 2 === 0) minuteSpan.style.color = 'blue';
    else minuteSpan.style.color = '';

    if (seconds % 2 === 0) secondSpan.style.color = 'red';
    else secondSpan.style.color = '';
    
    setTimeout(updateClock, 1000);
}

function randomDarkColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function updateAmPmColor() {
    const ampmSpan = document.getElementById('ampm');
    ampmSpan.style.color = randomDarkColor();
    setTimeout(updateAmPmColor, 5000);
}

function rotateClock() {
    const clockContainer = document.getElementById('clock-container');
    clockContainer.style.transform = 'rotate(360deg) scale(2.7)';
    setTimeout(() => {
        clockContainer.style.transform = 'rotate(0deg) scale(1)';
    }, 5000);
    setTimeout(rotateClock, 30000);
}

window.onload = () => {
    updateClock();
    updateAmPmColor();
    setTimeout(rotateClock, 30000);
};
