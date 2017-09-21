
$(document).ready(function() {

// The code below initializes the game when the user clicks the start button

$(".initiate").on("click"), function() {

// The code below displays the 

}

})

initiate();


// When a user clicks on the start button, the code below displays the quiz questions, with the possible answers below each question displayed as radio buttons

var questionArray = ["In which direction do hurricanes rotate?", "What is the name of the calm area in the center of a hurricane?", "The air pressure during a hurricane is ...", "When does hurricane season start?"]
var answerArray = ["clockwise", "counter-clockwise", "both directions"], ["eye", "retreat", "heart",], ["very high", "very low", "intensely average"], ["January", "April", "June"]];

correctAnswers = ["both directions", "eye", "very high", "June"]

// The code below captures the answers selected by the user and compares them to the correct answers in the correctAnswers array, adding 1 to the correctAnswers display at the end of the game for every match, and adding one to the incorrectAnswers displayed at the end of the game for every user answer selected that does not match an item in the correctAnswers array. it also also counts the unanswered questions and adds 1 in the correct display for each.

// The code below starts the clock, decrementing by 1 second, and stopping the game, displaying the message "All Done!" when the seconds are equal to zero


var clock = 25;
$("#countDown").on("click"), function() {
 clock--;

}



// The code below restarts the game and resets the clock to 25 and results to 0, 

function resetGame() {
	clock = 25;
	correctAnswers = 0;
	incorrectAnswers = 0;
	unasweredAnswers = 0;

}

resetGame();

// The code below 

var startGame
var theCounter
var correctAnswers = 0;
var incorrectAnswers = 0;
var unasweredAnswers = 0;


