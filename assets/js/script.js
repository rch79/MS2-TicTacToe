console.log("script test");

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

function clickButtonO() {
	player_1 = "O";
	player_2 = "X";

	document.getElementById("buttonx_choice").innerHTML = "<h3>Player 2</h3>"
	document.getElementById("buttono_choice").innerHTML = "<h3>Player 1</h3>"

	console.log(player_1);
	console.log(player_2);
}

console.log(player_1);

let buttonX = document.getElementById("player-selection-X");
buttonX.addEventListener('click', clickButtonX);

let buttonO = document.getElementById("player-selection-O");
buttonO.addEventListener('click', clickButtonO);