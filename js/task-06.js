const textInput = document.querySelector('#validation-input');

textInput.addEventListener("input", onInputChange)
textInput.addEventListener("blur", onInputBlur)

function onInputChange (event){
    
    textInput.classList.remove("invalid", "valid") 
}    
function onInputBlur (event){ 
    const inputLength = event.currentTarget.value.split('').join('').length;
    if (Number(inputLength) !== Number(textInput.dataset.length)){
        textInput.classList.add("invalid") 
    } else {
        textInput.classList.add("valid") 
    };
}