console.log("script test");
//--------------------------------------------------------Start page and game page HTML code--------------

let start_page_html = `
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

let game_page_html = `
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
            <div class="box">X</div>
            <div class="box">O</div>
            <div class="box">O</div>
            <div class="box">O</div>
            <div class="box">X</div>
            <div class="box">O</div>
            <div class="box">O</div>
            <div class="box">X</div>
            <div class="box">X</div>
        </div> 
    </section>
    <script src="assets/js/script.js"></script>`;


//--------------------------------------------------------Main variables--------------
let player_1 = "";
let player_2 = "";

function clickButtonX() {
	console.log("button clicked!!!!!!")
	player_1 = "X";
	player_2 = "O";

	document.getElementById("buttonx_choice").innerHTML = "<h3>Player 1</h3>"
	document.getElementById("buttono_choice").innerHTML = "<h3>Player 2</h3>"


	console.log(player_1);
	console.log(player_2);
}

//--------------------------------------------------------Functions--------------

function clickButtonO() {
	player_1 = "O";
	player_2 = "X";

	document.getElementById("buttonx_choice").innerHTML = "<h3>Player 2</h3>"
	document.getElementById("buttono_choice").innerHTML = "<h3>Player 1</h3>"

	console.log(player_1);
	console.log(player_2);
}

function generateGameHTML() {
	document.body.innerHTML = game_page_html;
}


//--------------------------------------------------------Event Listeners--------------
let buttonX = document.getElementById("player-selection-X");
buttonX.addEventListener('click', clickButtonX);

let buttonO = document.getElementById("player-selection-O");
buttonO.addEventListener('click', clickButtonO);

let start_game = document.getElementById("start-game-button");
start_game.addEventListener('click', generateGameHTML);