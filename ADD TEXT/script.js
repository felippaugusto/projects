const alert = document.querySelector(".alert")
// peguei o alerta
const form = document.querySelector(".form-texts")
// peguei o input inteiro
const inputTitle = document.querySelector("#title")
// peguei o input onde o usuário irá escrever o título do texto
const inputText = document.querySelector("#text")
// peguei o input onde o usuário irá escrever o texto
const buttonSubmit = document.querySelector(".button-submit")
// peguei o botão de enviar o formulário
const list = document.querySelector(".text-list")
// peguei a lista onde vai os textos adicionados
const clearItemsList = document.querySelector(".clear-items")
// botão que limpa todos os itens
const containerList = document.querySelector(".container-list")

// edit item
let editFlag = false;
let editElementText;
let editElementTitle;

// edit textModal
let textModal;

window.addEventListener("DOMContentLoaded", function() {
    inputText.value = "TITLE"
    inputTitle.value = "TEXT"
    clearItemsList.style.visibility = "hidden"
})

clearItemsList.addEventListener("click", clearItems)


form.addEventListener("submit", addText)

function addText(e) {
    e.preventDefault()
    if(list.children.length >= 0){
        clearItemsList.style.visibility = "visible"
    }

    if(inputText.value && inputTitle.value && !editFlag){
    const valueText = inputText.value
    const title = inputTitle.value
    const article = document.createElement("article")
    article.classList.add("article-item")

    article.innerHTML = `<h1 id="title-list">${title}</h1>

    <p class="text">
       ${valueText}
    </p>

    <div class="container-buttons-list">
        <button class="edit format-buttons hover-buttons-list">
            <p>Edit</p> 
        </button>
        <button class="clear-item format-buttons hover-buttons-list">
            <p>Clear item</p>
        </button>
    </div>
    <hr>`

    list.appendChild(article)
    inputText.value = ""
    inputTitle.value = ""

    const editButton = article.querySelector(".edit")
    const clearButton = article.querySelector(".clear-item")
    const buttonYes = document.querySelector(".yes")

    clearButton.addEventListener("click", Modal.open)
    textModal = "Are you sure you want to delete this item?"

    editButton.addEventListener("click", editItem)
    clearButton.addEventListener("click", getClearButton)
    buttonYes.addEventListener("click", clearItem)

    alertSucessfulOrDanger("text add sucessful", "success")
    }
    else if(!inputText.value || !inputTitle.value && !editFlag){
        alertSucessfulOrDanger("please fill in the text and title", "danger")
    }
    else if(editFlag) {
        editElementText.textContent = inputText.value
        editElementTitle.textContent = inputTitle.value

        alertSucessfulOrDanger("item successfully modified", "edit")

        inputText.value = ""
        inputTitle.value = ""
        editFlag = false
        buttonSubmit.textContent = "Enviar"
    }
}

function alertSucessfulOrDanger(text, actionClass){
    alert.textContent = `${text}`
    alert.classList.add(`${actionClass}`)

    setTimeout(function() {
        alert.textContent = ""
        alert.classList.remove(`${actionClass}`)
    }, 1500)
}

function editItem(e){
    editElementText = e.currentTarget.parentNode.previousElementSibling

    editElementTitle = e.currentTarget.parentNode.previousElementSibling.previousElementSibling
    // se pegar o previousSibling ele conta os espaços juntos

    inputText.value = `${editElementText.textContent}`
    inputTitle.value = editElementTitle.textContent

    buttonSubmit.textContent = "Edit"

    editFlag = true
}
const Modal = {
    open(){
        const windowFloat = document.querySelector(".window-float")
        const textElementModal = document.querySelector("#text-modal")
        
        windowFloat.classList.add("active")
        textElementModal.innerHTML = `${textModal}`
    },
    close(){
        const windowFloat = document.querySelector(".window-float")

        windowFloat.classList.remove("active")
    }
}

let element;
function getClearButton(e){
    element = e.currentTarget.parentNode.parentNode
}

function clearItem(){
    Modal.close()
    list.removeChild(element)
    alertSucessfulOrDanger("item removed sucessfully", "danger")
    if(list.children.length === 0){
        clearItemsList.style.visibility = "hidden"
    }
}
// remove o item

function clearItems() {
    list.innerHTML = ""
    clearItemsList.style.visibility = "hidden"

   alertSucessfulOrDanger("items removed successfully", "danger")
}
// remove todos os itens
