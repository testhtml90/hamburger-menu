const barre1 = document.querySelector('.menu-hamburger__content1');
const barre2 = document.querySelector('.menu-hamburger__content2');
const barre3 = document.querySelector('.menu-hamburger__content3');
const button1 = document.querySelector(".button1");
const nav = document.querySelector(".nav");

button1.addEventListener("click", function(){
    console.log('click');

    barre1.classList.toggle('menu-hamburger-barre1');
    barre2.classList.toggle('menu-hamburger-barre2');
    barre3.classList.toggle('menu-hamburger-barre3');
    
    nav.classList.toggle('nav-activate');
    

})