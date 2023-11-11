// script.js
document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');

    // Get references to the elements
    const imageGallery = document.querySelector('.image-gallery');
    const countdownTimer = document.getElementById('countdownTimer');
    const startTimerButton = document.getElementById('startTimerButton');

    // Function to show the next image in the gallery
    function showNextImage() {
        const currentImage = document.querySelector('.active-image');
        const nextImage = currentImage.nextElementSibling || imageGallery.firstElementChild;

        // Remove the 'active-image' class from the current image
        currentImage.classList.remove('active-image');

        // Add the 'active-image' class to the next image
        nextImage.classList.add('active-image');
    }

    // Attach click event listener to the image gallery
    imageGallery.addEventListener('click', showNextImage);

    // Function to start a simple countdown timer
    function startCountdown() {
        let seconds = 10;

        const countdownInterval = setInterval(function () {
            countdownTimer.textContent = seconds;
            seconds--;

            if (seconds < 0) {
                clearInterval(countdownInterval);
                countdownTimer.textContent = 'Time\'s up!';
            }
        }, 1000);
    }

    // Attach click event listener to the start timer button
    startTimerButton.addEventListener('click', startCountdown);
});
