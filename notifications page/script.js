const btnMark = document.querySelector('button')
const divNotifications = document.querySelectorAll('.notification')
const count = document.querySelector('.title span')
let counter = 3

btnMark.addEventListener('click', () => {
    divNotifications.forEach((div) => {
        if (div.classList.contains('not-read')) {
            div.classList.remove('not-read')
        }

        count.innerHTML = 0
    })
})

divNotifications.forEach((div) => {
    div.addEventListener('click', () => {
        div.classList.remove('not-read')
        if (counter > 0) {
            counter --
            count.innerHTML = counter
        }
    })
})
