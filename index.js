var userLives;
var userLives1
var playerGuess = '';
var chosenWord = '';
var playerGuessedAtLeastOneLetter = false;
var chosenWord;
var guessedLetter;
var randomWords;
var e;
var i;
var space = " ";
var wordLength;
var numberOfGuessedLetters = 0;
var l=0;
var m=0;
var resetGame;
var wrongGuessesSoFar = "";
var drawNumber = -1;

var jsAnswerRack0 = document.getElementById("answerRack0");
var	jsAnswerRack1 = document.getElementById("answerRack1");
var	jsAnswerRack2 = document.getElementById("answerRack2");
var	jsAnswerRack3 = document.getElementById("answerRack3");
var	jsAnswerRack4 = document.getElementById("answerRack4");
var	jsAnswerRack5 = document.getElementById("answerRack5");
var	jsAnswerRack6 = document.getElementById("answerRack6");
var	jsAnswerRack7 = document.getElementById("answerRack7");



var newGame = function() {
	chosenWord = getRandomWord();
	console.log("Notice: New Game Started");
	userLives = 10;
	lengthChecker(); // makes number of underscores the same as number of letters in chosenWord


};


var guessChecker = function(allDataFromHTML) {
	for (i=0; i<chosenWord.length; i++){
		if (chosenWord[i] === playerGuess){ // player made a correct guess

			playerGuessedAtLeastOneLetter = true;
			succesfulGuess(allDataFromHTML);
			guessedLetter = i;
			numberOfGuessedLetters++;
			showAnswerRack(); // put correct letter in answer rack
			
		}
	}
	if (playerGuessedAtLeastOneLetter === false) { // player made an incorrect guess
		userLives--;
		drawNumber++;
		unSuccesfulGuess(allDataFromHTML);
		userLives1 = document.getElementById("lives"); // lower userlives on page
		userLives1.innerHTML = userLives;
		incorrectGuessesRack();
		theHangedMan();
		if (userLives <= 0) {
			// alert("Game Over. Starting again");
			showFailure();
		}
	}
	playerGuessedAtLeastOneLetter = false;

		if (wordLength === numberOfGuessedLetters) {
			// alert("Congratulations, you have won! Starting again")
			showCongratulations();
			numberOfGuessedLetters = 0;
			// location.reload();
		}
};

var getRandomWord = function(){ //RANDOM WORD GENERATOR
	console.log("Notice: getRandomWord function activated");
	//var correctGuesses = [];
	randomWords = ["santa", "bauble", "rudolph"]; //pick a random word
	e = (Math.floor(Math.random()*randomWords.length));//random number generator=

	return randomWords[e];
};

var buttonClicked = function (allDataFromHTML) {// TAKES THE LETTER THAT WAS CLICKED ON
	playerGuess = allDataFromHTML.innerHTML;
	allDataFromHTML.disabled = true;
	
	//console.log("Player Guess = " + playerGuess)
	console.log("Notice: buttonClicked function activated");

	guessChecker(allDataFromHTML); 
};

var start = function(){ //Overall function
	newGame();
	letterIntro();
	resetGame = document.getElementById("resetgame");
	resetGame.style.display = "none";

};

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
var	jsAnswerRack7 = document.getElementById("answerRack7");
	
	if (i === 0) {
		jsAnswerRack0.innerHTML = chosenWord[guessedLetter];
	}

	else if (i === 1) {
		jsAnswerRack1.innerHTML = chosenWord[guessedLetter];
	}

	else if (i === 2) {
		jsAnswerRack2.innerHTML = chosenWord[guessedLetter];
	}

	else if (i === 3) {
		jsAnswerRack3.innerHTML = chosenWord[guessedLetter];
	}

	else if (i === 4) {
		jsAnswerRack4.innerHTML = chosenWord[guessedLetter];
	}

	else if (i === 5) {
		jsAnswerRack5.innerHTML = chosenWord[guessedLetter];
	}

	else if (i === 6) {
		jsAnswerRack6.innerHTML = chosenWord[guessedLetter];
	}

	else if (i === 7) {
		jsAnswerRack7.innerHTML = chosenWord[guessedLetter];
	}
};

var lengthChecker = function() {

var jsAnswerRack0 = document.getElementById("answerRack0");
var	jsAnswerRack1 = document.getElementById("answerRack1");
var	jsAnswerRack2 = document.getElementById("answerRack2");
var	jsAnswerRack3 = document.getElementById("answerRack3");
var	jsAnswerRack4 = document.getElementById("answerRack4");
var	jsAnswerRack5 = document.getElementById("answerRack5");
var	jsAnswerRack6 = document.getElementById("answerRack6");
var	jsAnswerRack7 = document.getElementById("answerRack7");
	
	if (chosenWord.length === 5) {
 		jsAnswerRack5.innerHTML = space;
 		jsAnswerRack6.innerHTML = space;
 		jsAnswerRack7.innerHTML = space;
 		wordLength = 5;
	}
	if (chosenWord.length === 6) {
 		jsAnswerRack6.innerHTML = space;
 		jsAnswerRack7.innerHTML = space;
 		wordLength = 6;
	}
	if (chosenWord.length === 7) {
 		jsAnswerRack7.innerHTML = space;
 		wordLength = 7;
	}
};

