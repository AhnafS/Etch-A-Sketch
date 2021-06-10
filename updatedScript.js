const gridContainer = document.querySelector('#grid-container');
const eraserButton = document.querySelector('#eraser');
const blackButton = document.querySelector("#blackColor");
const grayButton = document.querySelector("#grayScale");
const clearButton = document.querySelector('#clear');
const rainbowButton = document.querySelector('#rainbow');
let currentMode = 'color';
let mainColor = 'black';

createDiv(gridContainer, 16);
let tiles = document.querySelectorAll('.grid-tile');

function createDiv (container, n) {
    for (let i = 0; i < n * n; i++){
        let div = document.createElement('div');
        div.classList.add('grid-tile');
        container.appendChild(div);
    }
}


function backgroundColorChange(color) {
    gridContainer.addEventListener('mouseover', e => {
        if (e.target.id != 'grid-container'){
            e.target.style.backgroundColor = color;
        }
    })
}

function eraseTiles(){
    gridContainer.addEventListener('mouseover', e => {
        if(e.target.id != "grid-container"){
            e.target.style.backgroundColor = 'white';
      }
    })
}

function changeModes (){
    switch (currentMode){
        case 'color':
            backgroundColorChange(mainColor);
            break;

        case 'eraser':
            eraseTiles();
            break;
    }
}

function clearGrid() {
    tiles.forEach(tile => {tile.style.backgroundColor = 'white';})
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function rainbow(){
    gridContainer.addEventListener('mouseover', e => {
        if (e.target.id != 'grid-container'){
            e.target.style.backgroundColor = getRandomColor();
        }
    })
}


//testing with functions
changeModes();

blackButton.addEventListener('click', e => {backgroundColorChange('black')});

eraserButton.addEventListener('click', e => {
    currentMode = 'eraser';
    changeModes();
});

clearButton.addEventListener('click', clearGrid);

rainbowButton.addEventListener('click', rainbow);
