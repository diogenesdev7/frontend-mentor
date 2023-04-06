const btnEmail = document.querySelector('#btn-email')
const error = document.querySelector('.error')
const email = document.querySelector('#email')
const errorimg = document.querySelector('.errorimg')


btnEmail.addEventListener('click', (evt) => {
    let estadoValidacao = email.validity

    if (email.validity.valueMissing) {
        email.setCustomValidity('Please provide us your email')
        errorimg.style.display = 'block'
    }

    else {
        errorimg.style.display = 'none'
        error.style.color = '#55ee77'
        email.setCustomValidity('Thank for subscribing to our newsletter')
    }

    if (email.validity.typeMismatch) {
        email.setCustomValidity('Please provide us your valid email')
        errorimg.style.display = 'block'
    }





    error.innerHTML = email.validationMessage
    evt.preventDefault()
})