(function(){



  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var letterBoxes = document.querySelectorAll(".letter")
  var onLetterClick = function (event) {
    console.log(event.target.innerText);
  }

  for (var i = 0; i < letterBoxes.length; i++) {
    var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    letterBoxes[i].innerHTML = randomLetter;
  }
  for (var i = 0; i < letterBoxes.length; i++) {
    letterBoxes[i].addEventListener('click', onLetterClick)
  }




  var spelledWord = [];

  function selectLetter () {
    document.querySelectorAll(".letter")
    // .className = "selected-letter";
    spelledWord.push(this.textContent());

  }

  console.log('spelledWord');
  // window.onload = function()
  //     {
  //   document.getElementsByClassName("letter-default").addEventListener( 'click', selectedLetter);
  //     };

  /**   **/
})()
