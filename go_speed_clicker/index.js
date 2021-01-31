const timerBtn = document.getElementById('timer-button');
const resetBtn = document.getElementById('reset-button')
const clickCount = document.getElementById('click-count');

let isTimed = false;
let timeLeft = 15;

while(isTimed = true) {
    body.addEventListener("click", () => {
        clickCount.textContent = parseInt(clickCount.textContent) + 1;
    })
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
    clickCount.textContent = 0;
}