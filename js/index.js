const imagesDescInfo= [
    {
        id: 0,
        name: 'village0',
        disc: 'HI THERE VILLAGE ZERO '
    },

    {
        id: 1,
        name: 'village1',
        disc: 'HI THERE VILLAGE ONE '
    },

    {
        id: 2,
        name: 'village2',
        disc: 'HI THERE VILLAGE TWO '
    },
    
    {
        id: 3,
        name: 'village3',
        disc: 'HI THERE VILLAGE THREE '
    },

    {
        id: 4,
        name: 'village4',
         disc: 'HI THERE VILLAGE FOUR '
    },
    {
        id: 5,
        name: 'village5',
        disc: 'HI THERE VILLAGE FIVE '
    }    

]

const button = document.querySelector('.explore')
const ul = document.querySelector('.ulList');
const donateBtn  = document.querySelector(".donateBtnOne");
const VillageImg = document.querySelector('.villageImg')
const selectedImg = [1,2,3,4,5,6,]
const imgs = document.querySelectorAll('.villImg');
const wrapper = document.querySelector('#wrapper');
const wrapperImg = document.querySelector('#fullImg');
const closed = document.querySelector('.x')
const wrapperDonateBtn = document.querySelector('.donateB')
const wrapperText = document.querySelector('.wrapperText');
const read = document.querySelectorAll('.paraOne')
const menuBtn = document.querySelector('.btn')
const navMenu = document.querySelector('.ulList')
const mobilePov = document.querySelector('.mobileMenu');
const body = document.getElementsByTagName('body');

// RESPONSIVENESS BTN


  mobilePov.addEventListener('click',()=>{
   mobilePov.classList.toggle('active');
   navMenu.classList.toggle('active')
})
  
// IMAGES AND 
read.forEach((img, index) =>{
    img.addEventListener('click', () =>{
        openModel(`Pictures/village${index}.jpg`)
      openDisc()
    })
})

    function openDisc(){
    imagesDescInfo.forEach((dis, index2)=>{
    wrapperText.textContent +=  Object.values( index2, dis.dis).join(" ")
    // console.log( index2, dis.disc)
})
}


function openModel(pic){
    wrapper.style.display = 'flex';
    // wrapperImg.src=pic
}









// CLOSE
closed.addEventListener('click',()=> {wrapper.style.display = 'none'})

// SCROLL
button.addEventListener('click',() =>{
    window.scroll(0, 900)
})


// DONATE BUTTONS
wrapperDonateBtn.addEventListener('click', ()=>{
    location.href = 'http://127.0.0.1:5500/Donate.html';
})


 donateBtn.addEventListener('click', ()=>{
        location.href = 'http://127.0.0.1:5500/Donate.html';
 })