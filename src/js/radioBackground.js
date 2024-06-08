var red = document.getElementById("red");
var green = document.getElementById("green");
var blue = document.getElementById("blue");

red.onchange = function(){
    document.body.style.backgroundColor = "red";
}

green.onchange = function(){
    document.body.style.backgroundColor = "green";
}

blue.onchange = function(){
    document.body.style.backgroundColor = "blue";
}


var reset = document.getElementById("reset");

reset.onclick = function(){
    document.body.style.backgroundColor = "";
}


var bianco = document.getElementById("bianco");
var arancios = document.getElementById("arancios");
var aranciop = document.getElementById("aranciop");
var rossop = document.getElementById("rossop");
var blueb = document.getElementById("blueb");
var bluei = document.getElementById("bluei");
var bluev = document.getElementById("bluev");
var verder = document.getElementById("verder");
var verdef = document.getElementById("verdef");
var rose = document.getElementById("rose");
var nero = document.getElementById("nero");

bianco.onchange = cambioColore;
arancios.onchange = cambioColore;
aranciop.onchange = cambioColore;
rossop.onchange = cambioColore;
blueb.onchange = cambioColore;
bluei.onchange = cambioColore;
bluev.onchange = cambioColore;
verder.onchange = cambioColore;
verdef.onchange = cambioColore;
rose.onchange = cambioColore;
nero.onchange = cambioColore;

function cambioColore(event){
    var cliccato = event.target;
    var colore = cliccato.value;
    document.body.style.backgroundColor = colore; 

}

function toggleHeight() {
    var dolceVitaTag = document.getElementById('dolce-vita');
    dolceVitaTag.style.height = (dolceVitaTag.offsetHeight === 550) ? '95px' : '550px';
    //Se l'altezza è 200px, la riduce a 100px, altrimenti la riporta a 200px.
}
