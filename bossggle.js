(function () {
	var chosenLetters = '';
	var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var letterBoxes = document.querySelectorAll(".letter")

	var onLetterClick = function () {
		event.target.classList.add('selected-letter')
		chosenLetters += event.target.innerText
		document.getElementById("word").innerText = chosenLetters;
	}

	for (var i = 0; i < letterBoxes.length; i++) {
		var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
		letterBoxes[i].innerHTML = randomLetter;
		letterBoxes[i].addEventListener('click', onLetterClick)
	}

	document.querySelector('#clear').addEventListener('click', clear)
	document.querySelector('#submit').addEventListener('click', submit)
	document.querySelector('#reset').addEventListener('click', reset)

	function clear() {
		var selectedLetters = document.querySelectorAll(".selected-letter");
		for (var i = 0; i < selectedLetters.length; i++) {
			selectedLetters[i].classList.remove("selected-letter")
		}
		document.getElementById("word").innerText = chosenLetters = '';
	}

	function reset() {
		location.reload();
	}

	function submit() {
		var ptValue = chosenLetters.length * 9;
		document.querySelector("#score").innerText = ptValue
		document.querySelector(".wordList").innerText = chosenLetters
		document.querySelector(".wordPoints").innerText = ptValue
		clear()
	}
})()
