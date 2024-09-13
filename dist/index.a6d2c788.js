/* INCREASE/DECREASE ORDER QUANTITY */ /* MOBILE MENU */ let mobileMenu = document.querySelector(".mobile-menu");
mobileMenu.onclick = function() {
    if (document.querySelector(".mobile-navigation").classList.contains("active-navigation")) document.querySelector(".mobile-navigation").classList.remove("active-navigation");
    else document.querySelector(".mobile-navigation").classList.add("active-navigation");
};
/* GET ELEMENTS */ let decreaser = document.getElementById("lower-quantity");
let quantity = document.getElementById("quantity");
let increaser = document.getElementById("increase-quantity");
/* DECREASE ON CLICK */ decreaser.onclick = function() {
    let quantityValue = quantity.getAttribute("value");
    quantityValue = Number(quantityValue);
    quantityValue--;
    quantity.setAttribute("value", quantityValue);
    quantity.innerHTML = quantityValue;
};
/* INCREASE ON CLICK */ increaser.onclick = function() {
    let quantityValue = quantity.getAttribute("value");
    quantityValue = Number(quantityValue);
    quantityValue++;
    quantity.setAttribute("value", quantityValue);
    quantity.innerHTML = quantityValue;
};
/* ADD TO CART */ let addToCart = document.getElementById("add-to-cart-button");
let styleDiv = document.getElementById("styleDiv");
let cartIcon = document.getElementById("cart-icon");
/* SET CART VALUE AND ANIMATE NUMBER ON CART ICON */ addToCart.onclick = function() {
    let quantityValue = quantity.getAttribute("value");
    quantityValue = Number(quantityValue);
    cartIcon.style.color = "blue";
    cartIcon.classList.add("cartFull");
    cartIcon.setAttribute("data-content", quantityValue);
    quantity.setAttribute("value", 1);
    quantity.innerHTML = 1;
    styleDiv.innerHTML = "";
    setTimeout(function() {
        var styleElem = styleDiv.appendChild(document.createElement("style"));
        styleElem.innerHTML = ".cartFull::after {visibility: visible;opacity: 1;}";
    }, 100);
};
/* SHOW/HIDE INGREDIENTS */ let ingredientsHeading = document.querySelectorAll(".ingredientsHeading");
for(var i = 0; i < ingredientsHeading.length; i++)ingredientsHeading[i].onclick = function() {
    if (this.classList.contains("active")) {
        this.classList.add("inactive");
        this.classList.remove("active");
    } else {
        this.classList.add("active");
        this.classList.remove("inactive");
    }
};
/* CAROUSEL */ const slides = document.getElementsByClassName("carousel-item");
const nextButton = document.getElementById("carousel-button-next");
const prevButton = document.getElementById("carousel-button-prev");
const dots = document.getElementsByClassName("dot");
let position = 0;
const numberOfSlides = slides.length;
function hideAllSlides() {
    // remove all slides not currently being viewed
    for (const slide of slides){
        slide.classList.remove("carousel-item-visible");
        slide.classList.add("carousel-item-hidden");
    }
}
const handleMoveToNextSlide = function(e) {
    hideAllSlides();
    // check if last slide has been reached
    if (position === numberOfSlides - 1) position = 0; // go back to first slide
    else // move to next slide
    position++;
    // make current slide visible
    slides[position].classList.add("carousel-item-visible");
};
const handleMoveToPrevSlide = function(e) {
    hideAllSlides();
    // check if we're on the first slide
    if (position === 0) position = numberOfSlides - 1; // move to the last slide
    else // move back one
    position--;
    // make current slide visible
    slides[position].classList.add("carousel-item-visible");
};
// listen for slide change events
nextButton.addEventListener("click", handleMoveToNextSlide);
prevButton.addEventListener("click", handleMoveToPrevSlide);

//# sourceMappingURL=index.a6d2c788.js.map
