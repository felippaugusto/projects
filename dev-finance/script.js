// get items
const form = document.querySelector(".form")
const btnSubmit = document.querySelector(".submit")
const alert = document.querySelector(".alert")
const inputName = document.querySelector("#name")
const inputValue = document.querySelector("#value")
const inputData = document.querySelector("#data")
const tbody = document.querySelector("#tbody")
const elementIncomes = document.querySelector(".incomes")
const elementExpenses = document.querySelector(".expenses")
const elementResult = document.querySelector(".result")
const clearItems = document.querySelector(".clear-items")

let editFlag = false;
let editName;
let editValue;

window.addEventListener("DOMContentLoaded", function() {
    clearItems.innerHTML = ""
    elementResult.firstElementChild.firstElementChild.innerHTML = `R$ 0.00`
    elementIncomes.firstElementChild.firstElementChild.innerHTML = `R$ 0.00`
    elementExpenses.firstElementChild.firstElementChild.innerHTML = `R$ 0.00`
})

form.addEventListener("submit", function(e) {
    e.preventDefault()

    if(inputName.value && inputData.value && inputValue.value && !editFlag && isNaN(inputName.value)){
        clearItems.innerHTML = "Clear Items"

        const tr = document.createElement("tr")

        tr.innerHTML = `<td>${inputName.value}</td>
                        <td>R$ ${inputValue.value}, 00</td>
                        <td>${inputData.value}</td>`
        tbody.appendChild(tr)

        addIncomes()
        addExpensives()
        addResult()
        alertSuccessfulOrDanger("Sent with success", "successful")

        inputName.value = ""
        inputValue.value = ""
        inputData.value = ""
    }

    else if(!inputName.value || !inputValue.value || !inputData.value){
        alertSuccessfulOrDanger("please complete all entries", "danger")
    }

    else if(!isNaN(inputName.value)){
        alertSuccessfulOrDanger("please don't use numbers in your name", "danger")
        inputName.value = ""
    }
})

let incomes = 0
let expenses = 0
let resultIncomesExpense = 0

function addIncomes() {
    const ContentValue = Number(inputValue.value)
    if(inputValue.value >= 0){
        incomes += ContentValue

        elementIncomes.firstElementChild.firstElementChild.innerHTML = `R$ ${incomes.toFixed(2)}`
    }
}

function addExpensives() {
    const ContentValue = Number(inputValue.value)
    if(inputValue.value <= 0){
        expenses += ContentValue

        elementExpenses.firstElementChild.firstElementChild.innerHTML = `R$ ${expenses.toFixed(2)}`

    }
}

function addResult() {
    resultIncomesExpense = incomes + expenses
    
    elementResult.firstElementChild.firstElementChild.innerHTML = `R$ ${resultIncomesExpense.toFixed(2)}`
}

function alertSuccessfulOrDanger(text, value) {
    alert.firstElementChild.innerHTML = text
    alert.classList.add(value)

    setTimeout(function() {
        alert.firstElementChild.innerHTML = ""
        alert.classList.remove(value)
    }, 1500)
}

clearItems.addEventListener("click", function() {
    clearAllItems()
    alertSuccessfulOrDanger("deleted items", "danger")
})

function clearAllItems() {
    tbody.innerHTML = ""
    incomes = 0
    expenses = 0
    addIncomes()
    addExpensives()
    addResult()
    clearItems.innerHTML = ""
}






