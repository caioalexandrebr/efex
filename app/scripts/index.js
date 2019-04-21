import '../styles/main.scss'

if (process.env.NODE_ENV !== 'production') {
  require('../index.pug')
}

var $ = document.querySelector.bind(document)
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

var callFuncLft
var callFuncRgt

var clrTimeouts = function () {
  clearTimeout(callFuncRgt)
  clearTimeout(callFuncLft)
}

var callSpinRight = function () {
  $('#carrossel').classList = 'carousel spin-right'
  $('.fill').classList = 'fill move-bar-right'
  callFuncLft = setTimeout(function () {
    callSpinLeft()
  }, 5000)
}

var callSpinLeft = function () {
  $('#carrossel').classList = 'carousel spin-left'
  $('.fill').classList = 'fill move-bar-left'
  callFuncRgt = setTimeout(function () {
    callSpinRight()
  }, 5000)
}

setTimeout(function () {
  callSpinRight()
}, 5000)

$('.num2').addEventListener('click', () => {
  clrTimeouts()
  callSpinRight()
})

$('.num1').addEventListener('click', () => {
  clrTimeouts()
  callSpinLeft()
})
