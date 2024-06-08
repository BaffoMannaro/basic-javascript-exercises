var buttonTag = document.getElementById("inizia");
var buttonTagHover = document.querySelector("button:hover")
var youTag = document.getElementById("you");
var sceltaTag = document.getElementById("scelta");
var fogliaTag = document.querySelector("ul#scelta li:nth-child(1)");
var forbiceTag = document.querySelector("ul#scelta li:nth-child(2)");
var sassoTag = document.querySelector("ul#scelta li:nth-child(3)");
var cpuTag = document.getElementById("cpu");
var risultatoTag = document.getElementById("risultato"); 
var punteggioYouTag = document.getElementById("punteggioYou");
var punteggioCpuTag = document.getElementById("punteggioCpu");
var roundTag = document.querySelector("h2");
var numRipetizioni = 1;

buttonTag.addEventListener("click",setup);

    function setup() {    
        sceltaTag.style.display = "block";
        sceltaTag.style.opacity = "1";
        sceltaTag.style.backgroundImage = "none";
        sceltaTag.style.backgroundRepeat = "no-repeat";            
        sceltaTag.style.backgroundSize = "contain";       
        sceltaTag.style.backgroundPosition = "center";
        risultatoTag.style.display = "none";
        risultatoTag.style.backgroundColor = "#fff";
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
        buttonTag.innerHTML = 'Choose your "weapon"'
        buttonTag.style.opacity = "1";
        cpuTag.style.outline = "none";
        cpuTag.style.opacity = "1";
        youTag.style.outline = "none";
        youTag.style.opacity = "1";
    }

fogliaTag.addEventListener("click", game);
forbiceTag.addEventListener("click", game);
sassoTag.addEventListener("click", game);

    function game(event) {      
        var sceltaCpu = Math.floor(Math.random()*3);
        numRipetizioni = Number(numRipetizioni) + 1;
        youTag.style.backgroundImage = "url(../../assets/img/" + event.target.id + ".png)";
        sceltaTag.style.opacity = "0";
        risultatoTag.style.display = "block";
            
            if(sceltaCpu == 0){
            cpuTag.style.backgroundImage = "url(../../assets/img/foglia.png)";

                if (event.target.id == "foglia") {
                    risultatoTag.innerHTML = "Draw";
                    risultatoTag.classList.add("patta");
                    risultatoTag.style.backgroundColor = "#808080";
                    risultatoTag.style.color = "#fff";
                    buttonTag.innerHTML = "ANOTHER MATCH?";
                    roundTag.innerHTML = numRipetizioni + " Round";
                } else if (event.target.id == "forbice") {
                    risultatoTag.innerHTML = "You win!";
                    risultatoTag.classList.add("vinta");
                    risultatoTag.style.backgroundColor = "#E7411E";
                    risultatoTag.style.color = "#fff";
                    youTag.style.outline = " 15px solid #E7411E";
                    cpuTag.style.opacity = ".5";
                    punteggioYouTag.innerHTML = Number(punteggioYouTag.innerHTML) +1;
                    buttonTag.innerHTML = "ANOTHER MATCH?";
                    roundTag.innerHTML = numRipetizioni + " Round";
                } else {
                    risultatoTag.innerHTML = "You lose...";
                    risultatoTag.classList.add("persa");
                    risultatoTag.style.backgroundColor = "#036C59";
                    risultatoTag.style.color = "#fff";
                    cpuTag.style.outline = " 15px solid #036C59";
                    youTag.style.opacity = ".5";
                    punteggioCpuTag.innerHTML = Number(punteggioCpuTag.innerHTML) +1;
                    buttonTag.innerHTML = "ANOTHER MATCH?";
                    roundTag.innerHTML = numRipetizioni + " Round";
                }

                console.log(risultatoTag.className);

            } else if (sceltaCpu == 1) {
            cpuTag.style.backgroundImage = "url(../../assets/img/forbice.png)";

                if (event.target.id == "foglia") {
                    risultatoTag.innerHTML = "You lose...";
                    risultatoTag.classList.add("persa");
                    risultatoTag.style.backgroundColor = "#036C59";
                    risultatoTag.style.color = "#fff";
                    cpuTag.style.outline = " 15px solid #036C59";
                    youTag.style.opacity = ".5";
                    punteggioCpuTag.innerHTML = Number(punteggioCpuTag.innerHTML) +1;
                    buttonTag.innerHTML = "ANOTHER MATCH?";
                    roundTag.innerHTML = numRipetizioni + " Round";
                } else if (event.target.id == "forbice") {
                    risultatoTag.innerHTML = "Draw";
                    risultatoTag.classList.add("patta");
                    risultatoTag.style.backgroundColor = "#808080";
                    risultatoTag.style.color = "#fff";
                    buttonTag.innerHTML = "ANOTHER MATCH?";
                    roundTag.innerHTML = numRipetizioni + " Round";
                } else {
                    risultatoTag.innerHTML = "You win!";
                    risultatoTag.classList.add("vinta");
                    risultatoTag.style.backgroundColor = "#E7411E";
                    risultatoTag.style.color = "#fff";
                    youTag.style.outline = " 15px solid #E7411E";
                    cpuTag.style.opacity = ".5";
                    punteggioYouTag.innerHTML = Number(punteggioYouTag.innerHTML) +1;
                    buttonTag.innerHTML = "ANOTHER MATCH?";
                    roundTag.innerHTML = numRipetizioni + " Round";
                }

            } else {
            cpuTag.style.backgroundImage = "url(../../assets/img/sasso.png)";
                if (event.target.id == "foglia") {
                    risultatoTag.innerHTML = "You win!";
                    risultatoTag.classList.add("vinta");
                    risultatoTag.style.backgroundColor = "#E7411E";
                    risultatoTag.style.color = "#fff";
                    youTag.style.outline = " 15px solid #E7411E";
                    cpuTag.style.opacity = ".5";
                    punteggioYouTag.innerHTML = Number(punteggioYouTag.innerHTML) +1;
                    buttonTag.innerHTML = "ANOTHER MATCH?";
                    roundTag.innerHTML = numRipetizioni + " Round";
                } else if (event.target.id == "forbice") {
                    risultatoTag.innerHTML = "You lose...";
                    risultatoTag.style.backgroundColor = "#036C59";
                    risultatoTag.style.color = "#fff";
                    cpuTag.style.outline = " 15px solid #036C59";
                    youTag.style.opacity = ".5";
                    risultatoTag.classList.add("persa");
                    punteggioCpuTag.innerHTML = Number(punteggioCpuTag.innerHTML) +1;
                    buttonTag.innerHTML = "ANOTHER MATCH?";
                    roundTag.innerHTML = numRipetizioni + " Round";
                } else {
                    risultatoTag.innerHTML = "Draw";
                    risultatoTag.classList.add("patta");
                    risultatoTag.style.backgroundColor = "#808080";
                    risultatoTag.style.color = "#fff";
                    buttonTag.innerHTML = "ANOTHER MATCH?";
                    roundTag.innerHTML = numRipetizioni + " Round";
                }
            }
        }