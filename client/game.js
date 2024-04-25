const size = Math.min(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0), Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)) * 0.75;
const canvas = document.createElement("canvas")
canvas.width = size;
canvas.height = size;
document.body.append(canvas);
const ctx = canvas.getContext("2d");

const readline = require('readline');

// Grid dimensions
const gridRowCount = 10;
const gridColumnCount = 10;

// Player starting position
let playerPosition = { x: 0, y: 0 };

// Initialize readline interface
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

// Function to draw the grid
function drawGrid() {
    console.clear();
    for (let y = 0; y < gridRowCount; y++) {
        let row = '';
        for (let x = 0; x < gridColumnCount; x++) {
            if (x === playerPosition.x && y === playerPosition.y) {
                row += 'P '; // Player's current position
            } else {
                row += '. '; // Empty space
            }
        }
        console.log(row);
    }
}

// Event listener for keypress
process.stdin.on('keypress', (str, key) => {
    if (key.ctrl && key.name === 'c') {
        process.exit(); // Exit program
    } else {
        switch (key.name) {
            case 'up':
                playerPosition.y = Math.max(playerPosition.y - 1, 0);
                break;
            case 'down':
                playerPosition.y = Math.min(playerPosition.y + 1, gridRowCount - 1);
                break;
            case 'left':
                playerPosition.x = Math.max(playerPosition.x - 1, 0);
                break;
            case 'right':
                playerPosition.x = Math.min(playerPosition.x + 1, gridColumnCount - 1);
                break;
        }
        drawGrid();
    }
});

// Initial drawing of the grid
drawGrid();
