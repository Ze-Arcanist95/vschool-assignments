const timerBtn = document.getElementById('timer-button');
const resetBtn = document.getElementById('reset-button')
const clickCount = document.getElementById('click-count');
let isTimed = false;
let timeLeft = 15;
let countVar = 0;

localStorage.setItem("count", countVar);
clickCount.textContent = localStorage.getItem("count");

while(isTimed === true) {
    window.addEventListener("click", () => {
        countVar + 1;
      });
}

function startTimer() {
    if(timeLeft === 0){
      timerBtn.textContent = "Start";
      isTimed = false;
    } else {
      timerBtn.textContent = timeLeft + " seconds remaining";
      timeLeft--;
      isTimed = true;
      setTimeout(startTimer, 1000);
    }
}
function reset() {
    timeLeft = 15;
    counter = 0;
}