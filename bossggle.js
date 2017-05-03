(function(){


  var spelledWord = [];
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var letterBoxes = document.querySelectorAll(".letter")
  var onLetterClick = function (event) {

    document.getElementById(event.target.id).style.backgroundColor = "rgb(207,149,106)";
    document.getElementById(event.target.id).style.color = "rgb(155,73,85)";
    document.getElementById(event.target.id).style.borderColor = "rgb(155,73,85)" ;
    spelledWord.push(event.target.innerText)
    var spelledStr = spelledWord.join("");
    document.getElementById("word").innerHTML = spelledStr;
    console.log(spelledStr)

  }

  for (var i = 0; i < letterBoxes.length; i++) {
    var randomLetter= alphabet[Math.floor(Math.random() * alphabet.length)];
    letterBoxes[i].innerHTML = randomLetter;
  }
  for (var i = 0; i < letterBoxes.length; i++) {
    letterBoxes[i].addEventListener('click', onLetterClick)
  }

  function selectletter() {
    document.querySelectorAll(".letter")
    spelledWord.push(this.textContent());

  }

})()

function clearWord () {
  document.getElementsByClassName("letter").style.backgroundColor = "rgb(235, 223, 199)";
  // document.getElementsByClassName("letter").style.borderColor = "black";
  // spelledStr = '';
  // spelledWord = [];
  document.getElementById("word").innerText = spelledStr = '';
  document.getElementById("word").innerHTML = spelledWord = [''];
  // console.log('spelled Word = ', spelledWord);
   console.log('spelled String = ', spelledStr);

}
