const timerBtn = document.getElementById('timer-button');
const resetBtn = document.getElementById('reset-button')
const clickCount = document.getElementById('click-count');
const clickMe = document.getElementById("click-me");
let isTimed = false;
let timeLeft = 15;

localStorage.setItem("clicks", "0");
  let count = localStorage.getItem("clicks");

clickCount.textContent = count;

clickMe.addEventListener("click", () => {
  let clicks = parseInt(count);
  localStorage.setItem("clicks", ++clicks);
  clickCount.textContent = count;
  console.log("clicked");
});
//while(isTimed === true) {};

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