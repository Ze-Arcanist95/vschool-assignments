const id = {
    name: "Zachary Arcane",
    age: 25,
    title: "FSJS Developer"
}

const headerContainer = document.getElementById("header");
const h1 = document.createElement("h1");
const nameSpan = document.createElement("span");
const creditSpan = document.createElement("span");
const h3 = document.createElement("h3");
const clrBtn = document.getElementById("clear-button");
const sndBtn = document.getElementById("send-button");
const funBtn = document.getElementById("fun-button")
const msgForm = document.getElementById("message-line");
const msg = document.getElementsByClassName("message");
const msgs = document.querySelector(".messages");
const themes = document.getElementById("theme-drop-down");
const lMessage = document.querySelectorAll(".left");
const rMessage = document.querySelectorAll(".right");
const text = document.querySelector("#input");

h1.classList.add("header");
h1.textContent = "JavaScript Made This!!";

nameSpan.textContent = "[" + id.name + "] ";
nameSpan.classList.add("name", "span");

creditSpan.textContent = " wrote the JavaScript";
creditSpan.classList.add("span");

h3.classList.add("header");
h3.style.flexDirection = "row";
h3.append(nameSpan);
h3.append(creditSpan);

header.append(h1);
header.append(h3);

funBtn.addEventListener('click', () => {
    msg[3].textContent = "Good";
    msg[2].textContent = "and";
    msg[1].textContent = "Fun";
    msg[0].textContent = "Something";
});

clrBtn.addEventListener('click', () => {
    msgs.innerHTML = "";
});

themes.addEventListener('click', () => {
    if (themes.value == "theme-one") {
        for (i = 0; i < lMessage.length; i++) {
            lMessage[i].style.backgroundColor = "burlywood";
            lMessage[i].style.color = "black";
        }
        for (i = 0; i < rMessage.length; i++) {
            rMessage[i].style.backgroundColor = "lightblue";
            rMessage[i].style.color = "black";
        }
    } else if (themes.value == "theme-two") {
        for (i = 0; i < lMessage.length; i++) {
            lMessage[i].style.backgroundColor = "black";
            lMessage[i].style.color = "white";
        }
        for (i = 0; i < rMessage.length; i++) {
            rMessage[i].style.backgroundColor = "red";
            rMessage[i].style.color = "white";
        }
    }
});

msgForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let bubble = document.createElement("div");

    bubble.textContent = text.value;
    bubble.classList.add("message");
    if(msgs.lastElementChild == null) {
        bubble.classList.add("right");
    } else if (msgs.lastElementChild.getAttribute("class") == "message right") {
        bubble.classList.add("left");
    } else {
        bubble.classList.add("right");
    }

    msgs.appendChild(bubble);
    text.value = "";
});