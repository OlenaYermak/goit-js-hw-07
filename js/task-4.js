const form = document.querySelector(".login-form");


function formHandler(event) {
    event.preventDefault();

    const emailInput = form.elements.email.value;
    const passwordInput = form.elements.password.value;

 if (!emailInput || !passwordInput) {
    alert("All form fields must be filled in");
    return;
  }

     const userData = {
        email: emailInput.trim(),
        password: passwordInput.trim(),
     };
    console.log(userData);
    form.reset();
}

form.addEventListener("submit", formHandler);



/-------STYLE--------/
const labels = document.querySelectorAll("label");

labels.forEach((label) => {
  label.classList.add("label_style");
});

const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
  input.classList.add("input_style");
});

const button = document.querySelector("button");
button.classList.add("change-color");
button.style.width = "86px";
button.style.marginTop = "16px";
