//----------------------------------------------------------------------------------------Start page and game page HTML code-----

let startPageHTML = `
    <header>
        <div id="title">
            <h1>Tic-Tac-Toe</h1>
        </div>
    </header>
    <section id="player-selection">
        <div id="player-selection-text">
            <h2>Please make your selection below</h2>
        </div>
        <div class="player-selection-buttons" id="player-selection-X">
            <h3>X</h3>
        </div>
        <div class="player-selection-buttons" id="player-selection-O">
            <h3>O</h3>
        </div>
        <div id="buttonx_choice" class="post-selection-button-text">
        </div>
        <div id="buttono_choice" class="post-selection-button-text">
        </div>
    </section>
    <section id="start-game">
        <div id="start-game-button">
            <h3>Start Game</h3>
        </div>
    </section>
    <script src="assets/js/script.js"></script>`;

let gamePageHTML = `
    <header>
        <div id="title">
            <h1>Tic-Tac-Toe</h1>
        </div>
    </header>
    <section id="player-scores">
        <div id="player1-score">
            <h2>Player 1 Score: 0</h2>
        </div>
        <div id ="player2-score">
        	<h2>Player 2 Score: 0</h2>
        </div>
    </section>
    <section>
        	<div id="current-player">
    		<h3></h3>
    	</div>
 
    	<div class="alert-message">
        	<h3></h3>
        </div>        
    </section>
    <section id="board-grid">
        <div class="game-board">
            <div class="box" id="position-0"> </div>
            <div class="box" id="position-1"> </div>
            <div class="box" id="position-2"> </div>
            <div class="box" id="position-3"> </div>
            <div class="box" id="position-4"> </div>
            <div class="box" id="position-5"> </div>
            <div class="box" id="position-6"> </div>
            <div class="box" id="position-7"> </div>
            <div class="box" id="position-8"> </div>
        </div> 
    </section>
    <script src="assets/js/script.js"></script>`;

//---------------------------------------------------------------------------------------------------Main variables--------------
let player1Choice = "";
let player2Choice = "";
let currentChoice = "";
let gameBoard = [" "," "," "," "," "," "," "," "," "];
let player1Score = 0;
let player2Score = 0;
let roundEnded = false;

//---------------------------------------------------------------------------------------------------Functions-------------------

function alertMessage(message, duration) {
	document.getElementsByClassName("alert-message")[0].innerHTML = "<h3>" + message + "</h3>";
	setTimeout(() => { document.getElementsByClassName("alert-message")[0].innerHTML = ""; }, duration);
}

function setPlayerScores() {
	document.getElementById("player1-score").innerHTML = "<h2>Player 1 Score: " + player1Score + "</h2>";
	document.getElementById("player2-score").innerHTML = "<h2>Player 2 Score: " + player2Score + "</h2>";
}

function highlightWinningPositions(winningPositions) {
	for (let i = 0; i < winningPositions.length; i++) {
		winningPosition = "position-" + winningPositions[i];
		if (winningPositions.length == 3) {
			document.getElementById(winningPosition).style.backgroundColor = "green";
		} else {
			document.getElementById(winningPosition).style.backgroundColor = "yellow";
		}
	}
}

function clickButtonX() {
	player1Choice = "X";
	player2Choice = "O";

	document.getElementById("buttonx_choice").innerHTML = "<h3>Player 1</h3>";
	document.getElementById("player-selection-button-x").style.backgroundColor = "green";
	document.getElementById("buttono_choice").innerHTML = "<h3>Player 2</h3>";
	document.getElementById("player-selection-button-o").style.backgroundColor = "white";
}

function clickButtonO() {
	player1Choice = "O";
	player2Choice = "X";

	document.getElementById("buttonx_choice").innerHTML = "<h3>Player 2</h3>";
	document.getElementById("player-selection-button-x").style.backgroundColor = "white";
	document.getElementById("buttono_choice").innerHTML = "<h3>Player 1</h3>";
	document.getElementById("player-selection-button-o").style.backgroundColor = "green";
}

