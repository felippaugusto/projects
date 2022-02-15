// create a count
let count = 0;

// get the value
const value = document.querySelector("#value")

// get the buttons
const increase = document.querySelector(".increase")
const decrease = document.querySelector(".decrease")
const reset = document.querySelector(".reset")

// eventListener for the buttons
increase.addEventListener("click", increaseValue)
decrease.addEventListener("click", decreaseValue)
reset.addEventListener("click", resetValue)


// changing value of span
function increaseValue() {
    count++
    value.textContent = count
    changingColors()
}

function decreaseValue() {
    count--
    value.textContent = count
    changingColors()
}

function resetValue() {
    count = 0
    value.textContent = count
    changingColors()
}

// changing color the value
function changingColors() {
    if(count < 0) {
        value.style.color = "red"
    }
    else if(count == 0) {
        value.style.color = "blue"
    }
    else{
        value.style.color = "green"
    }
}