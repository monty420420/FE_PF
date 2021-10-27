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
  
  /*두번째 방법 기능 따로 추가해서 호출*/
  scrollIntoView(link); 
});

//스크롤이 내려갈수록 홈을 점점 더 투명하게
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

//스크롤내릴때 arrow up 보이게
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () =>{
 if (window.scrollY > homeHeight / 2){
   arrowUp.classList.add('visible');
 } else{
   arrowUp.classList.remove('visible');
 }
});

//arrow up button 다루기
arrowUp.addEventListener('click', () =>{
scrollIntoView('#home');
});

//Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const Projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) =>{
const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter; //숫자누를시 undefine되어서 부모노드도 추가
if (filter == null){
  return;
}
projectContainer.classList.add('ani-out');
setTimeout(() =>{
  projectContainer.classList.remove('ani-out');
},300);
Projects.forEach((project) => {
console.log(project.dataset.type);
if(filter ==='*' || filter === project.dataset.type){
  project.classList.remove('invisible');
} else {
  project.classList.add('invisible');
}
});

});


//스크롤이동기능만 따로저장
function scrollIntoView(link) {
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({behavior: 'smooth'});
}


