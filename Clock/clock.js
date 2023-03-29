var time = document.querySelector('.time');
var now, hours, minutes, seconds, date;

function updateClock() {
    now = new Date();
    hours = now.getHours();
    minutes = now.getMinutes();
    seconds = now.getSeconds();
    date = now.getDate();
    if (hours % 12 === 0) {
        hours = 12;
    } else {
        hours = hours % 12;
    }
    

    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
  
    var period;
    if (hours < 12) {
    period = 'AM';
    } else {
    period = 'PM';
    }
  time.innerHTML = hours + ':' + minutes + ':' + seconds + ' ' + period;
}
updateClock();
setInterval(updateClock,1000);
