let body = document.querySelector('body')
let ball = document.querySelector('#ball')
let jon = document.querySelector('#jon')
let sorat = document.querySelector('#sorat')


// body.addEventListener('keydown' ,  (e)=> {
//     console.log(e);
// })

// window.addEventListener('load', () => {
//     ball.style.position = 'absolute';
//     ball.style.right = '10px';
//     ball.style.top = '50px';
// });

body.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
        ball.style.marginTop = '350px'
    }
})

body.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
        ball.style.marginTop = '20px'
    }
})

body.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        ball.style.marginRight = '85%'
    }
})

body.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        ball.style.marginRight = '20px'
    }
})

sorat.addEventListener('click', () => {
    let x = sorat.value
    if (x == 1) {
        ball.style.transitionDuration = '10s'
    }
    if (x == 2) {
        ball.style.transitionDuration = '7s'
    }
    if (x == 3) {
        ball.style.transitionDuration = '5s'
    }
    if (x == 4) {
        ball.style.transitionDuration = '3s'
    }
    if (x == 5) {
        ball.style.transitionDuration = '1s'
    }
})

let joon = jon.innerHTML = '5'

ball.addEventListener('click', () => {

})











// jon.innerHTML = 5
// let x = 1
// ball.addEventListener('click', () => {
//     jon.innerHTML -= 1
// })