function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

const body = document.querySelector('body');
const nameColor = document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color');

btnChangeColor.addEventListener('click', onBtnChangeColorClick);
function onBtnChangeColorClick () {

const color = getRandomHexColor();
body.style.backgroundColor = color;
nameColor.textContent = color;
}
