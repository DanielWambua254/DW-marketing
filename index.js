const menuBtn  = document.querySelector(".menu-btn");
const navMenu  = document.querySelector(".menu");
const scrollUp  = document.querySelector(".scroll-up-btn");

// click listeners for small screen size menu. The virtical one 
document.querySelectorAll(".menu").forEach(n => n.addEventListener("click", () => {
    navMenu.classList.remove("active");
}))

// works for three bars on top right when using small display screen
function clickFunction() {
    navMenu.classList.toggle("active");
}

//scroll functions for sticky nav bar and the scroll to top button 
function myFunction() {
    if (window.scrollY >= 300) {
      scrollUp.classList.add("show");
    } else {
      scrollUp.classList.remove("show");
    }
}

//the scroll to top button function
function scrollUpDoc() {
    window.scrollTo(0,0);
}