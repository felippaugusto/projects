const html = document.querySelector("html")
const toggle = document.querySelector(".toggle")

toggle.addEventListener("click", function(){ 
    toggle.classList.toggle("active")
    html.classList.toggle("black")
})