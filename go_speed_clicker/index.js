const timerBtn = document.getElementById('timer-button');
const resetBtn = document.getElementById('reset-button')
const clickCount = document.getElementById('click-count');
const clickBtn = document.getElementById("click-button");
let isTimed = false;
let timeLeft = 15;

while(isTimed === true) {
  clickBtn.addEventListener("click", clickIncrement);
  console.log("clicked")
};

function clickIncrement() {
  console.log ("Incrementing")
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
  localStorage.setItem("clickCounter", "0")
  clickCount.innerHTML = "0"
}