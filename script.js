console.log('Hello World');

const gridContainer = document.querySelector('.grid-container');
for (i=0; i < 256; i++){
    const newDiv = document.createElement('div');
    newDiv.classList.add(`div-${i}`);
    gridContainer.appendChild(newDiv);

}