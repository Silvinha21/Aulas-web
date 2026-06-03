const cards = document.querySelector('#cards-div');
const btn = document.querySelector('#btn');


fetch("cards.json").then(response => response.json())
.then(data => {
    data.map(card  => {
    cards.innerHTML += `<div class="card" id ="card-${cards.children.length + 1}">
        <h2>${card.titulo}</h2>
        <p>${card.descricao}</p>
    </div>
    `
})})