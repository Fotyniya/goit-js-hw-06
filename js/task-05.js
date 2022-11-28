const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

const hello = textOutput.textContent;

textInput.addEventListener("input", (event) => {
    textInput.value ? 
    textOutput.textContent = event.currentTarget.value :
    textOutput.textContent = hello; 
} 
);