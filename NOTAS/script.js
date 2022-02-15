const noteOne = document.querySelector("#noteOne")
const noteTwo = document.querySelector("#noteTwo")
const noteThree = document.querySelector("#noteThree")
const textContent = document.querySelector(".content-text")
const form = document.querySelector(".form")


form.addEventListener("submit", function(e) {
    e.preventDefault()

    sumOfNotes()
    ExistNumber()
    limiteOfNumers()
})

function ExistNumber() {
    const emptyText = document.querySelector(".content-text2")
    const numberOne = Number(noteOne.value)
    const numberTwo = Number(noteTwo.value)
    const numberThree = Number(noteThree.value)

    if(numberOne == "" || numberTwo == "" || numberThree == ""){
        textContent.innerHTML = ""
        emptyText.innerHTML = "Complete as três notas por favor!"
    }
    else if(numberOne < 0 || numberTwo < 0 || numberThree < 0){
        textContent.innerHTML = ""
        emptyText.innerHTML = "Não coloque nota menor que 0!"
    }
    else {
        emptyText.innerHTML = ""
    }
}


function sumOfNotes() {
    const numberOne = Number(noteOne.value)
    const numberTwo = Number(noteTwo.value)
    const numberThree = Number(noteThree.value)
    textContent.innerHTML = ""
    let aprovadeOrReprovade;
    let media;
    media = (numberOne + numberTwo + numberThree) / 3

    if(media >= 60) {
        aprovadeOrReprovade = "Aprovado!"
    }
    else if(media < 60){
        aprovadeOrReprovade = "Reprovado!"
    }
    textContent.innerHTML = `A média final do aluno é: ${media.toFixed(1)}. ${aprovadeOrReprovade}!!`
    
    
}

function limiteOfNumers() {
    const emptyText = document.querySelector(".content-text2")
    const numberOne = Number(noteOne.value)
    const numberTwo = Number(noteTwo.value)
    const numberThree = Number(noteThree.value)
    if(numberOne > 100 || numberTwo > 100 || numberThree > 100){
        textContent.innerHTML = ""
        emptyText.innerHTML = "Não ultrapasse o limite da nota 100 por favor!"
    }
}

