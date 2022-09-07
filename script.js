console.log('Hello World');

const gridContainer = document.querySelector('.grid-container');
//gridContainer.style.gridTemplateColumns = 'repeat(10, 5em)';

for (i=0; i < 256; i++){
    const newDiv = document.createElement('div');
    newDiv.classList.add('grid-box');
    newDiv.id = `div-${i}`
    gridContainer.appendChild(newDiv);

}

const gridBoxes = document.querySelectorAll('.grid-box');
gridBoxes.forEach(box => box.addEventListener('mouseover', (e) => {

    e.target.classList.add('grid-box-mouseover');
    console.log(e.target.id);
    console.log(e.target.classList);
}))

console.log(gridBoxes);
