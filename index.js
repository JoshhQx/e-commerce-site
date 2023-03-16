"use strict";

const productListing = document.querySelector(".products-listing");
const numOfProducts = 6;
const productHTML = `<div class="card">
<div class="card-header">
    <h4>4.5/5</h4>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star-half-stroke"></i>
    <h4>2,115 Ratings</h4>
</div>
<div class="card-content">
    <img src="./images/lipgloss-product.png" alt="lipgloss" />
    <h2>SATIN LIP GLOSS</h2>
    <h2 class= "card-price">₱250</h2>
    <p class = "card-description">Creamy, Medium Buildable Coverage , Satin Finish</p>
    <div class="color-variation">
        <div class="arrow" id="prev-arrow">&#10094;</div>
        <input type="radio" name="lipstick-color" id="color1" checked />
        <label for="color1" style="background-color: #cc7171"></label>
        <input type="radio" name="lipstick-color" id="color2" />
        <label for="color2" style="background-color: #ff1493"></label>
        <input type="radio" name="lipstick-color" id="color3" />
        <label for="color3" style="background-color: #c71585"></label>
        <input type="radio" name="lipstick-color" id="color4" />
        <label for="color4" style="background-color: #ff7f50"></label>
        <input type="radio" name="lipstick-color" id="color5" />
        <label for="color5" style="background-color: #ffa500"></label>
        <input type="radio" name="lipstick-color" id="color6" />
        <label for="color6" style="background-color: #ffd700"></label>
        <div class="arrow" id="next-arrow">&#10095;</div>
    </div>
    <h3>PEACH</h3>
    <button><a href="product-details.html">ADD TO BAG</a></button>
</div>
</div>`;

for (let i = 0; i < numOfProducts; i++) {
	productListing.innerHTML += productHTML;
}

const icon = document.querySelector(".navbar-toggler");
const collapse = document.querySelector(".navbar-collapse");
icon.addEventListener("click", () => {
	collapse.style.display = collapse.style.display == "block" ? "none" : "block";
});

// const nextArrow = document.querySelector(".arrow-right");
// const prevArrow = document.querySelector(".arrow-left");
// const imageContainer = document.querySelector(".hero-section");
// const images = ["../images/hero-banner.png", "../images/hero-banner-1.png"];
// let index = 0;
// imageContainer.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${images[index]}) center/cover no-repeat`;

// nextArrow.addEventListener("click", () => {
// 	if (index < images.length - 1) {
// 		index++;
// 		imageContainer.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${images[index]}) center/cover no-repeat`;
// 	}
// });
// prevArrow.addEventListener("click", () => {
// 	if (index > 0) {
// 		index--;
// 		imageContainer.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${images[index]}) center/cover no-repeat`;
// 	}
// });
