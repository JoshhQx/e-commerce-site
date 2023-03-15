const icon = document.querySelector(".navbar-toggler");
const collapse = document.querySelector(".navbar-collapse");
icon.addEventListener("click", () => {
	collapse.style.display = collapse.style.display == "block" ? "none" : "block";
});
