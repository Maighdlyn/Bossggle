function arrayFunction() {
  var lettersArray = [];
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (i = 0; i < 16; i++) {
    console.log("hi");

    var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    // lettersArray.push(randomLetter);
    document.getElementById(i).innerHTML = randomLetter;


   console.log("random letter = ", randomLetter);
  };
};


 console.log(arrayFunction())
