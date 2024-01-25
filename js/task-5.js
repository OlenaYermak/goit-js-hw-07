function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
  const body = document.body;
  const spanColor = document.querySelector('.color');
  const buttonChangeColor = document.querySelector('.change-color');

  buttonChangeColor.addEventListener('click', () => {
    const colorRandom = getRandomHexColor();

    body.style.backgroundColor = colorRandom;
    spanColor.textContent = colorRandom;
  });

  /-------STYLE------/

const paragraph = document.querySelector(".widget p")
paragraph.style.fontFamily = "Montserrat";
paragraph.style.fontSize = "16px";
paragraph.style.color = "#2E2F42";
paragraph.style.fontWeight = "400";
paragraph.style.lineHeight = "1.5"
paragraph.style.letterSpacing = "0.04em";
paragraph.style.marginBottom = "16px";
buttonChangeColor.style.width = "148px";


 

  


