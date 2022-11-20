const categoryList = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryList.length}`);

const itemList = document.querySelectorAll('li.item');
itemList.forEach (item => {
    const titleEl = item.querySelector('h2');
    console.log(`Category: ${titleEl.textContent}`);

    const itemEl = item.querySelectorAll('li');
    console.log (`Elements: ${itemEl.length}`);
    }
)