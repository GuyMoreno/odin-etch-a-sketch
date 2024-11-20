const container = document.getElementById('grid-container');
// Function to create the grid
function createGrid(size) {
    container.innerHTML = ''; // Clear any existing grid
    // השורה להלן מאחסנת משתנה ובו הרוחב של המיכל
    const containerWidth = container.offsetWidth;
    const squareSize = containerWidth / size;
    // חישוב גודל הריבוע (בהתאם למספר הריבועים בשורה)
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

function getRandomColor() {
    // כל האפשרויות התקפות בתווי צבע
    const chars = '0123456789ABCDEF';
    let color = '#'
    for (let i = 0; i < 6; i++) {
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
