const submit = document.querySelector('#submit')
const firstName = document.querySelector('#first-name')
const lastName = document.querySelector('#last-name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const error = document.querySelectorAll('form .error')
const input = document.querySelectorAll('input')
const success = document.querySelector('.success')

input.forEach((input) => {
    input.addEventListener('click', (evt) => {
        const errorFilho = evt.target.nextElementSibling

        errorFilho.innerHTML = ' '
    })
})

submit.addEventListener('click', (evt) => {

    if (firstName.validity.valueMissing) {
        firstName.setCustomValidity('Por favor preencha com seu primeiro nome.')
        error[0].innerHTML = firstName.validationMessage
    }

    if (lastName.validity.valueMissing) {
        lastName.setCustomValidity('Por favor preencha com seu sobrenome.')
        error[1].innerHTML = lastName.validationMessage
    }

    if (email.validity.valueMissing) {
        email.setCustomValidity('Por favor preencha com seu email')
        error[2].innerHTML = email.validationMessage
    }

    if (email.validity.typeMismatch) {
        email.setCustomValidity('Por favor digite um email válido com @.')
        error[2].innerHTML = email.validationMessage
    }

    if (password.validity.valueMissing) {
        password.setCustomValidity('Por favor preencha com sua senha')
        error[3].innerHTML = password.validationMessage
    }


    else {
        success.style.display = 'block'
    }
    
    evt.preventDefault()
})
