const input = document.querySelector('input')
const result = document.querySelector('.result')
const notifyBtn = document.querySelector('.btn')

notifyBtn.addEventListener('click', ()=> {
    let isMatched = input.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)

    if (isMatched){
        result.innerHTML = "You will be notified as soon as we launch!!!"
        result.style.color = 'green'
        input.style.borderColor = 'green'
        input.style.borderWidth = '2px'
        
    }
    else if (input.value === '' || !isMatched){
        result.innerHTML = '"Whoops! It looks like you forgot to add your email"'
        result.style.color = 'red'
        input.style.borderColor = 'red'
        input.style.borderWidth = '1.2px'
    }
})