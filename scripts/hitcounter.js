randomNumber = Math.floor(Math.random()*5+1);

window.onload = function() {
	if (randomNumber == 1) {
		document.getElementById("counter1").style.display = "center";
		document.getElementById("counter2").style.display = "none";
		document.getElementById("counter3").style.display = "none";
		document.getElementById("counter4").style.display = "none";
		document.getElementById("counter5").style.display = "none";
	}
	if (randomNumber == 2) {
		document.getElementById("counter1").style.display = "none";
		document.getElementById("counter2").style.display = "center";
		document.getElementById("counter3").style.display = "none";
		document.getElementById("counter4").style.display = "none";
		document.getElementById("counter5").style.display = "none";		
	}
	if (randomNumber == 3) {
		document.getElementById("counter1").style.display = "none";
		document.getElementById("counter2").style.display = "none";
		document.getElementById("counter3").style.display = "center";
		document.getElementById("counter4").style.display = "none";
		document.getElementById("counter5").style.display = "none";
	}
	if (randomNumber == 4) {
		document.getElementById("counter1").style.display = "none";
		document.getElementById("counter2").style.display = "none";
		document.getElementById("counter3").style.display = "none";
		document.getElementById("counter4").style.display = "center";
		document.getElementById("counter5").style.display = "none";
	}
	if (randomNumber == 5) {
		document.getElementById("counter1").style.display = "none";
		document.getElementById("counter2").style.display = "none";
		document.getElementById("counter3").style.display = "none";
		document.getElementById("counter4").style.display = "none";
		document.getElementById("counter5").style.display = "center";
	}
}