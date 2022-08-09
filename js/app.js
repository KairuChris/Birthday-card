let img = document.getElementsByClassName('img-content')[0]
let button = document.getElementById('button')
let message = document.getElementsByClassName('message')[0]
let h1 = document.getElementsByClassName('h1')[0]
let h4 = document.getElementsByClassName('h4')[0]

img.addEventListener('click',()=>{
    img.classList.toggle('active')
    message.classList.toggle('active')
    h1.classList.toggle('active')
    h4.classList.toggle('active')
})