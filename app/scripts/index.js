import '../styles/main.scss'

if (process.env.NODE_ENV !== 'production') {
  require('../index.pug')
}

const menu = document.querySelector('#toggle')
const menuItems = document.querySelector('#overlay')
const menuContainer = document.querySelector('.menu-container')
const menuIcon = document.querySelector('i')

function toggleMenu (e) {
  menuItems.classList.toggle('open')
  menuContainer.classList.toggle('full-menu')
  menuIcon.classList.toggle('fa-bars')
  menuIcon.classList.add('fa-times')
  e.preventDefault()
}

menu.addEventListener('click', toggleMenu, false)

var callSpinRight = function () {
  document.querySelector('#carrossel').classList = 'carousel spin-right'
  document.querySelector('.fill').classList = 'fill move-bar-right'
  setTimeout(function () {
    callSpinLeft()
  }, 5000)
}

var callSpinLeft = function () {
  document.querySelector('#carrossel').classList = 'carousel spin-left'
  document.querySelector('.fill').classList = 'fill move-bar-left'
  setTimeout(function () {
    callSpinRight()
  }, 5000)
}

setTimeout(function () {
  callSpinRight()
}, 5000)

document.querySelector('.num2').addEventListener('click', () => {
  callSpinRight()
})

document.querySelector('.num1').addEventListener('click', () => {
  callSpinLeft()
})
