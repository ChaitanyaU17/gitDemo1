const mainHeading = document.querySelector('#main-heading');
mainHeading.style.textAlign = 'right';

const fruits = document.querySelector('.fruits');
fruits.style.backgroundColor = 'grey';
fruits.style.padding = '30px';
fruits.style.margin = '30px';
fruits.style.width = '50%';
fruits.style.borderRadius = '5px';
fruits.style.listStyleType = 'none';

const basketHeading = document.querySelector('#basket-heading');
basketHeading.style.color = 'brown';

const fruitItems = document.querySelectorAll('.fruit');

for (let i = 0; i < fruitItems.length; i++) {
    fruitItems[i].style.backgroundColor = 'lightgrey';
    fruitItems[i].style.padding = '10px';
    fruitItems[i].style.margin = '10px';
    fruitItems[i].style.borderRadius = '5px';

    // Corrected to set background and text color for specific items
    if (i === 1 || i === 3) { // Indexing starts from 0, so the second item corresponds to index 1, and the fourth item corresponds to index 3
        fruitItems[i].style.backgroundColor = 'brown';
        fruitItems[i].style.color = 'white';
    }
}