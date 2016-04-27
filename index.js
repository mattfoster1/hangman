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
	
	//console.log("chosenWord = " + chosenWord);

	for (i=0; i<chosenWord.length; i++){
		if (chosenWord[i] === playerGuess){ // player made a correct guess

			playerGuessedAtLeastOneLetter = true;
			succesfulGuess(allDataFromHTML);
			guessedLetter = i;
			// console.log(guessedLetter);
			// console.log(i);xvxvxvxvx
			// console.log("Cong rats!!");

			numberOfGuessedLetters++;
			// console.log("numberOfGuessedLetters = " + numberOfGuessedLetters);
			// console.log("wordLength = " + wordLength);
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
		

		// console.log("Commiserations");
		// console.log(userLives);
		// console.log("userLives = " + userLives);
		if (userLives <= 0) {
			// alert("Game Over. Starting again");
			showFailure();
			// location.reload();
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
// var space = "";

// jsAnswerRack0.innerHTML = space; // hides all the underscores on showAnswerRack
// jsAnswerRack1.innerHTML = space;
// jsAnswerRack2.innerHTML = space;
// jsAnswerRack3.innerHTML = space;
// jsAnswerRack4.innerHTML = space;
// jsAnswerRack5.innerHTML = space;
// jsAnswerRack6.innerHTML = space;

//if chosenWord.length === 4 

	// console.log("guessedLetter = " + guessedLetter + " (" + chosenWord[guessedLetter] + ")");
	
	if (i === 0) {
		jsAnswerRack0.innerHTML = chosenWord[guessedLetter];
	// console.log("jsAnswerRack0 = " + chosenWord[guessedLetter]);
	}

	else if (i === 1) {
		jsAnswerRack1.innerHTML = chosenWord[guessedLetter];
	// console.log("jsAnswerRack1 = " + chosenWord[guessedLetter]);
	}

	else if (i === 2) {
		jsAnswerRack2.innerHTML = chosenWord[guessedLetter];
	// console.log("jsAnswerRack2 = " + chosenWord[guessedLetter]);
	}

	else if (i === 3) {
		jsAnswerRack3.innerHTML = chosenWord[guessedLetter];
	// console.log("jsAnswerRack3 = " + chosenWord[guessedLetter]);
	}

	else if (i === 4) {
		jsAnswerRack4.innerHTML = chosenWord[guessedLetter];
	// console.log("jsAnswerRack4 = " + chosenWord[guessedLetter]);
	}

	else if (i === 5) {
		jsAnswerRack5.innerHTML = chosenWord[guessedLetter];
	// console.log("jsAnswerRack5 = " + chosenWord[guessedLetter]);
	}

	else if (i === 6) {
		jsAnswerRack6.innerHTML = chosenWord[guessedLetter];
	//console.log("jsAnswerRack6 = " + chosenWord[guessedLetter]);
	}

	else if (i === 7) {
		jsAnswerRack7.innerHTML = chosenWord[guessedLetter];
	// console.log("jsAnswerRack7 = " + chosenWord[guessedLetter]);
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
	console.log(resetGame);

	setTimeout(function(){
		resetGame.style.opacity = 1;
		resetGame.style.display = "block";
	},1400);

};

var resetButton = function(allDataFromHTML) {
	console.log("whoop");
	location.reload();
};


var showCongratulations = function() {
	var congratulationScreen = document.getElementById("congratulationScreen");
	congratulationScreen.style.display = "block";

	setTimeout(function(){
		var balloons = document.getElementById("balloons");
		balloons.style.top = "0%";
	},5);

	showResetGameButton();

	//have a reset game button
		// have a button in the dom appear with the option to reset the game

	
}

var showFailure = function() {
	var failureScreen = document.getElementById("failureScreen");
	failureScreen.style.display = "block";

	setTimeout(function(){
		var thumbsDown = document.getElementById("thumbsDown");
		thumbsDown.style.top = "0%";
		showResetGameButton();
	},500);
	
	
}


var theHangedMan = function() {
	console.log("The Hanged Man");

	console.log("in func1 drawNumber =" + drawNumber);
	var condemnedJs = document.getElementById("condemned" + drawNumber);
	
	if (drawNumber === 0){

		condemnedJs.style.display = "block";
		condemnedJs.style.position = "relative";
		condemnedJs.style.left = "0px";
		condemnedJs.style.top = "325px";
		condemnedJs.style.opacity = "1";

		console.log("base");
	}

	if (drawNumber === 1){
		condemnedJs.style.display = "block";
		condemnedJs.style.position = "relative";
		condemnedJs.style.left = "0px";
		condemnedJs.style.top = "19px";
		condemnedJs.style.opacity = "1";

		console.log("stand");
	}
	
	if (drawNumber === 2){
		condemnedJs.style.display = "block";
		condemnedJs.style.position = "relative";
		condemnedJs.style.left = "17px";
		condemnedJs.style.top = "-280px";
		condemnedJs.style.opacity = "1";

		console.log("stand_top");
	}
	
	if (drawNumber === 3){
		condemnedJs.style.display = "block";
		condemnedJs.style.position = "relative";
		condemnedJs.style.left = "105px";
		condemnedJs.style.top = "-300px";
		condemnedJs.style.opacity = "1";

		console.log("stand_top");
	}	
	
	if (drawNumber === 4){
		condemnedJs.style.display = "block";
		condemnedJs.style.position = "relative";
		condemnedJs.style.left = "0px";
		condemnedJs.style.top = "325px";
		condemnedJs.style.opacity = "1";

		console.log("stand_top");
	}

	if (drawNumber === 5){
		condemnedJs.style.display = "block";
		condemnedJs.style.position = "relative";
		condemnedJs.style.left = "0px";
		condemnedJs.style.top = "325px";
		condemnedJs.style.opacity = "1";

		console.log("stand_top");
	}

	if (drawNumber === 6){
		condemnedJs.style.display = "block";
		condemnedJs.style.position = "relative";
		condemnedJs.style.left = "0px";
		condemnedJs.style.top = "325px";
		condemnedJs.style.opacity = "1";

		console.log("stand_top");
	}	
	
	if (drawNumber === 7){
		condemnedJs.style.display = "block";
		condemnedJs.style.position = "relative";
		condemnedJs.style.left = "0px";
		condemnedJs.style.top = "325px";
		condemnedJs.style.opacity = "1";

		console.log("stand_top");
	}

	if (drawNumber === 8){
		condemnedJs.style.display = "block";
		condemnedJs.style.position = "relative";
		condemnedJs.style.left = "0px";
		condemnedJs.style.top = "325px";
		condemnedJs.style.opacity = "1";

		console.log("stand_top");
	}

	if (drawNumber === 9){
		condemnedJs.style.display = "block";
		condemnedJs.style.position = "relative";
		condemnedJs.style.left = "0px";
		condemnedJs.style.top = "325px";
		condemnedJs.style.opacity = "1";

		console.log("stand_top");
	}

	// setTimeout(function(){
	// 	var thumbsDown = document.getElementById("xxx");
		
	// },5);

};

var letterIntro = function() {
	
	if (l<26){
		//console.log("hello");
		var appearingLetter = document.getElementById("letter" + l);
		appearingLetter.style.opacity = 1;


		l++;
		setTimeout(letterIntro, 50);	
	}
	
	//console.log("appearingLetter = (see below)");
		// console.log(appearingLetter);
	
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
	// allDataFromHTML.style.textDecoration = "line-through";

};




// var newElement = document.createElement('div');
// newElement.className = "someClass";

// document.getElementById("buttonContainer").appendChild(newElement);



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