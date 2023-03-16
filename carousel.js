const nextArrowBtn = document.querySelector(".arrow-right");
const prevArrowBtn = document.querySelector(".arrow-left");
const imageContainer = document.querySelector(".hero-section");
const images = ["../images/hero-banner.png", "../images/hero-banner-1.png", "../images/hero-banner-2.png", "../images/hero-banner-3.png"];
const gradient = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))";

let index = 0;
const slideshowDuration = 5000; // 5 seconds
let slideshowTimer;
imageContainer.style.background = `${gradient}, url(${images[index]}) center/cover no-repeat`;

// Update the background image of the container
function updateBackgroundImage() {
	if (index >= images.length) {
		index = 0;
	} else if (index < 0) {
		index = images.length - 1;
	}
	imageContainer.style.background = `${gradient}, url(${images[index]}) center/cover no-repeat`;
}

// Start the slideshow
function startSlideshow() {
	slideshowTimer = setInterval(() => {
		updateBackgroundImage();
		index++;
	}, slideshowDuration);
}

// Navigate to the next image
function nextImage() {
	index++;
	updateBackgroundImage();
}

// Navigate to the previous image
function prevImage() {
	index--;
	updateBackgroundImage();
}

// Add event listeners to the arrow buttons
nextArrowBtn.addEventListener("click", nextImage);
prevArrowBtn.addEventListener("click", prevImage);

// Start the slideshow when the page loads
startSlideshow();
