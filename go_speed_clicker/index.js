localStorage.setItem("count", 0)

const timerBtn = document.getElementById('timer-button');
const resetBtn = document.getElementById('reset-button')
const clickCount = document.getElementById('click-count');
let isTimed = false;
let timeLeft = 15;
let countVar = 0

clickCount.textContent = localStorage.getItem("count");

while(isTimed = true) {
    document.body.addEventListener("mouseup", () => {
        countVar + 1;
        localStorage.setItem("count", countVar);
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