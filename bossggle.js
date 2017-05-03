(function(){


  var chosenLetters = '';
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var letterBoxes = document.querySelectorAll(".letter")
  var onLetterClick = function (event) {

    event.target.classList.add('selected-letter')
    chosenLetters += event.target.innerText
    // spelledWord.push(event.target.innerText)
    // var spelledStr = spelledWord.join("");
    document.getElementById("word").innerText = chosenLetters;

  }

  for (var i = 0; i < letterBoxes.length; i++) {
    var randomLetter= alphabet[Math.floor(Math.random() * alphabet.length)];
    letterBoxes[i].innerHTML = randomLetter;
  }
  for (var i = 0; i < letterBoxes.length; i++) {
    letterBoxes[i].addEventListener('click', onLetterClick)
  }
  document.querySelector('#clear').addEventListener('click', clearWord)

  function selectletter() {
    document.querySelectorAll(".letter")
    // spelledWord.push(this.textContent());

  }



  function clearWord () {
    // event.target.classList.add('selected-letter')
    // document.getElementsByClassName("letter").style.backgroundColor = "rgb(235, 223, 199)";
    // document.getElementsByClassName("letter").style.borderColor = "black";
    // spelledStr = '';
    // spelledWord = [];
    var selectedLetters = document.querySelectorAll(".selected-letter");
    for (var i = 0; i < selectedLetters.length; i++) {
      selectedLetters[i].classList.remove("selected-letter")
    }
    document.getElementById("word").innerText = chosenLetters = '';
    // document.getElementById("word").innerHTML = spelledWord = [];
    // console.log('spelled Word = ', spelledWord);

  }

  function pointValue () {
    var ptValue = spelledStr.length * 9;
    return ptValue
  }
})()
