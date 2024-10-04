const players = [{
    name: 'playerOneName',
    token: 'X'
}, {
    name: 'playerTwoName',
    token: 'O'
}];

const row = 3;
const column = 3;
let board = [];

const createBoard = () => {
    for (let i = 0; i < row; i++) {
        board[i] = []
        for (let j = 0; j < column; j++) {
            board[i].push(Cell())
        }
    }
}

const getBoard = () => board;

const printBoard = () => {
        //call getValue on all tiles, put them into an array, and console.table the result
        let logBoard = [];
        for (let i = 0; i < row; i++) {
            logBoard[i] = []
            for (let j = 0; j < column; j++) {
                logBoard[i].push(board[i][j].getValue())
            }
            
        } console.table(logBoard)
    }

const checkBoard = (row, column, activePlayer) => {
    if (board[row][column].getValue() === 0) {
        board[row][column].setToken(activePlayer.token)
    } else {
        console.log('Square is occupied, please select a different square.')
    }
}


//createBoard creates a 2d array, 9x9, and assigns Cell to each square, that will let us manipulate the array to play tic tac toe.

function Gameboard() {
    const row = 3;
    const column = 3;
    let board = [];

    const createBoard = () => {
        for (let i = 0; i < row; i++) {
            board[i] = []
            for (let j = 0; j < column; j++) {
                board[i].push(Cell())
            }
        }
    }

    const getBoard = () => board;

    const printBoard = () => {
        //call getValue on all tiles, put them into an array, and console.table the result
        for (let i = 0; i < row; i++) {
            logBoard[i] = []
            for (let j = 0; j < column; j++) {
                logBoard[i].push(board[i][j].getValue())
            }
            console.table(logBoard)
        }
    }

    const checkBoard = (row, column, activePlayer) => {
        if (!board[row][column].getValue() === 0) {
            board[row][column].setToken(activePlayer.token)
        } else {
            console.log('Square is occupied, please select a different square.')
        }
    }

    return { getBoard, printBoard, checkBoard }
}

function Cell() {
    let value = 0;

    const getValue = () => value;

    const setToken = (playerToken) => {
        value = playerToken
    }
    return { getValue, setToken }
}

function Gamestate(playerOneName = 'playerOne', playerTwoName = 'playerTwo') {

    const players = [{
        name: playerOneName,
        token: 'X'
    }, {
        name: playerTwoName,
        token: 'O'
    }];

    const activePlayer = players[0]

    const board = Gameboard()

    const switchActivePlayer = () => { };

    const printNewRound = () => { };

    const getActivePlayer = () => { };

    const playRound = (row, column) => { };

    const checkWin = () => {
        //call getValue on tiles to check for winning layouts
    };
    return { playRound }
}