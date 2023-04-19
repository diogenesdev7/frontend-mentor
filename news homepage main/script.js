const mobileIcon = document.querySelector('.mobile-icon')
const nav = document.querySelector('nav')

mobileIcon.addEventListener('click', () => {
    nav.classList.toggle('mostra')
})
