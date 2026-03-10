// simple fade-in animation on scroll

const elements = document.querySelectorAll("section")

window.addEventListener("scroll", () => {

elements.forEach(el => {

const position = el.getBoundingClientRect().top
const screenPosition = window.innerHeight / 1.2

if(position < screenPosition){
el.classList.add("show")
}

})

})