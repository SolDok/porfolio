let burger = document.querySelector('.header__burger');
let hdr__menu = document.querySelector('.header__menu');
let body = document.querySelector('body');
let langBtn = document.querySelector('.language-toggle');
let ruLng = langBtn.querySelector('.language-toggle__RU');
let enLng = langBtn.querySelector('.language-toggle__EN');
burger.addEventListener('click', function() {
    burger.classList.toggle('active');
    hdr__menu.classList.toggle( 'active');
    body.classList.toggle('lock');
    langBtn.classList.toggle('active');
});
hdr__menu.addEventListener('click', function() {
    burger.classList.toggle('active');
    hdr__menu.classList.toggle( 'active');
    body.classList.toggle('lock');
    langBtn.classList.toggle('active');
});
langBtn.addEventListener('click', function () {
    ruLng.classList.toggle('_active');
    enLng.classList.toggle('_active');
    body.classList.toggle('en');
    body.classList.toggle('ru');
});