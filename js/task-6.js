function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const buttonCreate = document.getElementsByTagName("button")[0];
const buttonDestroy = document.getElementsByTagName("button")[1];
const divBoxes = document.querySelector("#boxes");

buttonCreate.addEventListener("click", createBox);
buttonDestroy.addEventListener("click", destroyBox);


function createBox() {
  const inputNumber = parseInt(input.value);
  
   if (inputNumber >= 1 && inputNumber <= 100) {
    divBoxes.innerHTML = "";

 let size = 30;

    for (let i = 0; i < inputNumber; i++) {
      const box = document.createElement("div");
      box.style.width = size + "px";
      box.style.height = size + "px";
      box.style.backgroundColor = getRandomHexColor();
      divBoxes.appendChild(box);
      size += 10;
    }
input.value = "";
} 
 }

function destroyBox() {
  divBoxes.innerHTML = "";
}

//-----------STYLE----------//
input.style.width = "150px";
input.style.height = "40px";
input.style.borderRadius = "8px"
input.style.border = "1px solid #808080";
input.style.paddingLeft = "72px";
input.style.color = "#2E2F42";
input.style.fontFamily = "Montserrat";
input.style.fontSize = "16px";
input.style.lineHeight = "1.5";
input.style.letterSpacing = "0.04em"
buttonCreate.classList.add("change-color");
buttonDestroy.classList.add("destroy");
buttonCreate.style.width = "120px";
buttonDestroy.style.width = "120px";

const divContainer = document.querySelector("#controls");
divContainer.classList.add("container");