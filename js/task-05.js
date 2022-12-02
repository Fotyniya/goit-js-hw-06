const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

const hello = textOutput.textContent;

textInput.addEventListener("input", () => {
    const val = textInput.value.trim();
    textOutput.textContent = val ? val : hello;
} 
);