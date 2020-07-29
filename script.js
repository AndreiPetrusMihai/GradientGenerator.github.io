var css = document.querySelector("h3");
var button = document.querySelector("button");
var colorOne = document.getElementById("colorOne");
var colorTwo = document.getElementById("colorTwo");
var body = document.getElementById("gradient");

body.style.background = "linear-gradient(to right, "+colorOne.value + ", "+colorTwo.value + ")";
css.textContent = body.style.background +";";


function colorChanged(){
	body.style.background = "linear-gradient(to right, "+colorOne.value + ", "+colorTwo.value + ")";
	css.textContent = body.style.background +";";
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function randomColors(){
	var newColorOne = getRandomColor();
	var newColorTwo = getRandomColor();
	colorOne.value = newColorOne;
	colorTwo.value = newColorTwo;

	body.style.background = "linear-gradient(to right, "+colorOne.value + ", "+colorTwo.value + ")";
	css.textContent = body.style.background +";";

}

colorOne.addEventListener("input",colorChanged);

colorTwo.addEventListener("input",colorChanged);

button.addEventListener("click", randomColors);