// Get the container grid
const container = document.querySelector(".container");

// Get the grid size
let gridSize = 10;

function makeGrid() {
    for (let i = 0; i < gridSize; i++) {
        for(let j = 0; j < gridSize; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.style.flex = `1 0 calc(100% / ${gridSize})`;
            container.appendChild(cell);
        }
    }
}

makeGrid();