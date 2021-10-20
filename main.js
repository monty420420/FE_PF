'use strict';

//스크롤이 상단에 있을시 navbar투명 상단에서 내려올시 색상
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () =>{
if(window.scrollY > navbarHeight){
  navbar.classList.add('navbar--dark');
}else{
    navbar.classList.remove('navbar--dark');
}
});