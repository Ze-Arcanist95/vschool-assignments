const goombaCount = document.getElementById("goombaCount");
const bombCount = document.getElementById("bombCount");
const cheepCount = document.getElementById("cheepCount");
const bill = document.getElementById("bill");
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let goombas = document.pestTracker.goombaInput.value;
    let bombombs = document.pestTracker.bombInput.value;
    let cheeps = document.pestTracker.bombInput.value;

    goombaCount.textContent = (parseInt(goombaCount.textContent) + goombas);
})