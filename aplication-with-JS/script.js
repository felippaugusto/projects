// get tags
const currentBalance = document.querySelector(".current-balance")
const incomes = document.querySelector("#incomes-span")
const expenses = document.querySelector("#expenses-span")
const addTransections = document.querySelector("#add-transections")
const form = document.querySelector("#form")
const inputName = document.querySelector("#name")
const inputValue = document.querySelector("#value")
const buttonSubmit = document.querySelector(".button-submit")
const clearElements = document.querySelector(".clear-items")
let format;

window.addEventListener("DOMContentLoaded", function() {
    clearElements.innerHTML = ""
})

// submit form
form.addEventListener("submit", function(e) {
    e.preventDefault()
    if(inputName.value && inputValue.value && !isNaN(inputValue.value)){
    const value = Number(inputValue.value)
    format = value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

        const tr = document.createElement("tr")
        tr.innerHTML = `<td>${inputName.value}</td>
                        <td>${format}</td>`
    addTransections.appendChild(tr)

    incomesAndExpensesValues()
    resultIncomesAndExpenses()

    inputName.value = ""
    inputValue.value = ""
    clearElements.innerHTML = "Clear Items"

    }
})

// functions addIncomesAndExpenses = results
let totalIncomes = 0;
let totalExpenses = 0;
function incomesAndExpensesValues() {
    if(inputValue.value >= 0){
        totalIncomes += Number(inputValue.value)

        format = totalIncomes.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

        incomes.innerHTML = `${format}`
    }
    else if(inputValue.value <= 0){
        totalExpenses += Number(inputValue.value)

        format = totalExpenses.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

        expenses.innerHTML = `${format}`
    }
}

function resultIncomesAndExpenses() {
    let result = totalIncomes + totalExpenses

    format = result.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

    currentBalance.innerHTML = format
    if(result > 0){
        currentBalance.style.color = "green"
    }
    else if(result == 0){
        currentBalance.style.color = "#DCDCDC"
    }
    else{
        currentBalance.style.color =  "#FF0000"
    }
}

// starts clear items
const containerModal = document.querySelector(".container-modal")
const buttonCancelModal = document.querySelector(".button-cancel-modal")
const buttonClearItemsModal = document.querySelector(".button-clear-items-modal")
clearElements.addEventListener("click", function() {
    containerModal.classList.add("active")
})
buttonCancelModal.addEventListener("click", function() {
    containerModal.classList.remove("active")
})
buttonClearItemsModal.addEventListener("click", function() {
    containerModal.classList.remove("active")
    clearItems()
})

function clearItems() {
    addTransections.innerHTML = ""
    totalIncomes = 0
    totalExpenses = 0
    incomesAndExpensesValues()
    resultIncomesAndExpenses()
    expenses.innerHTML = "R$ 0.00"

    clearElements.innerHTML = ""
}
// ends clear items