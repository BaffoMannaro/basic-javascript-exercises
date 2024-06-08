/*
Usa l'array per gestire i colori in modo random.
Completa e usa le due funzioni già presenti nel codice
*/

const buttonColor = document.getElementById("colora");
const buttonInvert = document.getElementById("inverti");
const risultatoTag = document.getElementById("risultato");
const risultato = risultatoTag.innerHTML;
const colori = [
	"#F3A002",
	"#F24D98",
	"#813B7C",
	"#59D044",
	"#AC02F3",
	"#023BF3",
];

console.log(risultato.length);

buttonColor.addEventListener("click", coloraStringa);
buttonInvert.addEventListener("click", invertiStringa);

function coloraStringa() {
	let random = Math.floor(Math.random() * 6);
	risultatoTag.style.color = colori[random];
}

function invertiStringa() {
	let stringaInvertita = "";
	for (i = risultato.length - 1; i >= 0; i--) {
		stringaInvertita = stringaInvertita + risultato[i];
	}

	risultatoTag.innerHTML = stringaInvertita;
}
