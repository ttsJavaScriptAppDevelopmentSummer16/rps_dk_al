var player1 = "Dustin";
var player2 = "Alex";

var player1Wins = 0;
var player2Wins = 0;

var round = 1;

var weapons = ["rock", "paper", "scissors"];

console.log("Hello " + player1 + " and " + player2 + ", let's play Rock, Paper, Scissors.");
console.log("Best out of three wins!");
console.log("");

while (player1Wins < 3 && player2Wins < 3) {

	var weaponOfChoice = weapons[parseInt(Math.random()*weapons.length) %3];
	var player1Throws = weaponOfChoice;

	var weaponOfChoice = weapons[parseInt(Math.random()*weapons.length) %3];
	var player2Throws = weaponOfChoice;

	// if (round < 4) {
		console.log("*** Round " + round + " ***");
	// }

	console.log(player1 + " throws " + player1Throws);
	console.log(player2 + " throws " + player2Throws);


	if (player1Throws === "rock" && player2Throws === "rock") {
		console.log("It's a tie!");
	} else if (player1Throws === "rock" && player2Throws === "paper") {
		console.log(player2 + " wins this round!");
		player2Wins += 1;
	} else if (player1Throws === "rock" && player2Throws === "scissors") {
		console.log(player1 + " wins this round!");
		player1Wins += 1;

	} else if (player1Throws === "paper" && player2Throws === "rock") {
		console.log(player1 + " wins this round!");
		player1Wins += 1;
	} else if (player1Throws === "paper" && player2Throws === "paper") {
		console.log("It's a tie!");
	} else if (player1Throws === "paper" && player2Throws === "scissors") {
		console.log(player2 + " wins this round!");
		player2Wins += 1;

	} else if (player1Throws === "scissors" && player2Throws === "rock") {
		console.log(player2 + " wins this round!");
		player2Wins += 1;
	} else if (player1Throws === "scissors" && player2Throws === "paper") {
		console.log(player1 + " wins this round!");
		player1Wins += 1;
	} else if (player1Throws === "scissors" && player2Throws === "scissors") {
		console.log("It's a tie!");
	} else {
		console.log("test");
	}

	console.log("Score: " + player1 + ": " + player1Wins + " -- " + player2 + ": " + player2Wins);
	console.log("");
	round += 1;
}

if (player1Wins === 3 ) {
	console.log(player1 + " won! Thanks for playing!");
} else {
	console.log(player2 + " won! Thanks for playing!");
}