var buttonTag = document.getElementById("inizia");
var youTag = document.getElementById("you");
var sceltaTag = document.getElementById("scelta");
var fogliaTag = document.querySelector("ul#scelta li:nth-child(1)");
var forbiceTag = document.querySelector("ul#scelta li:nth-child(2)");
var sassoTag = document.querySelector("ul#scelta li:nth-child(3)");
var cpuTag = document.getElementById("cpu");
var risultatoTag = document.getElementById("risultato");
var punteggioYouTag = document.getElementById("punteggioYou");
var punteggioCpuTag = document.getElementById("punteggioCpu");

buttonTag.addEventListener("click",start);

    function start() {    
        sceltaTag.style.display = "block";
        sceltaTag.style.opacity = "1";
        sceltaTag.style.backgroundImage = "none";
        sceltaTag.style.backgroundRepeat = "no-repeat";            
        sceltaTag.style.backgroundSize = "contain";       
        sceltaTag.style.backgroundPosition = "center";
        risultatoTag.style.display = "none";
        cpuTag.style.backgroundImage = "none";  
        cpuTag.style.backgroundRepeat = "no-repeat";            
        cpuTag.style.backgroundSize = "contain";
        cpuTag.style.backgroundPosition = "center";
        cpuTag.style.backgroundSize = "35%";
        youTag.style.backgroundImage = "none";
        youTag.style.backgroundRepeat = "no-repeat";            
        youTag.style.backgroundSize = "contain";
        youTag.style.backgroundPosition = "center";
        youTag.style.backgroundSize = "35%";
    }

fogliaTag.addEventListener("click", game);
forbiceTag.addEventListener("click", gameDue);
sassoTag.addEventListener("click", gameTre);
    
    function game() {        
        var sceltaCpu = Math.floor(Math.random()*3);
        youTag.style.backgroundImage = "url(../../assets/img/foglia.png)";
        sceltaTag.style.opacity = "0";
        risultatoTag.style.display = "block";
            
            if(sceltaCpu == 0){
                cpuTag.style.backgroundImage = "url(../../assets/img/foglia.png)";
                risultatoTag.innerHTML = "Pareggio";
                risultatoTag.classList.add("patta");
            } else if (sceltaCpu == 1) {
                cpuTag.style.backgroundImage = "url(../../assets/img/forbice.png)";
                risultatoTag.innerHTML = "Hai perso...";
                risultatoTag.classList.add("persa");
                punteggioCpuTag.innerHTML = Number(punteggioCpuTag.innerHTML) +1;
            } else {
                cpuTag.style.backgroundImage = "url(../../assets/img/sasso.png)";
                risultatoTag.innerHTML = "Hai vinto!";
                risultatoTag.classList.add("vinta");
                punteggioYouTag.innerHTML = Number(punteggioYouTag.innerHTML) +1;
            }
        }

    function gameDue() {
        var sceltaCpu = Math.floor(Math.random()*3);
        youTag.style.backgroundImage = "url(../../assets/img/forbice.png)";
        sceltaTag.style.opacity = "0";
        risultatoTag.style.display = "block";

            if(sceltaCpu == 0){
                cpuTag.style.backgroundImage = "url(../../assets/img/foglia.png)";
                risultatoTag.innerHTML = "Hai vinto!";
                risultatoTag.classList.add("vinta");
                punteggioYouTag.innerHTML = Number(punteggioYouTag.innerHTML) +1;
            } else if (sceltaCpu == 1) {
                cpuTag.style.backgroundImage = "url(../../assets/img/forbice.png)";
                risultatoTag.innerHTML = "Pareggio";
                risultatoTag.classList.add("patta");
            } else {
                cpuTag.style.backgroundImage = "url(../../assets/img/sasso.png)";
                risultatoTag.innerHTML = "Hai perso...";
                risultatoTag.classList.add("persa");
                punteggioCpuTag.innerHTML = Number(punteggioCpuTag.innerHTML) +1;
            }
        }

    function gameTre() {   
        var sceltaCpu = Math.floor(Math.random()*3);
        youTag.style.backgroundImage = "url(../../assets/img/sasso.png)";
        sceltaTag.style.opacity = "0";
        risultatoTag.style.display = "block";

            if(sceltaCpu == 0){
                cpuTag.style.backgroundImage = "url(../../assets/img/foglia.png)";
                risultatoTag.innerHTML = "Hai perso...";
                risultatoTag.classList.add("persa");
                punteggioCpuTag.innerHTML = Number(punteggioCpuTag.innerHTML) +1;
            } else if (sceltaCpu == 1) {
                cpuTag.style.backgroundImage = "url(../../assets/img/forbice.png)";
                risultatoTag.innerHTML = "Hai vinto!";
                risultatoTag.classList.add("vinta");
                punteggioYouTag.innerHTML = Number(punteggioYouTag.innerHTML) +1;
            } else {
                cpuTag.style.backgroundImage = "url(../../assets/img/sasso.png)";
                risultatoTag.innerHTML = "Pareggio";
                risultatoTag.classList.add("patta");
            }
        }