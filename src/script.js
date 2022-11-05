const timeElem = document.querySelector('.time');
function updateTimer() {
    const date = new Date();
    timeElem.innerText = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
}

const dateElem = document.querySelector('.date');
const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
function updateDate() {
    const date = new Date();
    dateElem.innerText = `- ${date.getDate().toString().padStart(2, '0')} ${months[date.getMonth()]} ${date.getFullYear()} -`;
}

updateTimer(); updateDate();
setInterval(updateTimer, 15000);
setInterval(updateDate, 3600000);