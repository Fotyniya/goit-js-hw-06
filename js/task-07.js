const inputRange = document.querySelector("#font-size-control");
const textOut = document.querySelector("#text");

inputRange.addEventListener('input', onInputChange);

function onInputChange(){
textOut.style.fontSize = `${Number(inputRange.value)}px`;
}