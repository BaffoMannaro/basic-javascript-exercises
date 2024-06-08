/*
Fai in modo che la variabile numeroIniziale si veda a video (al posto di 'N')
Fai partire il countdown al click sul button
Al termine del countdown richiama la funzione sveglia()
*/

let numeroIniziale = 10;
const timerTag = document.getElementById("timer");
const buttonTag = document.querySelector("button");

timerTag.innerHTML = numeroIniziale;

buttonTag.addEventListener("click", countdown);

function countdown() {
	function count() {
		timerTag.innerHTML = numeroIniziale;
		numeroIniziale--;
		if (numeroIniziale < 0) {
			clearInterval(timerId);
            sveglia();
		}
	}
	const timerId = setInterval(count, 1000);
}

/*non c'è bisogno di modificare la funzione sveglia()*/
function sveglia() {
	const audio = document.querySelector("audio");
	audio.currentTime = 0.2;
	audio.play();
	document.getElementById("sveglia").style.display = "block";
	setTimeout(function () {
		location.reload();
	}, 4800);
}
