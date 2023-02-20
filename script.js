var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementsByTagName("button");

//sets gradient based on both inputs taken by user
function setGradient() {
	body.style.background = "linear-gradient(to right, " 
		+ color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

//gets random color for both inputs and applies it to gradient (WIP)
function getRandomColors() {
	color1.value = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while(color1.length < 6) {
        color1 = "0" + color1;
    }
    color1.value = "#" + color1.value;
    
    color2.value = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while(color2.length < 6) {
        color2 = "0" + color2;
    }
    color2.value = "#" + color2.value;

    setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", getRandomColors);