function setCurrentChoice() {
	if(currentChoice === "X") {
		currentChoice = "O";
	} else {
		currentChoice = "X";
	}
	showActivePlayer();
}

function showActivePlayer() {
	if (player1Choice === currentChoice) {
		document.getElementById("current-player").innerHTML = "Player 1 Go! (" + player1Choice + ")";	
	} else {
		document.getElementById("current-player").innerHTML = "Player 2 Go! (" + player2Choice + ")";
	}
	
}
	
function startGame() {
	if(player1Choice === "" && player2Choice === "" ) {
		alertMessage("Please select an option first!!!", 700);
	} else {
			roundEnded = false;
			document.body.innerHTML = gamePageHTML;
			currentChoice = player1Choice;
			showActivePlayer();
			setPlayerScores();
			initializeBoardHandlers();
	}
}

function getBoardValues() {
	for(let i = 0; i < gameBoard.length; i++) {
		gameBoard[i] = document.getElementById("position-" +i).innerHTML;
	}
	console.log(gameBoard[0]);
}

function playerTurn0() {
	if (!roundEnded) {
		if (document.getElementById("position-0").innerHTML !== " ") {
			alertMessage("Invalid Selection!!!", 700);
		} else {
			document.getElementById("position-0").innerHTML = currentChoice;
			if (isEndRound() === false) {
				setCurrentChoice();
			}
		}
	}
}	

function playerTurn1() {
	if (!roundEnded) {
		if (document.getElementById("position-1").innerHTML !== " ") {
			alertMessage("Invalid Selection!!!", 700);
		} else {
			document.getElementById("position-1").innerHTML = currentChoice;
			if (isEndRound() === false) {
				setCurrentChoice();
			}
		}
	}
}	

function playerTurn2() {
	if (!roundEnded) {
		if (document.getElementById("position-2").innerHTML !== " ") {
			alertMessage("Invalid Selection!!!", 700);
		} else {
			document.getElementById("position-2").innerHTML = currentChoice;
			if (isEndRound() === false) {
				setCurrentChoice();
			}
		}
	}
}	

function playerTurn3() {
	if (!roundEnded) {
		if (document.getElementById("position-3").innerHTML !== " ") {
			alertMessage("Invalid Selection!!!", 700);
		} else {
			document.getElementById("position-3").innerHTML = currentChoice;
			if (isEndRound() === false) {
				setCurrentChoice();
			}
		}
	}
}	

function playerTurn4() {
	if (!roundEnded) {
		if (document.getElementById("position-4").innerHTML !== " ") {
			alertMessage("Invalid Selection!!!", 700);
		} else {
			document.getElementById("position-4").innerHTML = currentChoice;
			if (isEndRound() === false) {
				setCurrentChoice();
			}
		}
	}
}	


function playerTurn5() {
	if (!roundEnded) {
		if (document.getElementById("position-5").innerHTML !== " ") {
			alertMessage("Invalid Selection!!!", 700);
		} else {
			document.getElementById("position-5").innerHTML = currentChoice;
			if (isEndRound() === false) {
				setCurrentChoice();
			}
		}
	}
}	


function playerTurn6() {
	if (!roundEnded) {
		if (document.getElementById("position-6").innerHTML !== " ") {
			alertMessage("Invalid Selection!!!", 700);
		} else {
			document.getElementById("position-6").innerHTML = currentChoice;
			if (isEndRound() === false) {
				setCurrentChoice();
			}
		}
	}
}	

function playerTurn7() {
	if (!roundEnded) {
		if (document.getElementById("position-7").innerHTML !== " ") {
			alertMessage("Invalid Selection!!!", 700);
		} else {
			document.getElementById("position-7").innerHTML = currentChoice;
			if (isEndRound() === false) {
				setCurrentChoice();
			}
		}
	}
}	


