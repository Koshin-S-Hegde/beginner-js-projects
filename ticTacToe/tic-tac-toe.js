let board = [ [' ', ' ', ' '],
	[' ', ' ', ' '],
	[' ', ' ', ' '] ];

let currentPlayer;

let board_position;

const printBoardPositions = () => {
	console.log('Here is the current board...');
	// prints positions for user
	let currentNumber = 1;
	for (let i = 0; i < board.length; i++) {
		board_position = '';
		for (let j = 0; j < board[i].length; j++) {
			board_position += board[i][j] + ' ';
			currentNumber += 1;
		}
		console.log(board_position);
	}
}

const markerExists = () => {
	// checks to see if a marker has already been placed
}

const placeMarker = () => {
	let position = parseInt(prompt('Please enter the position you would like to place your marker, 1-9\n 1 2 3\n 4 5 6\n 7 8 9'));
	/* 1 2 3
	   4 5 6
	   7 8 9 */
	switch (position) {
		case 1:
			board[0][0] = currentPlayer;
			break;
		case 2:
			board[0][1] = currentPlayer;
			break;
		case 3:
			board[0][2] = currentPlayer;
			break;
		case 4:
			board[1][0] = currentPlayer;
			break;
		case 5:
			board[1][1] = currentPlayer;
			break;
		case 6:
			board[1][2] = currentPlayer;
			break;
		case 7:
			board[2][0] = currentPlayer;
			break;
		case 8:
			board[2][1] = currentPlayer;
			break;
		case 9:
			board[2][2] = currentPlayer;
			break;
		default:
			placeMarker();
			break;
	}
	
	
}

const switchPlayer = () => {
	if (currentPlayer === 'X') {
		currentPlayer = 'O';
	} else {
		currentPlayer = 'X';
	}
}

const gameWon = () => {
	// checks to see if any markers span three consecutive cells
	// returns true if won, false otherwise
}

const playGame = () => {
	currentPlayer = Math.random() > 0.5 ? 'X' : 'O'; // Chooses the opening player by random
	while (!gameWon()) {	// Runs the game till someone wins
		printBoardPositions();
		placeMarker();
		switchPlayer();
	}
console.log(`Player ${currentPlayer} won!`);
}

playGame();
