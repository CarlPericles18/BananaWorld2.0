const menuBtn = document.querySelector('.btn')
const navMenu = document.querySelector('.ulList')
const mobilePov = document.querySelector('.mobileMenu');
const body = document.getElementsByTagName('body');

// RESPONSIVENESS BTN


  mobilePov.addEventListener('click',()=>{
   mobilePov.classList.toggle('active');
   navMenu.classList.toggle('active')
})