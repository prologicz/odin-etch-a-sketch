console.log('Odin Etch-a-Sketch');

//Initialize 64x64 grid which can be drawn on
let gridLength = 64;
let gridSize = gridLength * gridLength
createGrid(gridSize);
draw();


//Select Grid Size button which clears current Grid and resets based on size chosen.
const gridSizeButton = document.querySelector('#grid-size-button');
gridSizeButton.addEventListener('click', (e) => {
    gridLength = prompt("Select a grid length: \n(Note: Max value is 100)");
    if (gridLength > 100) gridLength = 100;
    gridSize = gridLength * gridLength;
    


    clearGrid();
    createGrid(gridSize);
    draw();
    
})





function createGrid(gridSize) {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.style.gridTemplateColumns = `repeat(${gridLength}, ${750/gridLength}px)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridLength}, ${750/gridLength}px)`;

    for (i=0; i < gridSize; i++){
        const newDiv = document.createElement('div');
        newDiv.classList.add('grid-box');
        newDiv.id = `div-${i}`
        gridContainer.appendChild(newDiv);

    }


}

function clearGrid() {
    const gridContainer = document.querySelector('.grid-container')
    const gridBoxes = document.querySelectorAll('.grid-box')

    gridBoxes.forEach(box => { 
        gridContainer.removeChild(box);
    })
}

function draw(e) {
    const gridBoxes = document.querySelectorAll('.grid-box');
    gridBoxes.forEach(box => box.addEventListener('mouseover', (e) => {
    
        e.target.classList.add('grid-box-mouseover');
        console.log(e.target.id);
        console.log(e.target.classList);
    }))
}