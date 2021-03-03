randomNumber = Math.floor(Math.random()*4+1);

window.onload = function() {
	if (randomNumber == 1) {
		document.getElementById("error1").style.display = "inline";
		document.getElementById("error2").style.display = "none";
		document.getElementById("error3").style.display = "none";
		document.getElementById("error4").style.display = "none";
	}
	if (randomNumber == 2) {
		document.getElementById("error1").style.display = "none";
		document.getElementById("error2").style.display = "inline";
		document.getElementById("error3").style.display = "none";
		document.getElementById("error4").style.display = "none";
	}
	if (randomNumber == 3) {
		document.getElementById("error1").style.display = "none";
		document.getElementById("error2").style.display = "none";
		document.getElementById("error3").style.display = "inline";
		document.getElementById("error4").style.display = "none";
	}
	if (randomNumber == 4) {
		document.getElementById("error1").style.display = "none";
		document.getElementById("error2").style.display = "none";
		document.getElementById("error3").style.display = "none";
		document.getElementById("error4").style.display = "inline";
	}
}