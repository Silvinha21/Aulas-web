const cards = document.querySelector('#cards-div');
const btn = document.querySelector('#btn');



btn.addEventListener('click', () => {
    cards.innerHTML += `<div class="card" id ="card-${cards.children.length + 1}">
        <h2>Card</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
    </div>
    `
})