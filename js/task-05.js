const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");
console.log(textInput);
console.log(textOutput);
const hello = textOutput.textContent;
console.log(hello);
textInput.addEventListener("input", (event) => {
    textInput.value ? 
    textOutput.textContent = event.currentTarget.value :
    textOutput.textContent = "Anonymous"; 
} 
);