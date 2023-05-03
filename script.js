// Select the image element
const image = document.getElementById("image");

// Set the initial position of the image
let xPos = 0;

// Define the animation function
function animateImage() {
  // Increment the position of the image
  xPos += 5;

  // Move the image to the new position
  image.style.left = xPos + "px";

  // Call the function again after a short delay
  setTimeout(animateImage, 10);
}

// Call the animation function to start the animation
animateImage();
