(function () {

	var chosenLetters = '';
	//	Line 4 uses Scrabble's letter frequencies in order to approximate letter frequencies in the English language.
	var alphabet = "AAAAAAAAABBCCDDDDEEEEEEEEEEEEFFGGGHHIIIIIIIIIJKLLLLMMNNNNNNOOOOOOOOPPQRRRRRRSSSSTTTTTTUUUUVVWWXYYZ";
	var letterBoxes = document.querySelectorAll(".letter")
	var ptValue = 0
	var totalPoints = 0;

	var timeLeft = 60
	function countDown() {
		timeLeft -= 1;
		document.querySelector("#timer").innerText = "0:" + timeLeft;
		if (timeLeft === -1) {
			alert("Time's up! Your final score is " + totalPoints + ".")
			location.reload();
		}
	}

	setInterval(countDown, 1000);

	function onLetterClick(){
		event.target.classList.add('selected-letter')
		chosenLetters += event.target.innerText
		ptValue = chosenLetters.length * 9;
		document.getElementById("word").innerText = chosenLetters;
	}

	function resetBoard() {
		for (var i = 0; i < letterBoxes.length; i++) {
			var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
			//Traditional Boggle has a "Qu" block rather than just a "Q" block, which we've created in lines 20-22
			if (randomLetter === "Q") {
				randomLetter = "Qu"
			}
			letterBoxes[i].innerHTML = randomLetter;
			letterBoxes[i].addEventListener('click', onLetterClick)
		}
	};
	//	line 28 calls resetBoard() immediately so the page will load the board upon opening
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
		if (chosenLetters.length >= 3) {
			if (isBasicWord(chosenLetters.toLowerCase()) === true) {
				totalPoints += ptValue;
				document.querySelector('#score').innerText = totalPoints;
				scoreBoard();
				clear();
			} else {
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
		location.reload();
	}

	document.querySelector('#clear').addEventListener('click', clear)
	document.querySelector('#submit').addEventListener('click', submit)
	document.querySelector('#reset').addEventListener('click', reset)




})()
