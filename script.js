const menu_btn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector("ul.nav-links");


menu_btn.addEventListener("click", function () {
    mobile_menu.classList.toggle("is-active");
});