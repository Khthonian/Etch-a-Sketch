// Get the container grid
const container = document.querySelector(".container");

// Get the control inputs
const resetButton = document.querySelector(".reset");
const gridSizeValue = document.querySelector(".grid-size");
const applyButton = document.querySelector(".apply");

// Get the grid size
let gridSizeInput = document.querySelector("input");
let gridSize = 16;

// Get the colour modes
const blackButton = document.querySelector(".black-mode");
const rainbowButton = document.querySelector(".rainbow-mode");


function makeGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        for(let j = 0; j < gridSize; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.style.flex = `1 0 calc(100% / ${gridSize})`;

            cell.addEventListener("mouseover", function () {
                this.style.backgroundColor = "black";
            });

            container.appendChild(cell);
        }
    }
}

// Change the grid size value
gridSizeInput.addEventListener("input", function (e) {
    gridSize = e.target.value;
    gridSizeValue.textContent = `${gridSize} x ${gridSize}`;
});

// Enable grid resetting
function resize() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    makeGrid(gridSize);
}

resetButton.addEventListener("click", function () {
    gridSize = 16;
    resize();
});

applyButton.addEventListener("click", resize);

// Randomised hex colour
function randomHex() {
    let hexValues = "0123456789ABCDEF";
    let randomHex = "#"
    for (let i = 0; i < 6; i++) {
        randomHex += hexValues[Math.floor(Math.random() * 16)];
    }
    return randomHex;
}

// Apply black mode
blackButton.addEventListener("click", function () {
    let value = gridSizeInput.value;
    let cell = container.children;
    for (let i = 0; i < value * value; i++) {
        cell[i].addEventListener("mouseover", function () {
            this.style.backgroundColor = "black";
        });
    }
});

// Apply black mode
rainbowButton.addEventListener("click", function () {
    let value = gridSizeInput.value;
    let cell = container.children;
    for (let i = 0; i < value * value; i++) {
        cell[i].addEventListener("mouseover", function () {
            this.style.backgroundColor = randomHex();
        });
    }
});

makeGrid(gridSize);