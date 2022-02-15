const Modal = {
    open() {
        // Abrir modal
        // Adicionar a class active ao modal
        document.querySelector(".container-modal").classList.add('active')
    },
    close() {
        // Fechar o modal
        document.querySelector('.container-modal').classList.remove('active')
    }
} // responsável por adicionar a classe active ou retira-lá

window.onload = function () {
    const Buttonstart = document.getElementById("start");
    const ButtonReset = document.getElementById("reset"); 
    const ButtonStop = document.getElementById("stop");
    const AppendSeconds = document.getElementById("seconds");
    const AppendTens = document.getElementById("tens");
    const AppendHours = document.getElementById("hours");
    const close = document.getElementById("close");
    let hours = 00;
    let seconds = 01;
    let tens = 00;
    let interval;

    Buttonstart.onclick = function() {
       interval = setInterval(startTimer, 100);
       console.log(interval)
    }

    ButtonStop.onclick = function() {
        clearInterval(interval)
    }

    ButtonReset.onclick = function() {
        clearInterval(interval);
        tens = "00";
        seconds = "00";
        hours = "00";
        AppendTens.innerHTML = tens;
        AppendSeconds.innerHTML = seconds;
        AppendHours.innerHTML = hours
    }

    function startTimer() {
        tens++;

        if(tens <= 9){
            AppendTens.innerHTML = "0" + tens; // toda hora que os segundos chegarem a 9 ele reseta
        }

        if (tens > 9) {
            AppendTens.innerHTML = tens;
        }

        if (tens > 60) {
            console.log("seconds")
            seconds++; // toda vez que os segundos chegarem a 99 ele adiciona um minuto
            AppendSeconds.innerHTML = "0" + seconds; // aqui ele adiciona 0 + minuto 1 por exemplo
            tens = 0; // quando os segundos chegarem a 99 ele vai adicionar um minuto e vai resetar os segundos atribuindo esse 0 a eles
            AppendTens.innerHTML = "0" + 0; // quando chegarem a 99 segundos vai adicionar esse html
        }

        if(seconds > 9){
            AppendSeconds.innerHTML = seconds; // vai adicionar um minuto a esquerda 10 por exemplo
        }

        if(seconds >= 60){
            hours++
            tens = "00"
            seconds = "00"
            AppendSeconds.innerHTML = seconds
            AppendTens.innerHTML = tens
            AppendHours.innerHTML = "0" + hours
        }
        if(hours === 60){
            hours = "00"
            tens = "00"
            seconds = "00"
            AppendTens.innerHTML = tens
            AppendSeconds.innerHTML = seconds
            AppendHours.innerHTML = hours
            clearInterval(interval)

        }

}

    close.addEventListener("click", function() {
       
        clearInterval(interval)
        interval = setInterval(subtrationTimer, 100)
    })

    function subtrationTimer() {
        tens--

       if(tens <= 9){
           AppendTens.innerHTML = "0" + tens
       }

        if (tens < 0) {
            AppendTens.innerHTML = tens = 59
            seconds--
            AppendSeconds.innerHTML = "0" + seconds
            
        }

        if(tens > 9){
            AppendTens.innerHTML = tens
        }

        if(seconds < 0){
            hours--
            AppendHours.innerHTML = hours
            AppendSeconds.innerHTML = seconds = 59
        }
        
        if(seconds > 9){
            AppendSeconds.innerHTML = seconds; 
        }

        if(hours <= 9){
            AppendHours.innerHTML = "0" + hours
        }


        if(hours == 0 && seconds == 0 && tens == 0){
            AppendHours.innerHTML = "00"
            AppendTens.innerHTML = "00"
            AppendSeconds.innerHTML = "00"
            clearInterval(interval)

            modalFinished.classList.add("active")
        }
        if(hours < 0){
            hours = 59
            AppendHours.innerHTML = hours
        }

    }
    const modalFinished = document.querySelector(".container-modal-finished")
    const closeFinished = document.querySelector("#close-finished")

    closeFinished.addEventListener("click", function() {
        modalFinished.classList.remove("active")
    })
}





