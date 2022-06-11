// menu humburger
const menu = document.querySelector('#menu');
const removemenu = document.querySelector('#false');
const link = document.querySelector('.header-link');

menu.addEventListener('click', () => {
    link.classList.add('active');
});

removemenu.addEventListener('click', () => {
    link.classList.add('remove');
    link.classList.remove('active');
});

// nav scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");

    header.classList.toggle("stiky", window.scrollY) > 0;
  });

window.addEventListener("scroll", () => {
    const link = document.querySelector(".header-link");

    link.classList.toggle("stiky", window.scrollY) > 0;
  });