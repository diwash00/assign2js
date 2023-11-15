// gallery.js


// Initialize the current image index
var currentImageIndex = 0;

// Function to show the image with title and description
function showImage(imageSrc, title, description) {
    var featuredImage = document.getElementById('featuredImage');
    var image = featuredImage.querySelector('img');
    var titleElement = featuredImage.querySelector('figcaption');
    var descriptionElement = featuredImage.querySelector('#imageDescription');

    image.src = 'images/' + imageSrc;
    titleElement.textContent = title;

    // Use innerHTML to render HTML content
    if (descriptionElement) {
        descriptionElement.innerHTML = description;
    }
}

// Function to show the previous image
function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + imageData.length) % imageData.length;
    showImage(imageData[currentImageIndex].src, imageData[currentImageIndex].title, imageData[currentImageIndex].description);
}

// Function to show the next image
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % imageData.length;
    showImage(imageData[currentImageIndex].src, imageData[currentImageIndex].title, imageData[currentImageIndex].description);
}
