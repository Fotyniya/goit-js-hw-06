const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const items = [];
ingredients.forEach(ingredient => {
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  liEl.classList.add ('item');
  items.push(liEl)
  console.log(items)
  
})

const ulEl = document.querySelector('ul#ingredients')
ulEl.append(...items)
