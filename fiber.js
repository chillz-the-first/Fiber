const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar-links");
const menuBtns = document.querySelector(".navbar-btns");

menu.addEventListener('click', function () {
    menu.classList.toggle("is-active");
    console.log("i was clicked");
    menuLinks.classList.toggle("active");
    menuBtns.classList.toggle("actives");
})