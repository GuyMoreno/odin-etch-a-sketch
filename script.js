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

        }
    }
}

// Initially create a 16x16 grid
createGrid(16);