const navMenu = document.querySelector('.ulList')
const mobilePov = document.querySelector('.mobileMenu');


// RESPONSIVENESS BTN


mobilePov.addEventListener('click',()=>{
    mobilePov.classList.toggle('active');
    navMenu.classList.toggle('active')
 })
   