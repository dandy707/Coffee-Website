const header = document.querySelector("header");
const closeBtn = document.querySelector("#close-menu-btn");
const hamburgerBtn = document.querySelector("#hamburger-btn");

hamburgerBtn.addEventListener("click", () => {
    header.classList.toggle("show-mobile");
});

closeBtn.addEventListener("click", () => {
    hamburgerBtn.click();
})