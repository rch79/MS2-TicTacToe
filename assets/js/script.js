//--------------------------------------------------------Start page and game page HTML code-----

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
    <section id="player-scores-div">
        <div id="player-scores-text">
            <h2>Scores</h2>
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


//--------------------------------------------------------Main variables--------------
let player1Choice = "";
let player2Choice = "";
let currentChoice = "";
let gameBoard = [" "," "," "," "," "," "," "," "," "];

//--------------------------------------------------------Functions-------------------
function clickButtonX() {
	player1Choice = "X";
	player2Choice = "O";

	document.getElementById("buttonx_choice").innerHTML = "<h3>Player 1</h3>";
	document.getElementById("buttono_choice").innerHTML = "<h3>Player 2</h3>";
}

function clickButtonO() {
	player1Choice = "O";
	player2Choice = "X";

	document.getElementById("buttonx_choice").innerHTML = "<h3>Player 2</h3>";
	document.getElementById("buttono_choice").innerHTML = "<h3>Player 1</h3>";
}

function setCurrentChoice() {
	if(currentChoice == "X") {
		currentChoice = "O";
	} else {
		currentChoice = "X";
	}
}
	
function startGame() {
	if(player1Choice == "" && player2Choice == "" ) {
		window.alert("Please select an option first");
	} else {
			document.body.innerHTML = gamePageHTML;
			
			currentChoice = player1Choice;
			getBoardValues();

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
	if (document.getElementById("position-0").innerHTML != " ") {
		window.alert("Invalid selection!")
	} else {
		console.log("hello!");
		console.log("this is " + gameBoard[0])
		document.getElementById("position-0").innerHTML = currentChoice;
		isVictory();
		setCurrentChoice();
	}
}

function playerTurn1() {
	if (document.getElementById("position-1").innerHTML != " ") {
		window.alert("Invalid selection!")
	} else {
		console.log("hello!");
		console.log("this is " + gameBoard[1])
		document.getElementById("position-1").innerHTML = currentChoice;
		isVictory();
		setCurrentChoice();
	}
}

function playerTurn2() {
	if (document.getElementById("position-2").innerHTML != " ") {
		window.alert("Invalid selection!")
	} else {
		console.log("hello!");
		console.log("this is " + gameBoard[2])
		document.getElementById("position-2").innerHTML = currentChoice;
		isVictory();
		setCurrentChoice();
	}
}

function playerTurn3() {
	if (document.getElementById("position-3").innerHTML != " ") {
		window.alert("Invalid selection!")
	} else {
		console.log("hello!");
		console.log("this is " + gameBoard[3])
		document.getElementById("position-3").innerHTML = currentChoice;
		isVictory();
		setCurrentChoice();
	}
}

function playerTurn4() {
	if (document.getElementById("position-4").innerHTML != " ") {
		window.alert("Invalid selection!")
	} else {
		console.log("hello!");
		console.log("this is " + gameBoard[4])
		document.getElementById("position-4").innerHTML = currentChoice;
		isVictory();
		setCurrentChoice();
	}
}

function playerTurn5() {
	if (document.getElementById("position-5").innerHTML != " ") {
		window.alert("Invalid selection!")
	} else {
		console.log("hello!");
		console.log("this is " + gameBoard[5])
		document.getElementById("position-5").innerHTML = currentChoice;
		isVictory();
		setCurrentChoice();
	}
}

function playerTurn6() {
	if (document.getElementById("position-6").innerHTML != " ") {
		window.alert("Invalid selection!")
	} else {
		console.log("hello!");
		console.log("this is " + gameBoard[6])
		document.getElementById("position-6").innerHTML = currentChoice;
		isVictory();
		setCurrentChoice();
	}
}

function playerTurn7() {
	if (document.getElementById("position-7").innerHTML != " ") {
		window.alert("Invalid selection!")
	} else {
		console.log("hello!");
		console.log("this is " + gameBoard[7])
		document.getElementById("position-7").innerHTML = currentChoice;
		isVictory();
		setCurrentChoice();
	}
}

function playerTurn8() {
	if (document.getElementById("position-8").innerHTML != " ") {
		window.alert("Invalid selection!")
	} else {
		console.log("hello!");
		console.log("this is " + gameBoard[8])
		document.getElementById("position-8").innerHTML = currentChoice;
		isVictory();
		setCurrentChoice();
	}
}


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

function isVictory() {
	getBoardValues();
	let victory = false;
	let winner = ""

	if(gameBoard[0] != " " && gameBoard[0] == gameBoard[1] && gameBoard[0] == gameBoard[2]) {
		winner = gameBoard[0];
		victory = true;
			
	}

	if(victory) {
		if(player1Choice == winner) {
			window.alert("Player 1 Wins!!!");
		} else {
			window.alert("Player 2 Wins!!!!");
		}
		return true;	
	} else {
		return false;
	}
}

//--------------------------------------------------------Event Handlers-------------
let handleClickButtonX = document.getElementById("player-selection-X");
handleClickButtonX.addEventListener('click', clickButtonX);

let handleClickButtonO = document.getElementById("player-selection-O");
handleClickButtonO.addEventListener('click', clickButtonO);

let handleStartGame = document.getElementById("start-game-button");
handleStartGame.addEventListener('click', startGame);



