var buttonTag = document.querySelector("button#gioca");
var messTag = document.querySelector("h2#messaggio");
var youCard = document.querySelector("div#you span");
var cpuCard = document.querySelector("div#cpu span");
var borderTag = document.querySelector("main");

youCard.innerHTML = "";
cpuCard.innerHTML = "";

youCard.style.backgroundImage = "url(../../assets/img/retroCard.webp)";
cpuCard.style.backgroundImage = "url(../../assets/img/retroCard.webp)";
youCard.style.boxShadow = "0 0 15px black";
cpuCard.style.boxShadow = "0 0 15px black";

messTag.innerHTML = "Clicca il pulsante per giocare...";

buttonTag.addEventListener("click", game);
    function game() {
        var youNewNum = Math.floor(Math.random()*10+1);
        var cpuNewNum = Math.floor(Math.random()*10+1);

        if (youNewNum == 1) {
            youCard.style.backgroundImage = "url(../../assets/img/card01.webp)";
        } else if (youNewNum == 2) {
            youCard.style.backgroundImage = "url(../../assets/img/card02.webp)";
        } else if (youNewNum == 3) {
            youCard.style.backgroundImage = "url(../../assets/img/card03.webp)";
        } else if (youNewNum == 4) {
            youCard.style.backgroundImage = "url(../../assets/img/card04.webp)";
        } else if (youNewNum == 5) {
            youCard.style.backgroundImage = "url(../../assets/img/card05.webp)";
        } else if (youNewNum == 6) {
            youCard.style.backgroundImage = "url(../../assets/img/card06.webp)";
        } else if (youNewNum == 7) {
            youCard.style.backgroundImage = "url(../../assets/img/card07.webp)";
        } else if (youNewNum == 8) {
            youCard.style.backgroundImage = "url(../../assets/img/card08.webp)";
        } else if (youNewNum == 9) {
            youCard.style.backgroundImage = "url(../../assets/img/card09.webp)";
        } else {
            youCard.style.backgroundImage = "url(../../assets/img/card10.webp)";
        }

        if (cpuNewNum == 1) {
            cpuCard.style.backgroundImage = "url(../../assets/img/card01.webp)";
        } else if (cpuNewNum == 2) {
            cpuCard.style.backgroundImage = "url(../../assets/img/card02.webp)";
        } else if (cpuNewNum == 3) {
            cpuCard.style.backgroundImage = "url(../../assets/img/card03.webp)";
        } else if (cpuNewNum == 4) {
            cpuCard.style.backgroundImage = "url(../../assets/img/card04.webp)";
        } else if (cpuNewNum == 5) {
            cpuCard.style.backgroundImage = "url(../../assets/img/card05.webp)";
        } else if (cpuNewNum == 6) {
            cpuCard.style.backgroundImage = "url(../../assets/img/card06.webp)";
        } else if (cpuNewNum == 7) {
            cpuCard.style.backgroundImage = "url(../../assets/img/card07.webp)";
        } else if (cpuNewNum == 8) {
            cpuCard.style.backgroundImage = "url(../../assets/img/card08.webp)";
        } else if (cpuNewNum == 9) {
            cpuCard.style.backgroundImage = "url(../../assets/img/card09.webp)";
        } else {
            cpuCard.style.backgroundImage = "url(../../assets/img/card10.webp)";
        }

        if (youNewNum > cpuNewNum) {
            messTag.style.color = "#4EB711";
            messTag.innerHTML = "Complimenti! <br> Hai vinto!";
            youCard.style.outline = "10px solid #4EB711";
            youCard.style.opacity = "100%";
            cpuCard.style.outline = "0";
            cpuCard.style.opacity = "50%";
            borderTag.style.borderColor = "#4EB711";
        } else if (youNewNum < cpuNewNum) {
            messTag.style.color = "red";
            messTag.innerHTML = "Ritenta! <br> Sarai più fortunato!";
            youCard.style.outline = "0";
            youCard.style.opacity = "50%";
            cpuCard.style.outline = "10px solid red";
            cpuCard.style.opacity = "100%";
            borderTag.style.borderColor = "red";
        } else {
            messTag.style.color = "#c6c6c6";
            messTag.innerHTML = "Parità! <br> Sai come si dice... Mal comune, mezzo gaudio";
            youCard.style.outline = "10px solid #c6c6c6";
            youCard.style.opacity = "50%";
            cpuCard.style.outline = "10px solid #c6c6c6";
            cpuCard.style.opacity = "50%";
            borderTag.style.borderColor = "#c6c6c6";
        }

    }