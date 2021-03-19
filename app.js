const red = document.getElementById('r')
const green = document.getElementById('g')
const blue = document.getElementById('b')
const color = document.getElementById('color')
const screen = document.querySelector('.screen')

red.addEventListener('input', getValue)
green.addEventListener('input', getValue)
blue.addEventListener('input', getValue)

function getValue() {
    let redValue = red.value
    let greenValue = green.value
    let blueValue = blue.value
    screen.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`
    color.style.color = `rgba(${255-redValue}, ${255-greenValue}, ${255-blueValue}, 0.7)`
    color.innerText = `rgb(${ redValue }, ${ greenValue }, ${ blueValue })`
}


