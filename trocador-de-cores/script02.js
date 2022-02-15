const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
// aqui ele criou uma constante que tem o nome de hex e está recebendo os valores hexadecimais
const button = document.querySelector("button")
// está recebendo o botão
const textColors = document.querySelector(".text-colors")
// está pegando o parágrafo onde vai o nome da cor
const body = document.querySelector("body")
// está pegando o body para colocar cor nele

function changingColors() {
    let hexColor = "#"
    for(i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()];
    } // vai adicionar 6 vezes

    textColors.textContent = hexColor;
    body.style.backgroundColor = hexColor;
    button.style.backgroundColor = hexColor;
}

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}

button.addEventListener("click", changingColors)
// quando eu clicar no botão, ele vai executar a função changingColors
