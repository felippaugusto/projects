const btnmobile = document.getElementById("btn-mobile")

btnmobile.addEventListener("click", toggleMenu)
btnmobile.addEventListener("touchstart", toggleMenu)
// quando eu clicar no botão tanto no pc tanto no celular, ele irá executar a função toggleMenu

function toggleMenu(event) {
    if (event.type === "touchstart"){
        event.preventDefault()
    }
    // aqui se o evento for de toque na tela, ele irá prever o evento de click e não irá executar o evento de click, apenas o de touch, pois também tem um evento de click

    const nav = document.getElementById("nav")
    nav.classList.toggle("active")
    // aqui ele adiciona e retira a classe active do elemento nav

    const active = nav.classList.contains('active')
    // aqui ele verifica se o nav contém uma classe chamada active
    event.currentTarget.setAttribute("aria-expend", active)
    // se tiver a classe active ele irá adicionar true ao atributo aria-expend do HTML

    if(active){
        event.currentTarget.setAttribute("aria-label", "Fechar Menu")
    }
    // se active for true ele irá adicionar ao aria label o conteúdo fechar menu
    else {
        event.currentTarget.setAttribute("aria-label", "Abrir Menu")
    }
    // se for falso abrir menu
}