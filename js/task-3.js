const userName = document.getElementById("name-output");

const inputName = document.getElementById("name-input");

function inputHandler(event) {
    const inputUserName = event.target.value;
    
    userName.textContent = inputUserName.trim() !== "" ? inputUserName.trim() : "Anonymous";
}

inputName.addEventListener("input", inputHandler);


inputName.style.width = "360px";
inputName.style.height = "40px";

