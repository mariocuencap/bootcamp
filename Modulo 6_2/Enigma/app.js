var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

var encrypt = () => {
  var plainText = document.getElementById("normalLang").value;
  var encryptedText = "";

  for (var i = 0; i < plainText.length; i++) {
    var charIndex = plainAlphabet.indexOf(plainText[i]);
    if (charIndex !== -1) {
      encryptedText += encryptedAlphabet[charIndex];
    } else {
      encryptedText += plainText[i];
    }
  }

  document.getElementById("enLang").value = encryptedText;
};

var decrypt = () => {
  var encryptedText = document.getElementById("enLang").value;
  var plainText = "";

  for (var i = 0; i < encryptedText.length; i++) {
    var charIndex = encryptedAlphabet.indexOf(encryptedText[i]);
    if (charIndex !== -1) {
      plainText += plainAlphabet[charIndex];
    } else {
      plainText += encryptedText[i];
    }
  }

  document.getElementById("normalLang").value = plainText;
};

document.getElementById("Encrypt").addEventListener("click", encrypt);
document.getElementById("Decrypt").addEventListener("click", decrypt);
