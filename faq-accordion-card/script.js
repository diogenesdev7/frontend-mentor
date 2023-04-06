const accordion_headers = document.querySelectorAll('.accordion-header')

accordion_headers.forEach((header) => {
    header.addEventListener('click', () => {
        const accordion_item = header.parentNode
        const accordion_content = header.nextElementSibling
        let isActive = accordion_content.classList.contains('active')

        const accordion_contents = document.querySelectorAll('.accordion-content')
        accordion_contents.forEach((content) => {
            content.classList.remove('active')
        })

        accordion_headers.forEach((h) => {
            h.classList.remove('accordion_checked')
        })


        if (isActive) {
            accordion_content.classList.remove('active')
        } else {
            accordion_content.classList.add('active')
            header.classList.add('accordion_checked')
        }


    })
})