let elHeader = document.querySelector(".site-header");
let elBtn = document.querySelector(".site-header__hamburg-btn");

elBtn.addEventListener('click', function() {
    elHeader.classList.toggle("site-header--active");
})
