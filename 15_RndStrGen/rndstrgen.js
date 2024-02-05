
function generateRandomString(length, digits, upper, lower) {
  var result = "";
  var possible = "";
  
  if (digits) {
    possible += "0123456789";
  }  
  if (upper) {
    possible += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }  
  if (lower) {
    possible += "abcdefghijklmnopqrstuvwxyz";
  }  
  if (possible.length > 0) {
    for (var i = 0; i < length; i++) {   
      var index = Math.floor(Math.random() * possible.length);
      result += possible[index];
    }
  }
  
  return result;
}

var lengthInput = document.getElementById("length");
var digitsCheckbox = document.getElementById("digits");
var upperCheckbox = document.getElementById("upper");
var lowerCheckbox = document.getElementById("lower");
var generateButton = document.getElementById("generate");
var outputDiv = document.getElementById("output");

generateButton.addEventListener("click", function() {
  var length = parseInt(lengthInput.value);
  var digits = digitsCheckbox.checked;
  var upper = upperCheckbox.checked;
  var lower = lowerCheckbox.checked;
  var randomString = generateRandomString(length, digits, upper, lower);
  outputDiv.textContent = randomString;
});