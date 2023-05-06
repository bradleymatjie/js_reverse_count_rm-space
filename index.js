// reverse string function
function reverse() {
  var text = document.getElementById("textInput").value;
  let output = text.split('').reverse().join('');
  document.getElementById("output").innerHTML = output;
}

// counts the number of vowels
function count() {
  var text = document.getElementById("textInput").value;
  let output = text.match(/[aeiou]/gi).length;
  document.getElementById("output").innerHTML = output;
}

// removes all whitespaces in a string
function removeSpace() {
  var text = document.getElementById("textInput").value;
  let output = text.replaceAll(' ', '');
  document.getElementById("output").innerHTML = output;
}

