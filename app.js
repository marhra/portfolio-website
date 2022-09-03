const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo')

// Display Mobile Menu
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

// Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('hightlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const projectsMenu = document.querySelector('#projects-page')
    const contactMenu = document.querySelector('#hcontact-page')
    let scrollPos = window.scrollY

    if(window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('hightlight')
        aboutMenu.classLight.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        aboutMenu.classLight.add('highlight')
        homeMenu.classList.remove('hightlight')
        projectsMenu.classList.remove('hightlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
        projectsMenu.classLight.add('highlight')
        aboutMenu.classList.remove('hightlight')
        return
    }
}
