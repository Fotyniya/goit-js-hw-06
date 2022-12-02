const categoryList = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryList.length}`);

categoryList.forEach (item => {
    const titleEl = item.querySelector('h2');
    console.log(`Category: ${titleEl.textContent}`);

    const itemEl = item.querySelectorAll('li');
    console.log (`Elements: ${itemEl.length}`);
    }
)