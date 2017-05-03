

function arrayFunction() {
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (i = 1; i < 17; i++) {

     var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
     document.getElementById(i).innerHTML = randomLetter;

   };
};


arrayFunction();

var spelledWord = [];

function selectLetter () {
  document.getElementsByClassName("letter-default").className = "selected-letter";
  spelledWord.push(this.textContent());

}

console.log('spelledWord');
// window.onload = function()
//     {
//   document.getElementsByClassName("letter-default").addEventListener( 'click', selectedLetter);
//     };

/**  **/
