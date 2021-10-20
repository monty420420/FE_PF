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

//버튼 클릭시 원하는 스크롤 위치로 이동하기
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) =>{  
   const target = event.target;
   const link =target.dataset.link;
   if(link == null){
       return;
   }
   console.log(event.target.dataset.link);
   const scrollTo = document.querySelector(link);
   scrollTo.scrollIntoView({behavior: 'smooth'});
});



