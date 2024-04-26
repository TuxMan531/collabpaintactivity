const canvas = document.createElement("canvas");
document.body.append(canvas);
const ctx = canvas.getContext("2d");

export function initializeGame() {
    // function body
  }

const numCells = 50; // Fixed number of cells in both width and height
let gridSize; // Size of each cell, to be determined based on canvas size
let canvasSize; // Total canvas size

// Adjust canvas size and cell size based on the window dimensions
function adjustCanvas() {
    canvasSize = Math.min(window.innerWidth, window.innerHeight) * 0.75;
    canvas.width = canvasSize;
    canvas.height = canvasSize;
    gridSize = canvasSize / numCells; // Calculate the new size for each grid cell
    drawGrid(); // Redraw the grid whenever the canvas size changes
}

// Player position
let playerX = 5; // Initial player x-coordinate in grid cells
let playerY = 5; // Initial player y-coordinate in grid cells

// Create an array to store the color state of each cell
const gridColors = Array.from({ length: numCells }, () => Array(numCells).fill('white'));

// Function to draw the entire grid
function drawGrid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

    // Draw each grid cell
    for (let x = 0; x < numCells; x++) {
        for (let y = 0; y < numCells; y++) {
            ctx.fillStyle = gridColors[y][x]; // Set fill style to stored color
            ctx.fillRect(x * gridSize, y * gridSize, gridSize, gridSize); // Fill the cell with color
            ctx.strokeStyle = "grey"; // Grid line color
            ctx.strokeRect(x * gridSize, y * gridSize, gridSize, gridSize); // Draw grid line
        }
    }

    // Draw the player dot
    drawPlayer();
}

let playerColor = getRandomHexColor(); // Random color for the player, initialized on page load

// Function to draw the player

function drawPlayer() {
    const radius = gridSize / 4; // Radius of the player dot
    ctx.fillStyle = playerColor; // Use the pre-determined random color

    ctx.beginPath();
    ctx.arc(playerX * gridSize + gridSize / 2, playerY * gridSize + gridSize / 2, radius, 0, Math.PI * 2);
    ctx.fill();
}

function getRandomHexColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

// Initial setup
adjustCanvas();
window.addEventListener('resize', adjustCanvas); // Adjust the canvas size when the window is resized

// Global variable for selected color
let colorgrid = 'white';  // Default color

// Color changing buttons
document.getElementById('color-red').addEventListener('click', function() {
    colorgrid = 'red';
});
document.getElementById('color-green').addEventListener('click', function() {
    colorgrid = 'green';
});
document.getElementById('color-blue').addEventListener('click', function() {
    colorgrid = 'blue';
});

// Event listener for keyboard controls
document.addEventListener("keydown", function(event) {
    let moved = false;
    if (event.key === "ArrowLeft" && playerX > 0) {
        playerX -= 1;
        moved = true;
    } else if (event.key === "ArrowRight" && playerX < numCells - 1) {
        playerX += 1;
        moved = true;
    } else if (event.key === "ArrowUp" && playerY > 0) {
        playerY -= 1;
        moved = true;
    } else if (event.key === "ArrowDown" && playerY < numCells - 1) {
        playerY += 1;
        moved = true;
    } else if (event.key === "a" || event.key === "A") { // Listen for the 'A' key to color the current cell
        gridColors[playerY][playerX] = colorgrid ; // Change the color at the player's position
        moved = true;
    }
    else if (event.key === "s" || event.key === "S") { // Listen for the 'S' key to color the current cell
        gridColors[playerY][playerX] = 'white'; // Change the color at the player's position
        moved = true;
    }

    if (moved) {
        drawGrid();
    }
});
