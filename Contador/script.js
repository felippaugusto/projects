// set initial count
let count = 0;

// selector value and buttons
const value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")

btns.forEach(function(btn){
    btn.addEventListener("click", function(buttons){
        const styles = buttons.currentTarget.classList
        // aqui ele pega todas as classes no botão clicado

        if(styles.contains("decrease")) { // contém decrease? se contem ele diminui do count
            count--                  
        }                             
        else if(styles.contains("reset")){
            count = 0
        }
        else if(styles.contains("increase")){
            count++
        }
        value.textContent = count

        changingColors()
    })
})

function changingColors() {
    if(count < 0) {
        value.style.color = "red"
    }
    else if(count == 0){
        value.style.color = "blue"
    }
    else{
        value.style.color = "green"
    }
}


