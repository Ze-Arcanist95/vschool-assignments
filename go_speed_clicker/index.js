const timerBtn = document.getElementById('timer-button');
const resetBtn = document.getElementById('reset-button')
const clickCount = document.getElementById('click-count');
let isTimed = false;
let timeLeft = 15;
let counter = 0;

clickCount.textContent = counter;

while(isTimed = true) {
    $('body').click(function(){
        counter + 1;
      });
}

function startTimer() {
    isTimed = true;
    if(timeLeft === 0){
      timerBtn.innerHTML = "Start";
      isTimed = false;
    } else {
      timerBtn.innerHTML = timeLeft + " seconds remaining";
      timeLeft--;
      setTimeout(startTimer, 1000);
    }
}
function reset() {
    timeLeft = 15;
    counter = 0;
}