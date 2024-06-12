let hamburger = document.getElementById("hamburger");
let isNavActive = false;

hamburger.addEventListener('click', function(){
    let nav = document.getElementById('nav');
    nav.classList.toggle("mobileNav-active");
    if (isNavActive == false){
        document.getElementById("hamburger-icon").src = "images/icon-close.svg";
        isNavActive = true;
    }
    else{
        document.getElementById("hamburger-icon").src = "images/icon-hamburger.svg";
        isNavActive = false;
    }
    
})