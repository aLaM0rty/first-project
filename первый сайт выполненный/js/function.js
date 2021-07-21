// scroll down
let buttonScrollDown = document.querySelector('.header__base-text__scroll-button')

let header = document.querySelector('.header')
let navbar = document.querySelector('.navbar')
let about = document.querySelector('.about')
let services = document.querySelector('.services')
let getInTouch = document.querySelector('.get-in-touch')
let newsLetter = document.querySelector('.newsletter')
let footer = document.querySelector('.footer')

function scrollDown(){
   let sum = header.clientHeight + navbar.clientHeight + about.clientHeight + services.clientHeight + getInTouch.clientHeight + newsLetter.clientHeight
   scrollTo(0, sum)
}

buttonScrollDown.addEventListener('click', scrollDown)

//скролы для navbar
let homeBut = document.querySelector('.link-block__home')
let aboutBut = document.querySelector('.link-block__about')
let servicesBut = document.querySelector('.link-block__services')
let workBut = document.querySelector('.link-block__work')
let contactBut = document.querySelector('.link-block__contact')

//функции для скрола navbar
function scrollHome(){
   scrollTo(0,0)
}

function scrollAbout(){
   let sum = header.clientHeight + navbar.clientHeight
   scrollTo(0, sum)
}

function scrollServices(){
   let sum = header.clientHeight + navbar.clientHeight + about.clientHeight
   scrollTo(0, sum)
}

function scrollWork(){
   let sum = header.clientHeight + navbar.clientHeight + about.clientHeight + services.clientHeight
   scrollTo(0, sum)
}

function scrollContact(){
   let sum = header.clientHeight + navbar.clientHeight + about.clientHeight + services.clientHeight + getInTouch.clientHeight
   scrollTo(0, sum)
}

homeBut.addEventListener('click', scrollHome)
aboutBut.addEventListener('click', scrollAbout)
servicesBut.addEventListener('click', scrollServices)
workBut.addEventListener('click', scrollWork)
contactBut.addEventListener('click', scrollContact)