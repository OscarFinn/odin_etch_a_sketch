const gridSize = 16;
const grid = document.querySelector(".container");

for(let i=0;i<gridSize;i++) {
    for(let j=0;j<gridSize;j++){
        const gridSquare = document.createElement('div');
        gridSquare.classList.add("gridSquare");
        gridSquare.textContent = `${i},${j}`;
        grid.appendChild(gridSquare);
    }
}