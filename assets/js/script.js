let menuMobile = document.querySelector('.menu-mobile')
let iconOpen = document.querySelector('.icon-open')
let body = document.querySelector('body')

const menuShow = () => {
    if(menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
        icon.src = 'assets/images/icon-menu.svg'
    } else {
        menuMobile.classList.add('open')
        icon.src = 'assets/images/icon-menu-close.svg'
        body.style.background = '#000'
    }
}