var showResetGameButton = function() {
	resetGame = document.getElementById("resetgame");
	resetgame1 = document.getElementById("resetBgr");
	console.log(resetGame);

	setTimeout(function(){
		resetGame.style.opacity = 1;
		resetGame.style.display = "block";
		resetgame1.style.zIndex = "181";
	},1400);

};

var resetButton = function(allDataFromHTML) {
	console.log("whoop");
	location.reload();
};

var showCongratulations = function() {
	var congratulationScreen = document.getElementById("congratulationScreen");
	congratulationScreen.className = "show";

	setTimeout(function(){
		var balloons = document.getElementById("balloons");
		balloons.style.top = "20%";
	},500);

	showResetGameButton();
}

var showFailure = function() {
	var failureScreen = document.getElementById("failureScreen");
		failureScreen.className = "show";

	
	setTimeout(function(){
		var thumbsDown = document.getElementById("thumbsDown");
		thumbsDown.style.top = "20%";
	},500);

	showResetGameButton();
}
var theHangedMan = function() {
	console.log("The Hanged Man");

	console.log("in func1 drawNumber =" + drawNumber);
	var condemnedJs = document.getElementById("condemned" + drawNumber);
	
	if (drawNumber === 0){
		condemnedJs.style.display = "block";
		condemnedJs.style.left = "0px";
		condemnedJs.style.top = "325px";
		condemnedJs.style.opacity = "1";
	}

	if (drawNumber === 1){
		condemnedJs.style.display = "block";
		condemnedJs.style.left = "0px";
		condemnedJs.style.top = "50px";
		condemnedJs.style.opacity = "1";
	}
	
	if (drawNumber === 2){
		condemnedJs.style.display = "block";
		condemnedJs.style.left = "17px";
		condemnedJs.style.top = "40px";
		condemnedJs.style.opacity = "1";
	}
	
	if (drawNumber === 3){
		condemnedJs.style.display = "block";
		condemnedJs.style.left = "105px";
		condemnedJs.style.top = "39px";
		condemnedJs.style.opacity = "1";
	}	
	
	if (drawNumber === 4){
		condemnedJs.style.display = "block";
		condemnedJs.style.left = "90px";
		condemnedJs.style.top = "104px";
		condemnedJs.style.opacity = "1";
	}

	if (drawNumber === 5){
		condemnedJs.style.display = "block";
		condemnedJs.style.left = "121px";
		condemnedJs.style.top = "150px";
		condemnedJs.style.opacity = "1";
	}

	if (drawNumber === 6){
		condemnedJs.style.display = "block";
		condemnedJs.style.left = "62px";
		condemnedJs.style.top = "149px";
		condemnedJs.style.opacity = "1";
	}	
	
	if (drawNumber === 7){
		condemnedJs.style.display = "block";
		condemnedJs.style.left = "131px";
		condemnedJs.style.top = "130px";
		condemnedJs.style.opacity = "1";
	}

	if (drawNumber === 8){
		condemnedJs.style.display = "block";
		condemnedJs.style.left = "162px";
		condemnedJs.style.top = "213px";
		condemnedJs.style.opacity = "1";
	}

	if (drawNumber === 9){
		condemnedJs.style.display = "block";
		condemnedJs.style.left = "144px";
		condemnedJs.style.top = "218px";
		condemnedJs.style.opacity = "1";
	}
};

var letterIntro = function() {
	if (l<26){
		//console.log("hello");
		var appearingLetter = document.getElementById("letter" + l);
		appearingLetter.style.opacity = 1;

		l++;
		setTimeout(letterIntro, 50);	
	}
};

var incorrectGuessesRack = function() {
	var jsWrongGuessRack = document.getElementById("wrongguesses");

		var wrongLetter = playerGuess;
		wrongGuessesSoFar += wrongLetter + " ";
		wrongguesses.innerHTML = wrongGuessesSoFar;
};

var succesfulGuess = function(allDataFromHTML) {
allDataFromHTML.style.backgroundColor = "#63FF20";
allDataFromHTML.style.color = "black";
};

var unSuccesfulGuess = function(allDataFromHTML) {
	allDataFromHTML.style.backgroundColor = "red";
	allDataFromHTML.style.color = "#7F0000";
};

// To do:

//have a div sweep down from the top on success and failure to hide the game (still show success messages, button etc...)

//also need a hanged man

//also need to consolidate all date into one div

// function duplicate() {
//     var x = 0;
//     var original = document.getElementById('balloons' + x);
//     var clone = original.cloneNode(true); // "deep" clone
//    	clone.id = "duplicater" + ++x; // there can only be one element with an ID
//     clone.onclick = duplicate; // event handlers are not cloned
//     original.parentNode.appendChild(clone);
// };