// normal mode 

const numOne = document.querySelector("#num_one")
const numTwo = document.querySelector("#num_two")
const add = document.querySelector("#add")
const subtract = document.querySelector("#subtract")
const multiply = document.querySelector("#multiply")
const divide = document.querySelector("#divide")
const answer = document.querySelector("#answer")

add.addEventListener("click", function (e) {
  e.preventDefault()
  return (answer.innerHTML = Number(numOne.value) + Number(numTwo.value))
})

subtract.addEventListener("click", function (e) {
  e.preventDefault()
  return (answer.innerHTML = Number(numOne.value) - Number(numTwo.value))
})

multiply.addEventListener("click", function (e) {
  e.preventDefault()
  return (answer.innerHTML = Number(numOne.value) * Number(numTwo.value))
})

divide.addEventListener("click", function (e) {
  e.preventDefault()
  return (answer.innerHTML = Number(numOne.value) / Number(numTwo.value))
})

// adventure mode
//incomplete

const num0 = document.querySelector(".zeroDiv")
const num1 = document.querySelector(".oneDiv")
const num2 = document.querySelector(".twoDiv")
const num3 = document.querySelector(".threeDiv")
const num4 = document.querySelector(".fourDiv")
const num5 = document.querySelector(".fiveDiv")
const num6 = document.querySelector(".sixDiv")
const num7 = document.querySelector(".sevenDiv")
const num8 = document.querySelector(".eightDiv")
const num9 = document.querySelector(".nineDiv")

const addAm = document.querySelector(".addDiv")
const subtractAm = document.querySelector(".subtractDiv")
const multiplyAm = document.querySelector(".multiplyDiv")
const divideAm = document.querySelector(".divideDiv")

const input = document.querySelector("#blankArea")


num0.addEventListener("click", function (e) {
  e.preventDefault()
  return (input.innerHTML = "0")
})

num1.addEventListener("click", function (e) {
  e.preventDefault()
  return (input.innerHTML = "1")
})

num2.addEventListener("click", function (e) {
  e.preventDefault()
  return (input.innerHTML = "2")
})

num3.addEventListener("click", function (e) {
  e.preventDefault()
  return (input.innerHTML = "3")
})

add.addEventListener("click" function (e) {
  e.preventDefault()
  return 
})
