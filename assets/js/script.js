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
            <div class="box" id="position-0"></div>
            <div class="box" id="position-1"></div>
            <div class="box" id="position-2"></div>
            <div class="box" id="position-3"></div>
            <div class="box" id="position-4"></div>
            <div class="box" id="position-5"></div>
            <div class="box" id="position-6"></div>
            <div class="box" id="position-7"></div>
            <div class="box" id="position-8"></div>
        </div> 
    </section>
    <script src="assets/js/script.js"></script>`;


//--------------------------------------------------------Main variables--------------
let player_1 = "";
let player_2 = "";

//--------------------------------------------------------Functions-------------------
function clickButtonX() {
	player_1 = "X";
	player_2 = "O";

	document.getElementById("buttonx_choice").innerHTML = "<h3>Player 1</h3>";
	document.getElementById("buttono_choice").innerHTML = "<h3>Player 2</h3>";
}

function clickButtonO() {
	player_1 = "O";
	player_2 = "X";

	document.getElementById("buttonx_choice").innerHTML = "<h3>Player 2</h3>";
	document.getElementById("buttono_choice").innerHTML = "<h3>Player 1</h3>";
}

function generateGameHTML() {
	if(player_1 == "" && player_2 == "" ) {
		window.alert("Please select an option first");
	} else {
			document.body.innerHTML = gamePageHTML;
	}
}


//--------------------------------------------------------Event Listeners-------------
let buttonX = document.getElementById("player-selection-X");
buttonX.addEventListener('click', clickButtonX);

let buttonO = document.getElementById("player-selection-O");
buttonO.addEventListener('click', clickButtonO);

let startGame = document.getElementById("start-game-button");
startGame.addEventListener('click', generateGameHTML);