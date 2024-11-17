// Number of random dots to generate
const dotCount = 100;

// Colors for the dots
const colors = ['#FFFFFF', '#FFD700', '#6A0DAD']; // white, yellow, dark purple

// Function to create and place random dots on the screen
function createRandomDots() {
    for (let i = 0; i < dotCount; i++) {
        const dot = document.createElement('div');

        // Randomize the dot size between 2px and 6px
        const size = Math.random() * (6 - 2) + 2;

        // Randomize the position within the viewport
        const xPos = Math.random() * window.innerWidth;
        const yPos = Math.random() * window.innerHeight;

        // Randomize the color from the colors array
        const color = colors[Math.floor(Math.random() * colors.length)];

        // Style the dot
        dot.style.position = 'absolute';
        dot.style.top = `${yPos}px`;
        dot.style.left = `${xPos}px`;
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        dot.style.borderRadius = '50%';
        dot.style.backgroundColor = color;
        dot.style.opacity = 0.8 + Math.random() * 0.2; // Slight opacity variation

        // Add the dot to the body
        document.body.appendChild(dot);
    }
}

// Call the function to generate the dots
createRandomDots();