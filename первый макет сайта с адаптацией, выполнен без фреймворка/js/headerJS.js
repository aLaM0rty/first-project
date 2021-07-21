let eng = document.querySelector('.language__eng')
let ru = document.querySelector('.language__ru')

function lenguageColorEng(){
   eng.style.color = "#828282";
   ru.style.color = "#000"
}

function lenguageColorRu(){
   ru.style.color = "#828282";
   eng.style.color = "#000"
}

eng.addEventListener('click', lenguageColorEng)
ru.addEventListener('click', lenguageColorRu)

// код для скролла по сайту
// переменны для определения основных блоков
let header = document.querySelector('.header')
let about_me = document.querySelector('.about-me')
let skills = document.querySelector('.skills')
let portfolio = document.querySelector('.portfolio')
let contacts = document.querySelector('.contacts')

//переменные расстояние
let heightAboutMe = header.clientHeight + about_me.clientHeight
let heightSkills = header.clientHeight + about_me.clientHeight + skills.clientHeight

// функции для скролла
function scrollHomeAdaption(){
   if(document.documentElement.clientWidth <= 768){
      scrollTo(0,0)
      clickClose()
   }else if(document.documentElement.clientWidth > 768){
      scrollTo(0,0)
   }
}

function scrollSkillAdaption(){
   let sum = header.clientHeight + about_me.clientHeight
   if(document.documentElement.clientWidth <= 768){
      scrollTo(0,sum)
      clickClose()
   }
   else if(document.documentElement.clientWidth > 768){
      scrollTo(0,sum)
   }
}

function scrollAboutMeAdaption(){
   let sum = header.clientHeight
   if(document.documentElement.clientWidth <= 768){
      scrollTo(0,sum)
      clickClose()
   }else if(document.documentElement.clientWidth > 768){
      scrollTo(0,sum)
   }
}

function scrollPortfolioAdaption(){
   let sum = header.clientHeight + about_me.clientHeight + skills.clientHeight
   if(document.documentElement.clientWidth <= 768){
      scrollTo(0, sum)
      clickClose()
   }
   else if(document.documentElement.clientWidth > 768){
      scrollTo(0, sum)
   }
}

function scrollContactsAdaption(){
   let sum = header.clientHeight + about_me.clientHeight + skills.clientHeight + portfolio.clientHeight
   if(document.documentElement.clientWidth <= 768){
      scrollTo(0, sum)
      clickClose()
   }
   else if(document.documentElement.clientWidth > 768){
      scrollTo(0,sum)
   }
}

// переменные для присвоения
let home = document.querySelector('.menu__info__close__home')
let aboutMe = document.querySelector('.menu__info__about-me')
let skillsBut = document.querySelector('.menu__info__skills')
let portfolioBut = document.querySelector('.menu__info__portfolio')
let contactsBut = document.querySelector('.menu__info__contacts')

// присвояние событий
home.addEventListener('click', scrollHomeAdaption)
aboutMe.addEventListener('click', scrollAboutMeAdaption)
skillsBut.addEventListener('click', scrollSkillAdaption)
portfolioBut.addEventListener('click', scrollPortfolioAdaption)
contactsBut.addEventListener('click',scrollContactsAdaption)


//адаптивное меню header
let buttonMenu = document.querySelector('.menu__info__close__button')
let menu = document.querySelector('.menu')
let menuIcon = document.querySelector('.menu__icon')

function clickIcon(){
   menu.classList.add('menu_active')
}

function clickClose(){
   menu.classList.remove('menu_active')
}

buttonMenu.addEventListener('click', clickClose)
menuIcon.addEventListener('click', clickIcon)
