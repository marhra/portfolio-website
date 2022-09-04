const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo')

// Display Mobile Menu
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

// Modal window with thank you message
// const modal1 = document.getElementById('modal1');
// const openBtn1 = document.getElementById('openBtn1');
// const closeBtn1 = document.getElementById('closeBtn1');

// openBtn1.addEventListener('click', openModal1);

// closeBtn1.addEventListener('click', closeModal1);

// function closeModal1() {
//    modal1.style.display = 'none'
// }

// function openModal1() {
//     modal1.style.display = 'block'
//  }

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 100;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);
