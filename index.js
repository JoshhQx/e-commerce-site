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
    <img src="/images/lipgloss-product.png" alt="lipgloss" />
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

const navLinks = document.querySelector(".navbar-collapse");
const barIcon = document.querySelector(".navbar-toggler");
barIcon.addEventListener("click", () => {
	navLinks.style.display === "block" ? (navLinks.style.display = "none") : (navLinks.style.display = "block");
});
