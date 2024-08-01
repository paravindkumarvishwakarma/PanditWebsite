const images = [
    'RudraAbishek Photo.png',
    'lord_Shiva.png',
    'Kashi_Temple.png'
];

const slider = document.getElementById('slider');
const imageElement = document.createElement('img');
let currentIndex = 0;

function loadNextImage() {
    imageElement.style.opacity = 0; // Hide the current image
    imageElement.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.onload = () => {
        imageElement.style.opacity = 1; // Show the new image
        imageElement.style.marginLeft = '300px'; // Set desired margin

        imageElement.style.transition = 'margin-left 2s ease-in-out'; // Add transition effect
        
        // Reset transition after the image loads
        setTimeout(() => {
            imageElement.style.transition = '';
        }, 2);

        // Load the next image after 2 seconds
        setTimeout(loadNextImage, 4000);
    };
}

// Preload the first image
imageElement.onload = loadNextImage;
loadNextImage();

// Add the image to the slider
slider.appendChild(imageElement);

// Function to show the previous image
function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    imageElement.src = images[currentIndex];
    loadNextImage(); // Load the next image after showing the previous one

}

// Function to show the next image
function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
    loadNextImage(); // Load the next image after showing it

}

// Attach event listeners to the buttons
document.getElementById('prev').addEventListener('click', showPrevImage);
document.getElementById('next').addEventListener('click', showNextImage);