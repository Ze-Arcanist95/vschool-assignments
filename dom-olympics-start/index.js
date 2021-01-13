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
const userInput = document.getElementById("input");

h1.classList.add("header");
h1.textContent = "JavaScript Made This!!";

nameSpan.textContent = "[" + id.name + "] ";
nameSpan.classList.add("name", "span");

creditSpan.textContent = " wrote the JavaScript";
creditSpan.classList.add("span");

h3.classList.add("header");
h3.append(nameSpan);
h3.append(creditSpan);
h3.style.flexDirection = "row";

header.append(h1);
header.append(h3);