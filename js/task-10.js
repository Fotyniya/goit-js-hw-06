function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("#controls input");
const buttonCreateEl = document.querySelector("button[data-create]");
const buttonDestroyEl = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

buttonCreateEl.addEventListener('click', ()=>createBoxes(inputEl.value));
buttonDestroyEl.addEventListener('click', ()=>destroyBoxes());

function createBoxes(amount){
  const usersElements = [];
  for (let i = 0; i < amount; i += 1){
    const usersEl = document.createElement("div");
    usersEl.style.width = `${Number(30 + i*10)}px`;
    usersEl.style.height = `${Number(30 + i*10)}px`;
    usersEl.style.backgroundColor = getRandomHexColor();
    usersElements.push(usersEl);
  }
    boxes.append(...usersElements);
}
function destroyBoxes(){
  boxes.innerHTML = '';
}