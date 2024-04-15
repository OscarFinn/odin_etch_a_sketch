
const grid = document.querySelector(".gridcontainer");
const myArray = [];
function makeGrid() {    
    const gridSize = getGridSize();
    const countArray = makeArray2d(gridSize);
    grid.textContent='';
    for(let i=0;i<gridSize;i++) {
        for(let j=0;j<gridSize;j++){
            const gridSquare = document.createElement('div');
            gridSquare.style.setProperty('width',`${100/gridSize}%`)
            gridSquare.classList.add("gridsquare");
            gridSquare.addEventListener("mouseover",() => {
                if(countArray[i][j]<10){
                    countArray[i][j]++;
                };
                gridSquare.style.backgroundColor = "black";
                gridSquare.style.opacity = 0.1*countArray[i][j];

            })
            //gridSquare.textContent = `${i},${j}`;
            grid.appendChild(gridSquare);
        }
    }    
}
function getGridSize(){
    return document.getElementById(`gridsize`).value;
}

function makeArray2d(size){
    for (let i=0;i<size;i++){
        myArray[i] = [];
        for (let j=0;j<size;j++){
            myArray[i][j] = 0;
        }
    }
    return myArray;
}
makeGrid();