function playerTurn8() {
	if (!roundEnded) {
		if (document.getElementById("position-8").innerHTML !== " ") {
			alertMessage("Invalid Selection!!!", 700);
		} else {
			document.getElementById("position-8").innerHTML = currentChoice;
			if (isEndRound() === false) {
				setCurrentChoice();
			}
		}
	}
}	


//Initializes event handlers for the main board positions after they've loaded
function initializeBoardHandlers() {
	let handleBoardClick0 = document.getElementById("position-0");
	handleBoardClick0.addEventListener('click', playerTurn0);

	let handleBoardClick1 = document.getElementById("position-1");
	handleBoardClick1.addEventListener('click', playerTurn1);

	let handleBoardClick2 = document.getElementById("position-2");
	handleBoardClick2.addEventListener('click', playerTurn2);

	let handleBoardClick3 = document.getElementById("position-3");
	handleBoardClick3.addEventListener('click', playerTurn3);

	let handleBoardClick4 = document.getElementById("position-4");
	handleBoardClick4.addEventListener('click', playerTurn4);

	let handleBoardClick5 = document.getElementById("position-5");
	handleBoardClick5.addEventListener('click', playerTurn5);

	let handleBoardClick6 = document.getElementById("position-6");
	handleBoardClick6.addEventListener('click', playerTurn6);

	let handleBoardClick7 = document.getElementById("position-7");
	handleBoardClick7.addEventListener('click', playerTurn7);

	let handleBoardClick8 = document.getElementById("position-8");
	handleBoardClick8.addEventListener('click', playerTurn8);
}

function isEndRound() {
	getBoardValues();
	winner = ""

	if (gameBoard[0] !== " " && gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2]) {
		highlightWinningPositions([0, 1, 2]);
		roundEnded = true;
		winner = currentChoice;
	} else if (gameBoard[3] !== " " && gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5]) {
		highlightWinningPositions([3, 4, 5]);
		roundEnded = true;
		winner = currentChoice;
	} else if (gameBoard[6] !== " " && gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8]) {
		highlightWinningPositions([6, 7, 8]);
		roundEnded = true;
		winner = currentChoice;
	} else if (gameBoard[0] !== " " && gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6]) {
		highlightWinningPositions([0, 3, 6]);
		roundEnded = true;
		winner = currentChoice;
	} else if (gameBoard[1] !== " " && gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7]) {
		highlightWinningPositions([1, 4, 7]);
		roundEnded = true;
		winner = currentChoice;
	} else if (gameBoard[2] !== " " && gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8]) {
		highlightWinningPositions([2, 5, 8]);
		roundEnded = true;
		winner = currentChoice;
	} else if (gameBoard[0] !== " " && gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8]) {
		highlightWinningPositions([0, 4, 8]);
		roundEnded = true;
		winner = currentChoice;
	} else if (gameBoard[2] !== " " && gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6]) {
		highlightWinningPositions([2, 4, 6]);
		roundEnded = true;
		winner = currentChoice;
	} else if (!gameBoard.includes(" ")) {
		highlightWinningPositions([0, 1, 2, 3, 4, 5, 6, 7, 8]);
		roundEnded = true;
		winnner = "XO"
	}

	if (roundEnded === true) {
		if (player1Choice === winner) {
			alertMessage("Player 1 Wins!!!", 3000);
			player1Score += 1;
			setTimeout(startGame, 3000);
		} else if (player2Choice === winner) {
			alertMessage("Player 2 Wins!!!", 3000);
			player2Score += 1;
			setTimeout(startGame, 3000);			
		} else {				
			alertMessage("Everybody loses!!!", 3000);
			setTimeout(startGame, 3000);
		}
		return true;
	} else {
		return false;
	}
}

//-------------------------------------------------------------------------------------------------------Event Handlers-------------
let handleClickButtonX = document.getElementById("player-selection-button-x");
handleClickButtonX.addEventListener('click', clickButtonX);

let handleClickButtonO = document.getElementById("player-selection-button-o");
handleClickButtonO.addEventListener('click', clickButtonO);

let handleStartGame = document.getElementById("start-game-button");
handleStartGame.addEventListener('click', startGame);



