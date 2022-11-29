const subBtn = document.querySelector('.sub');
const closeBtn = document.querySelector('.closeBtn');
const thanks = document.querySelector('.thankYou');
const invalid1 = document.querySelector('.invalid1');
const invalid2 = document.querySelector('.invalid2');
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');
const box5 = document.querySelector('.box5');
const invalidMain = document.querySelector('.invalidMain')
const invalidMainTwo = document.querySelector('.invalidMainTwo')
const contactBox = document.querySelectorAll('.contactBox')
const menuBtn = document.querySelector('.btn')
const navMenu = document.querySelector('.ulList')
const mobilePov = document.querySelector('.mobileMenu');
const body = document.getElementsByTagName('body');

// RESPONSIVENESS BTN


  mobilePov.addEventListener('click',()=>{
   mobilePov.classList.toggle('active');
   navMenu.classList.toggle('active')
})
  



// invalid


let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// MESSAGE DISCLOSURE
subBtn.addEventListener('click',()=>{
    let emailValues = box2.value;
   if(box1.value === '' || box3.value === ''|| box4.value === ''|| box5.value === ''){
        invalidMain.style.display ='block';
        invalidMainTwo.style.display ='none';
   }else if(!emailValues.match(validRegex)){
    
        invalidMainTwo.style.display ='block';
        invalidMain.style.display ='none';

   }else{
    thanks.style.display = 'flex';
    invalidMain.style.display ='none';
    invalidMainTwo.style.display ='none';
   }
   
})
// box1.value === '' && box2.value === '' && box3.value === ''&& box4.value === '' && box5.value === ''


closeBtn.addEventListener('click',()=>{
    thanks.style.display = 'none';
    contactBox.forEach((input)=>{
        input.value ='';
    })
    return box5.value =''
});