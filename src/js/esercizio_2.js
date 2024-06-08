/*
crea la scacchiera con un ciclo for.
Se hai bisogno modifica il file css a tuo piacimento
*/

/*METODO 1 : mi sembrava poco elegante e non molto robusto*/

/*
const scacchieraTag = document.getElementById("scacchiera");
const B = "<div class='black'></div>";
const W = "<div class='white'></div>";

for (let i = 1; i < 9; i++) {
	if (i % 2 == 0) {
		scacchieraTag.innerHTML += W+B+W+B+W+B+W+B;
	} else {
		scacchieraTag.innerHTML += B+W+B+W+B+W+B+W;
	}
}
*/

/* METODO 2 */

const scacchieraTag = document.getElementById("scacchiera");
const whiteDiv = "<div class='white'></div>";
const blackDiv = "<div class='black'></div>";

for (let j = 0; j < 8; j++) {
	if (j % 2 == 0) {
		riga1();
	} else {
		riga2();
	}
}

function riga1() {
	for (let i = 0; i < 8; i++) {
		if (i % 2 == 0) {
			white();
		} else {
			black();
		}
	}
}

function riga2() {
	for (let i = 0; i < 8; i++) {
		if (i % 2 == 0) {
			black();
		} else {
			white();
		}
	}
}

function white() {
	scacchieraTag.innerHTML += whiteDiv;
}

function black() {
	scacchieraTag.innerHTML += blackDiv;
}
