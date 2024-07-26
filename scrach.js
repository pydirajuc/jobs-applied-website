let navbar = document.querySelector('.header.flex.navbar');


var menubtn =document.getElementById('menu-btn')
menubtn.addEventListener('click',()=>{
    var mynav = document.getElementsByClassName("navbar")[0]
    mynav.classList.toggle("active")
   
})