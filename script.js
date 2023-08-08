let iphone14 = document.querySelector('.neplus')
let plus = document.querySelector('.plus')
let money = document.querySelector('.pul')
let text = document.querySelector('.text1')
let text1 = document.querySelector('.text2')
let colour = document.querySelector('.colour')
let colour2 = document.querySelector('.colour2')
let colour3 = document.querySelector('.colour3')
let colour4 = document.querySelector('.colour4')
let colour5 = document.querySelector('.colour5')
let img = document.querySelector('.img')
let span = document.querySelector('.color')
let main = document.querySelector('.divMain')

iphone14.onclick = () => {
    if(plus.classList.entries('active')){
        iphone14.classList.add('active')
        plus.classList.remove('active')
        money.innerHTML = 'From $799 or $33.29/mo. for 24 mo. trade‑in*'
    }
}

plus.onclick = () => {
    if(iphone14.classList.entries('active')){
        plus.classList.add('active')
        iphone14.classList.remove('active')
        money.innerHTML = 'From $899 or $37.45/mo. for 24 mo. trade‑in*'
    }
}

let clicked = 0
let thisIsElonMusk = ''

colour.onclick = () => {
    clicked++
    thisIsElonMusk = 'blue'
    img.src = './img/iphone-14-finish-select-202209-6-1inch-blue.jpg'
    span.innerHTML = 'blue'
}

colour2.onclick = () => {
    clicked++
    thisIsElonMusk = 'purple'
    img.src = './img/iphone-14-finish-select-202209-6-1inch-purple.jpg'
    span.innerHTML = 'purple'
}

colour3.onclick = () => {
    clicked++
    thisIsElonMusk = 'yellow'
    img.src = './img/iphone-14-finish-select-202209-6-1inch-yellow.jpg'
    span.innerHTML = 'yellow'
}

colour4.onclick = () => {
    clicked++
    thisIsElonMusk = 'midnight'
    img.src = './img/iphone-14-finish-select-202209-6-1inch-midnight.jpg'
    span.innerHTML = 'midnight'
}

colour5.onclick = () => {
    clicked++
    thisIsElonMusk = 'red'
    img.src= './img/iphone-14-finish-select-202209-6-1inch-product-red.jpg'
    span.innerHTML = 'red'
}

colour.onmouseover = () => {
    span.innerHTML = 'blue'
    if(clicked === 0){
        colour.onmouseout = () => {
            span.innerHTML = ''
        }
    }
    colour.onmouseout = () => {
        span.innerHTML = thisIsElonMusk
    }
}
colour2.onmouseover = () => {
    span.innerHTML = 'purple'
    if(clicked === 0){
        colour2.onmouseout = () => {
            span.innerHTML = ''
        }
    } 
    colour2.onmouseout = () => {
        span.innerHTML = thisIsElonMusk
    }
}
colour3.onmouseover = () => {
    span.innerHTML = 'yellow'
    if(clicked === 0){
        colour3.onmouseout = () => {
            span.innerHTML = ''
        }
    }
    colour3.onmouseout = () => {
        span.innerHTML = thisIsElonMusk
    }
}
colour4.onmouseover = () => {
    span.innerHTML = 'midnight'
    if(clicked === 0){
        colour4.onmouseout = () => {
            span.innerHTML = ''
        }
    }
    colour4.onmouseout = () => {
        span.innerHTML = thisIsElonMusk
    }
}
colour5.onmouseover = () => {
    span.innerHTML = 'red'
    if(clicked === 0){
        colour5.onmouseout = () => {
            span.innerHTML = ''
        }
    }
    colour5.onmouseout = () => {
        span.innerHTML = thisIsElonMusk
    }
}

console.log(clicked);