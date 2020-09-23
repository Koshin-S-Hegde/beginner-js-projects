let board = [ [' ', ' ', ' '],
	[' ', ' ', ' '],
	[' ', ' ', ' '] ];

let currentPlayer;

let board_position;

let i, j;

const printBoardPositions = () => {
	console.clear();
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

const markerExists = (i, j) => {
	return(board[i][j] !== ' '); // checks to see if a marker has already been placed
}

const placeMarker = () => {
	let position = parseInt(prompt('Please enter the position you would like to place your marker, 1-9\n 1 2 3\n 4 5 6\n 7 8 9'));
	/* 1 2 3
	   4 5 6
	   7 8 9 */
	switch (position) {
		case 1:
			i = 0;
			j = 0;
			break;
		case 2:
			i = 0;
			j = 1;
			break;
		case 3:
			i = 0;
			j = 2;
			break;
		case 4:
			i = 1;
			j = 0;
			break;
		case 5:
			i = 1;
			j = 1;
			break;
		case 6:
			i = 1;
			j = 2;
			break;
		case 7:
			i = 2;
			j = 0;
			break;
		case 8:
			i = 2;
			j = 1;
			break;
		case 9:
			i = 2;
			j = 2;
			break;
		default:
			placeMarker();
			break;
	}
	if (markerExists(i, j)) {
		placeMarker();
	} else {
		board[i][j] = currentPlayer;
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
