let gridContainer = document.querySelector('#grid-container');

createGridTiles(16, 16, gridContainer);
let tiles = document.querySelectorAll('.grid-tile');

tileColor(tiles, 'black')

let eraserButton = document.querySelector('#eraser');
let clearButton = document.querySelector('#clear');
let blackButton = document.querySelector("#blackColor");
let grayButton = document.querySelector("#grayScale");
if (blackButton.clicked == true) {console.log('It works');}
eraserButton.addEventListener('click', eraseTiles);

blackButton.addEventListener('click', e => {tileColor(tiles , e.value)});
//sets tile color
function tileColor (tiles, color) {   
        tiles.forEach(tile => {
        tile.addEventListener('mouseover', e => {
        e.target.style.backgroundColor = color;
    })
    })
}

//Creates all the grid tiles for container
function createGridTiles (w, h, container) {
    for (let i = 0; i < w * h; i++){
        createDiv(container);
    }
}

// creates each div for container
function createDiv (container) {
    let div = document.createElement('div');
    div.classList.add('grid-tile');
    container.appendChild(div);
}

function eraseTiles () {
    tiles.forEach(tile => {
        tile.addEventListener('mouseover', e => {
            e.target.style.backgroundColor = 'white';
        })
    })

    let allButtons = document.querySelectorAll('.data-buttons');
    allButtons.forEach(button => {
    })
}