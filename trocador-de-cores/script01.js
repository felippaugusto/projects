// get tags in html
const textChanging = document.querySelector(".text-colors")
const colorOfBody = document.querySelector("body")
const button = document.querySelector("button")
const colors = [
    "green", "red", "blue", "gray", "purple"
]

console.log(colors.length)
// add colors and textColor
function colorChange() {
    let randomNumber = getRandomColor();

    colorOfBody.style.backgroundColor = colors[randomNumber];
    textChanging.textContent = colors[randomNumber]
}

// changing colors and text
function getRandomColor() {
    return Math.floor(Math.random() * colors.length)
}

// event of click
button.addEventListener("click", colorChange)
