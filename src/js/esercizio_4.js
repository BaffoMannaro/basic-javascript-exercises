/*
Fai in modo che la variabile numeroIniziale si veda a video (al posto di 'N')
Fai partire il countdown al click sul button
Al termine del countdown richiama la funzione sveglia()
*/

let numeroIniziale = 10;
const timerTag = document.getElementById("timer");
const buttonTag = document.querySelector("button");
let timerId = null; // Aggiungi una variabile per controllare il timer

timerTag.innerHTML = numeroIniziale;

buttonTag.addEventListener("click", countdown);

function countdown() {
    // Disabilita il pulsante per evitare ulteriori click
    buttonTag.disabled = true;
		buttonTag.classList.add("disabled");

    function count() {
        timerTag.innerHTML = numeroIniziale;
        numeroIniziale--;
        if (numeroIniziale < 0) {
            clearInterval(timerId);
            timerId = null; // Resetta il timerId
            sveglia();
        }
    }

    // Avvia il timer solo se non è già in esecuzione
    if (!timerId) {
        timerId = setInterval(count, 1000);
    }
}

/* non c'è bisogno di modificare la funzione sveglia() */
function sveglia() {
    const audio = document.querySelector("audio");
    audio.currentTime = 0.2;
    audio.play();
    document.getElementById("sveglia").style.display = "block";
    setTimeout(function () {
        location.reload();
    }, 4800);
}