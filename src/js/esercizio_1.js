/*
inverti i colori dei div senza modificare la funzione aggiornaColore()
*/

let color1 = "#813B7C";
let color2 = "#59D044";

const ButtonTag = document.querySelector("button");

document.addEventListener("DOMContentLoaded", function () {
	aggiornaColore();
});

ButtonTag.onclick = invertiColore;

function invertiColore() {
	let colorpass = color1;
	color1 = color2;
	color2 = colorpass;
	aggiornaColore();
}

/*NON MODIFICARE QUESTA FUNZIONE*/
function aggiornaColore() {
	document.querySelector("#uno").style.backgroundColor = color1;
	document.querySelector("#due").style.backgroundColor = color2;
}
