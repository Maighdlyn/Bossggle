(function () {
	var chosenLetters = '';
	var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var letterBoxes = document.querySelectorAll(".letter")
	var ptValue = 0
	var totalPoints = 0;

	var onLetterClick = function () {
		event.target.classList.add('selected-letter')
		chosenLetters += event.target.innerText
		ptValue = chosenLetters.length * 9;
		document.getElementById("word").innerText = chosenLetters;
	}

	function resetBoard() {
		for (var i = 0; i < letterBoxes.length; i++) {
			var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
			if (randomLetter === "Q"){
				randomLetter = "Qu"
			}
			letterBoxes[i].innerHTML = randomLetter;
			letterBoxes[i].addEventListener('click', onLetterClick)
		}
	};
	resetBoard();

	function scoreBoard() {
		var scoreList = document.querySelector("#score-board");
		var scoreRow = document.createElement("div");
		var scoreWord = document.createElement("div");
		var scoreNumber = document.createElement("div");
		scoreRow.className += "points-row";
		scoreWord.innerHTML = chosenLetters;
		scoreNumber.innerHTML = ptValue;
		scoreList.insertBefore(scoreRow, scoreList.childNodes[0]);
		scoreRow.appendChild(scoreWord);
		scoreRow.appendChild(scoreNumber);
	}

	function submit() {
//		console.log("chosenLetters = ", chosenLetters)
//			console.log(isBasicWord(chosenLetters.toLowerCase()))
		if (chosenLetters.length >= 3) {
			if (isBasicWord(chosenLetters.toLowerCase()) === true) {
				totalPoints += ptValue;
				document.querySelector('#score').innerText = totalPoints;
				scoreBoard();
				clear();
			}else{
				alert("That word isn't in the Bossggle dictionary.")
			}
		} else {
			alert("Word must be at least 3 letters long.");
		}
	}

	function clear() {
		var selectedLetters = document.querySelectorAll(".selected-letter");
		for (var i = 0; i < selectedLetters.length; i++) {
			selectedLetters[i].classList.remove("selected-letter")
		}
		document.getElementById("word").innerText = chosenLetters = '';
	}

	function reset() {
		resetBoard()
		clear()
	}

	document.querySelector('#clear').addEventListener('click', clear)
	document.querySelector('#submit').addEventListener('click', submit)
	document.querySelector('#reset').addEventListener('click', reset)






})()
