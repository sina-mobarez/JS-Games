const date = document.querySelector('input[name=date]');
const show = document.querySelector('.countdown');
date.addEventListener('change', function(){
    var time = countDown(date.value);
    var days = time.days;
    var hours = time.hours;
    var minutes = time.minutes;
    var seconds = time.seconds;

    show.innerHTML = `
        <div class="days">${days}<span>Days</span></div>
        <div class="hours">${hours}<span>Hours</span></div>
        <div class="minutes">${minutes}<span>Minutes</span></div>
        <div class="seconds">${seconds}<span>Seconds</span></div>
    `;

    setTimeout(function(){
        countDown(date.value);
    }, 1000);
})

function countDown(deadline){
    var time = Date.parse(deadline) - Date.parse(new Date());
    console.log(time);
    var seconds = Math.floor((time/1000) % 60);
    var minutes = Math.floor((time/1000/60) % 60);
    var hours = Math.floor((time/(1000*60*60)) % 24);
    var days = Math.floor(time/(1000*60*60*24));
    return {
        'total': time,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}