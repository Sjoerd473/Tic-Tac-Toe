//createBoard creates a 2d array, 9x9, and assigns Cell to each square, that will let us manipulate the array to play tic tac toe.

function Gameboard(){
    const row = 3;
    const column = 3;
    let board = [];

    const createBoard = () => {
        for (let i = 0; i < row; i++){
            board[i] = []
            for(let j = 0; j < column; j++){
                board[i].push(Cell())
            }
        }
    }

    const getBoard = () => board;

    const printBoard = () => {
        console.log(board)
    }

    const checkBoard = () => {
        console.log('walk the board')
    }

    return {getBoard, printBoard, checkBoard}
}

function Cell(){
    let value = 0;

    const getValue = () =>  value;

    const setToken = () => {
        console.log('boop')
    }
    return {getValue, setToken}
}

function Gamestate(playerOneName = 'playerOne', playerTwoName = 'playerTwo'){

    const players = [{
        name : playerOneName,
        token: 'X'
    },{
        name: playerTwoName,
        token: 'O'
    }];

    const activePlayer = players[0]

    const board = Gameboard()

    const switchActivePlayer = () => {};

    const printNewRound = () => {};

    const getActivePlayer = () => {};

    const playRound = (row,column) => {};
    return {playRound}
}