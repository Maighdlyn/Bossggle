$(document).ready(function () {
	var idArray = ["letter1", "letter2", "letter3", "letter4", "letter5", "letter6"];
//	function arrayFunction() {
		var lettersArray = [];
		var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	//"AAAAAAAAABBCCDDDDEEEEEEEEEEEEFFGGGHHIIIIIIIIIJKLLLLMMNNNNNNOOOOOOOOPPQRRRRRRSSSSTTTTTTUUUUVVWWXYYZ";
		for (i = 0; i < 16; i++) {
			var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
			lettersArray.push(randomLetter);
//			document.getElementById('letter1').textContent = randomLetter;
//			document.getElementsByClassName('letters').textContent = randomLetter;
		};
		console.log("lettersArray = ", lettersArray);
	
//	document.getElementById('1').textContent = lettersArray[1];

		// function randomVowel(){
		// 	  var vowels = "AEIOU"
		// 	for (i = 0; i < 2; i++) {
		//   	var randomVowel = vowels[Math.floor(Math.random() * vowels.length)];
		//   	randomString += randomVowel;
		//   	updateLetters(randomString);
		// 	};
		//};

//		$("#submit").click(function () {
//			arrayFunction();
//		});

//	};
});
