let gridContainer = document.querySelector('#grid-container');

for (let i = 0; i < 16 * 16; i++){
    createDiv(gridContainer);
}

function createDiv (container) {
    let div = document.createElement('div');
    div.classList.add('grid-tile');
    container.appendChild(div);
}