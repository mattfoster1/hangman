var showAnswerRack = function() {

// I could turn this whole thing into a single script (updates dynamically) so that it could be in a line.
// Needs to be able to work with words from approx 4-9 letters

var jsAnswerRack0 = document.getElementById("answerRack0");
var	jsAnswerRack1 = document.getElementById("answerRack1");
var	jsAnswerRack2 = document.getElementById("answerRack2");
var	jsAnswerRack3 = document.getElementById("answerRack3");
var	jsAnswerRack4 = document.getElementById("answerRack4");
var	jsAnswerRack5 = document.getElementById("answerRack5");
var	jsAnswerRack6 = document.getElementById("answerRack6");


	console.log("guessedLetter = " + guessedLetter + " (" + chosenWord[guessedLetter] + ")");
	
	if (i === 0) {
		jsAnswerRack0.innerHTML = chosenWord[guessedLetter];
	console.log("jsAnswerRack0 = " + chosenWord[guessedLetter]);
	}

	else if (i === 1) {
		jsAnswerRack1.innerHTML = chosenWord[guessedLetter];
	console.log("jsAnswerRack1 = " + chosenWord[guessedLetter]);
	}

	else if (i === 2) {
		jsAnswerRack2.innerHTML = chosenWord[guessedLetter];
	console.log("jsAnswerRack2 = " + chosenWord[guessedLetter]);
	}

	else if (i === 3) {
		jsAnswerRack3.innerHTML = chosenWord[guessedLetter];
	console.log("jsAnswerRack3 = " + chosenWord[guessedLetter]);
	}

	else if (i === 4) {
		jsAnswerRack4.innerHTML = chosenWord[guessedLetter];
	console.log("jsAnswerRack4 = " + chosenWord[guessedLetter]);
	}

	else if (i === 5) {
		jsAnswerRack5.innerHTML = chosenWord[guessedLetter];
	console.log("jsAnswerRack5 = " + chosenWord[guessedLetter]);
	}

	else if (i === 6) {
		jsAnswerRack6.innerHTML = chosenWord[guessedLetter];
	console.log("jsAnswerRack6 = " + chosenWord[guessedLetter]);
	}

}


<div id = "answerRack0">
	<p>_</p>
</div>

<div id = "answerRack1">
	<p>_</p>
</div>

<div id = "answerRack2">
	<p>_</p>
</div>

<div id = "answerRack3">
	<p>_</p>
</div>

<div id = "answerRack4">
	<p>_</p>
</div>

<div id = "answerRack5">
	<p>_</p>
</div>

<div id = "answerRack6">
	<p>_</p>
</div>