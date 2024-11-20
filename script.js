// get the element to work with here
const container = document.getElementById('grid-container');
// Function to create the grid
function createGrid(size) {
    // clear the previous grid
    container.innerHTML = '';
    // new var that stores the div's width
    const containerWidth = container.offsetWidth;
    // calc sqaure size in accordance to div size
    const squareSize = containerWidth / size;
    // Create the squares
    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            const square = document.createElement('div');
            square.classList.add('square');
            // הגדרת גודל הריבוע בצורה דינמית
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            container.appendChild(square);
            // hovering effect dinamically
            square.addEventListener('mouseenter', () => {
                // changing color
                const randomColor = getRandomColor();
                square.style.backgroundColor = randomColor;
            });
        }
    }
}
// get grandom color function logic
function getRandomColor() {
    // an array of hex chars
    const chars = '0123456789ABCDEF';
    // prefix # 
    let color = '#'
    for (let i = 0; i < 6; i++) {
        // the var starts with the prefix...
        color += chars[Math.floor(Math.random() * 16)];
    }
    return color;
}


document.getElementById('new-grid').addEventListener('click', () => {
    // prompting for a size
    const num = parseInt(prompt('What is the size? '));
    // check whether input valid
    if (!isNaN(num) && num > 0 && num < 100) {
        createGrid(num); // יוצרים את הגריד החדש
    } else {
        alert('Please enter a valid number');
    }
});
createGrid(16);
