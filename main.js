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

//navbar버튼 클릭시 원하는 스크롤 위치로 이동하기
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) =>{  
   const target = event.target;
   const link = target.dataset.link;
   if(link == null){
       return;
   }
   /*1번째 방법*/
   /*console.log(event.target.dataset.link);*/
   /*const scrollTo = document.querySelector(link);
   scrollTo.scrollIntoView({behavior: 'smooth'});*/
   
   /*두번째 방법*/
   scrollIntoView(link); 
});

//home의 contact me 클릭시 해당위치로 이동하기
const homeContact = document.querySelector('.home__contact');
homeContact.addEventListener('click',(event) =>{
  const target = event.target;
  const link = target.dataset.link;
  if(link == null){
    return;
  }
  /*1번째 방법*/
  /*console.log(event.target.dataset.link);*/
  /*const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({behavior: 'smooth'});*/
  
  /*두번째 방법*/
  scrollIntoView(link); 
});

//스크롤이 내려갈수록 홈을 점점 더 투명하게
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
  home.style.opacity = 1 - window.scrollY / homeHeight;
});









//스크롤이동기능만 따로저장
function scrollIntoView(link) {
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({behavior: 'smooth'});
}


