const title = document.querySelector('.title')
const advice = document.querySelector('.advice')
const generator = document.querySelector('.generator')

generator.addEventListener('click', () => {
    getAdvice()
})

const getAdvice = () => {
    const url = 'https://api.adviceslip.com/advice'

    fetch(url)
        .then(res => res.json())
        .then(res => {
            title.innerHTML = `Advice #${res.slip.id}`
            advice.innerHTML = res.slip.advice
        })
}