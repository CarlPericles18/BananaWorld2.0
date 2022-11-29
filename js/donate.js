const checkingAcc = document.querySelector('.checkingAccount');
const thanks = document.querySelector('.thankYou');
const closeBtn = document.querySelector('.closeBtn');
const creditCardPay = document.querySelector('.creditCardPay');
const navMenu = document.querySelector('.ulList')
const mobilePov = document.querySelector('.mobileMenu');
const payPalPayment= document.querySelector('.payPalPayment')
const inputValues1= document.querySelector('.inputValues1')
const inputValues2= document.querySelector('.inputValues2')
const inputValues3= document.querySelector('.inputValues3')
const inputValues4= document.querySelector('.inputValues4')
const inputValues5= document.querySelector('.inputValues5')
const inputValues6= document.querySelector('.inputValues6')
const inputValues7= document.querySelector('.inputValues7')
const inputValues8= document.querySelector('.inputValues8')
const inputEmailValue= document.querySelector('.inputEmailValue')
const donateBtn= document.querySelector('.donateBtn')
const error1= document.querySelector('.error1')
const error2= document.querySelector('.error2')
let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;














//DONATE BTN
donateBtn.addEventListener('click',()=>{
    
    if(inputValues1.value === '' || inputValues2.value === '' || inputValues3.value === '' ||inputValues4.value === '' ||inputValues5.value === '' ||inputValues6.value === '' ||inputValues7.value === '' || inputValues8.value === '' ){
        error2.textContent = 'Please fill out all the information above'
        error2.style.color = 'red';
        error2.style.fontSize = '10px';

    }else{
        error1.textContent = '';
        error2.textContent = '';
    }
    emailCheck()

    if(error1.textContent === '' && error2.textContent ===''){
        window.open('http://127.0.0.1:5500/payment.html')
        thanks.style.display = 'none';
        clear()
    }

})


//Clear Func
function clear(){
    error1.textContent = '';
    error2.textContent = '';
    inputValues1.value ='';
    inputValues2.value = '';
    inputValues3.value = '';
    inputValues4.value = '';
    inputValues5.value = '';
    inputValues6.value = ''; 
    inputValues7.value = ''; 
    inputValues8.value = '';
    inputEmailValue.value='' 
}

// CHECK EMAIL FUNCTION
function emailCheck(){
let validEmail = inputEmailValue.value;
    if(!validEmail.match(validRegex)){
        error1.textContent = 'Please enter a valid email address';
        error1.style.color = 'red';
        error1.style.fontSize = '10px';

    }else{
        error1.textContent = '';
    }
}

//CLOSE BTN
closeBtn.addEventListener('click',()=>{
    thanks.style.display = 'none';
    clear()
});

















// MOBILE MENU
mobilePov.addEventListener('click',()=>{
    mobilePov.classList.toggle('active');
    navMenu.classList.toggle('active')
 })
   












//PAYMENT//
creditCardPay.addEventListener('click',()=>{
    thanks.style.display='flex';
})
checkingAcc.addEventListener('click',()=>{
    thanks.style.display='flex';
})
payPalPayment.addEventListener('click',()=>{
    thanks.style.display='flex';
})
