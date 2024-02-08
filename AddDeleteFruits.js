// Add the Edit Button:
const liElements = document.querySelectorAll('.fruit');
liElements.forEach(li => {
    const editButton = document.createElement('button');
    editButton.className = 'edit-btn';
    editButton.textContent = 'Edit';
    li.appendChild(editButton);
});

// Implement the code as in video but with one extra 'Edit' button in 'li'
const form = document.querySelector('form');
const fruits = document.querySelector('.fruits');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const fruitToAdd = document.getElementById('fruit-to-add').value;
    
    const newLi = document.createElement('li');
    newLi.className = 'fruit';
    newLi.innerHTML = `${fruitToAdd}<button class="delete-btn">x</button><button class="edit-btn">Edit</button>`;
    fruits.appendChild(newLi);
});

fruits.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
        const fruitToDelete = event.target.parentElement;
        fruits.removeChild(fruitToDelete);
    }
});
