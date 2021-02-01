const timerBtn = document.getElementById('timer-button');
const resetBtn = document.getElementById('reset-button')
const clickCount = document.getElementById('click-count');
const clickMe = document.getElementById("click-me");
let isTimed = false;
let timeLeft = 15;

while(isTimed === true) {
  clickMe.addEventListener("click", clickIncrement);
};

function clickIncrement() {
  if (localStorage.getItem("clickCounter") === null) {
    localStorage.setItem("clickCounter", "0");
  }
  let count = parseInt(localStorage.getItem("clickCounter"));
  let newCount = count + 1;
  localStorage.setItem("clickCounter", newCount);
  clickCount.innerHTML = newCount; 
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
    countVar = 0;
}