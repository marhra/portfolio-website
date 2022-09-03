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

