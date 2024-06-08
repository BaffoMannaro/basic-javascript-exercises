window.addEventListener("load", function () {
	const aTag = document.querySelectorAll("#color li a");
	const ulTag = document.getElementById("color");
	const imageColorPicker = document.getElementById("mirror");
	const nomeColore = document.querySelectorAll("#color li h3");
	const sliderTag = document.getElementById("slider");
	let timerId;
	let timerId2;
	const togImgTag = document.getElementById("tog-img");
	const togColTag = document.getElementById("tog-col");
	const imgMirror = document.querySelector("#mirror img");
	let imgSelected;

	/* VARIABILI PER CONTROLLARE L'ESTETICA */
	const phoneH1Tag = document.getElementById("i-phone");

	/* COLOR PICKER */

	/*Assegno i colori*/
	for (let i = 0; i < 6; i++) {
		aTag[i].classList.add("colore-" + i);
		nomeColore[i].innerHTML =
			"Colore<br>" + window.getComputedStyle(aTag[i]).backgroundColor;
	}

	/*seleziono i colori con mouseover e li assegno all'iphone*/
	ulTag.addEventListener("mouseover", function (event) {

		if (event.target.tagName.toLowerCase() === "a") {
			if (imageColorPicker.className == "") {
				imageColorPicker.classList.add(event.target.className);
			} else {
				let classColor = imageColorPicker.className;
				imageColorPicker.classList.remove(classColor);
				imageColorPicker.classList.add(event.target.className);
			}

			if (phoneH1Tag.className == "") {
				phoneH1Tag.classList.add(event.target.className);
			} else {
				let h1Color = phoneH1Tag.className;
				phoneH1Tag.classList.remove(h1Color);
				phoneH1Tag.classList.add(event.target.className);
			}
		}	
	});

	/*imposto la prima immagine nell'iphone*/
	imgSelected = document.querySelector(".visibile");
	imgMirror.src = imgSelected.src;
	/**/

	/* SLIDER */

	timerId = setInterval(slider, 6000);

	sliderTag.onclick = gestisciClick;

	function gestisciClick() {
		clearInterval(timerId);
		slider("click");
		timerId = setInterval(slider, 6000);
	}

	function riattaccaListener() {
		sliderTag.onclick = gestisciClick;
	}

	function slider() {
		sliderTag.onclick = null;
		clearTimeout(timerId2);
		timerId2 = setTimeout(riattaccaListener, 2000);

		document.querySelector(".visibile").classList.remove("visibile");
		document.querySelector(".prossima").classList.add("visibile");
		document.querySelector(".prossima").classList.remove("prossima");

		/*Aggiorno e cambio immagine nell'iphone*/
		imgSelected = document.querySelector(".visibile");
		imgMirror.src = imgSelected.src;
		/**/

		var fratelloImgDiventataVisibile = document.querySelector(".visibile + img");

		if (fratelloImgDiventataVisibile == null) {
			document.querySelector("#slider img").classList.add("prossima");
		} else {
			fratelloImgDiventataVisibile.classList.add("prossima");
		}
	}

	document.addEventListener("visibilitychange", function () {
		if (document.hidden) {
			clearInterval(timerId);
		} else {
			timerId = setInterval(slider, 3000);
		}
	});

	/* TOGGLE IMMAGINI */

	togImgTag.addEventListener("click", function () {
		/*Modifica il button "Aggiungi una foto"*/
		togImgTag.classList.toggle("cliccato");
		togColTag.classList.toggle("comparsa");
		if (togImgTag.innerHTML === "Aggiungi una foto") {
			togImgTag.innerHTML = "Rimuovi le foto";
		} else {
			togImgTag.innerHTML = "Aggiungi una foto";
		}

		/* TOGGLE COLORI  legato al click su "Aggiungi una foto" poichè altrimenti sarebbe inutile*/

		togColTag.addEventListener("click", function () {
			imgMirror.classList.toggle("toggle-colori");
			togColTag.classList.toggle("cliccato");
			if (togColTag.innerHTML === "Mixa le foto con i colori") {
				togColTag.innerHTML = "Ripristina il colore originale";
			} else {
				togColTag.innerHTML = "Mixa le foto con i colori";
			}

			togImgTag.addEventListener("click", function () {
				togColTag.classList.toggle("cliccato");
				togImgTag.classList.toggle("cliccato");
			});
		});

		/*Rende visibile la foto nell'iphone*/
		imgMirror.classList.toggle("set-img");
	});
});
