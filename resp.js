burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')



burger.addEventLister('click', ()=>{
    rightNav.classList.toggle('v-class-resp');
    nav-List.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})