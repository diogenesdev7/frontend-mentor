const btn_enviar = document.querySelector('#btn-enviar')
const email = document.querySelector('#email')
const error = document.querySelector('.error')
const success = document.querySelector('.success')

btn_enviar.addEventListener('click', (evt) => {
    if (email.validity.valueMissing) {
        email.setCustomValidity('Por favor informe seu email')
        error.innerHTML = email.validationMessage
        error.style.color = 'red'
    }
    
    
    else if (email.validity.typeMismatch) {
        email.setCustomValidity('Por favor informe um email válido')
        error.innerHTML = email.validationMessage
        error.style.color = 'red'
    }
    
    else {
        success.style.display = 'block'
        error.style.display = 'none'
    }
    

    
    evt.preventDefault()
})