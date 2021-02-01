localStorage.setItem("count", 0);

const timerBtn = document.getElementById('timer-button');
const resetBtn = document.getElementById('reset-button')
const clickCount = document.getElementById('click-count');
const clickMe = document.getElementById("click-me");
let isTimed = false;
let timeLeft = 15;
let countVar = localStorage.getItem("count")

clickCount.innerHTML = countVar;

// while(isTimed === true) {}

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
function clicker() {
  countVar++;
}
function reset() {
    timeLeft = 15;
    countVar = 0;
}