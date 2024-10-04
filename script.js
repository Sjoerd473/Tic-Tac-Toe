// const players = [{
//     name: 'playerOneName',
//     token: 'X'
// }, {
//     name: 'playerTwoName',
//     token: 'O'
// }];

// const row = 3;
// const column = 3;
// let board = [];

// const createBoard = () => {
//     for (let i = 0; i < row; i++) {
//         board[i] = []
//         for (let j = 0; j < column; j++) {
//             board[i].push(Cell())
//         }
//     }
// }

// const getBoard = () => board;

// const printBoard = () => {
//         //call getToken on all tiles, put them into an array, and console.table the result
//         let logBoard = [];
//         for (let i = 0; i < row; i++) {
//             logBoard[i] = []
//             for (let j = 0; j < column; j++) {
//                 logBoard[i].push(board[i][j].getToken())
//             }

//         } console.table(logBoard)
//     }

// const placeToken = (row, column, activePlayer) => {
//     if (board[row][column].getToken() === 0) {
//         board[row][column].setToken(activePlayer.token)
//     } else {
//         console.log('Square is occupied, please select a different square.')
//     }
// }


//createBoard creates a 2d array, 9x9, and assigns Cell to each square, that will let us manipulate the array to play tic tac toe.

function Gameboard() {
    const row = 3;
    const column = 3;
    let board = [];
    let logBoard = [];

    for (let i = 0; i < row; i++) {
        board[i] = []
        for (let j = 0; j < column; j++) {
            board[i].push(Cell())
        }
    }


    const getBoard = () => logBoard;

    const newBoard = () => {
        for (let i = 0; i < row; i++) {
            board[i] = []
            for (let j = 0; j < column; j++) {
                board[i].push(Cell())
            }
        }
    }

    const printBoard = () => {

        //call getToken on all tiles, put them into an array, and console.table the result
        for (let i = 0; i < row; i++) {
            logBoard[i] = []
            for (let j = 0; j < column; j++) {
                logBoard[i].push(board[i][j].getToken())
            }

        } console.table(logBoard)
    }

    const placeToken = (row, column, activePlayer) => {
        if (board[row][column].getToken() === 0) {
            board[row][column].setToken(activePlayer.token)
        } else {
            console.log('Square is occupied, please select a different square.')
            return;
        }
    }

    return { getBoard, printBoard, placeToken, newBoard }
}

function Cell() {
    let token = 0;

    const getToken = () => token;

    const setToken = (playerToken) => {
        token = playerToken
    }
    return { getToken, setToken }
}

function Gamestate(playerOneName = 'playerOne', playerTwoName = 'playerTwo') {

    const players = [{
        name: playerOneName,
        token: 'X'
    }, {
        name: playerTwoName,
        token: 'O'
    }];

    let activePlayer = players[0]

    const board = Gameboard()

    const switchActivePlayer = () => {
     /* activePlayer = */  activePlayer === players[0] ? activePlayer = players[1] : activePlayer = players[0];
    };

    const printNewRound = () => {
        board.printBoard()
        console.log(`It is currently ${getActivePlayer().name}'s turn to place a token`)

    };

    const endGame = () => {
        board.newBoard()
    }

    const getActivePlayer = () => activePlayer;

    const playRound = (row, column) => {
        board.placeToken(row, column, activePlayer)
        if (checkWin() === 'win') {
            console.log(`${getActivePlayer().name} wins the round!`)
            endGame();
        } else if (checkWin() === 'tie') {
            console.log('The game ends in a tie.')
            endGame()
        } else {
            switchActivePlayer();
            printNewRound();
        }
    }
        ;

    const checkWin = () => {
        const winBoard = board.getBoard();
        if (winBoard.flat().includes(0) === false) {
            return 'tie'
        }
        else if (winBoard[0][0] === 'X' && winBoard[0][1] === 'X' && winBoard[0][2] === 'X') {
            // horizontal top
            return 'win';
        } else if (winBoard[1][0] === 'X' && winBoard[1][1] === 'X' && winBoard[1][2] === 'X') {
            // horizontal middle
            return 'win';
        } else if (winBoard[2][0] === 'X' && winBoard[2][1] === 'X' && winBoard[2][2] === 'X') {
            //horizontal bottom
            return 'win';
        } else if (winBoard[0][0] === 'X' && winBoard[1][0] === 'X' && winBoard[2][0] === 'X') {
            // vertical start
            return 'win';
        } else if (winBoard[0][1] === 'X' && winBoard[1][1] === 'X' && winBoard[2][1] === 'X') {
            //vertical middle
            return 'win';
        } else if (winBoard[0][2] === 'X' && winBoard[1][2] === 'X' && winBoard[2][2] === 'X') {
            // vertical end
            return 'win';
        } else if (winBoard[0][0] === 'X' && winBoard[1][1] === 'X' && winBoard[2][2] === 'X') {
            //diagonal top left to bottom right
            return 'win';
        } else if (winBoard[0][2] === 'X' && winBoard[1][1] === 'X' && winBoard[2][0] === 'X') {
            // diagonal bottom left to top right
            return 'win';
        } else if (winBoard[0][0] === 'O' && winBoard[0][1] === 'O' && winBoard[0][2] === 'O') {
            // horizontal top
            return 'win';
        } else if (winBoard[1][0] === 'O' && winBoard[1][1] === 'O' && winBoard[1][2] === 'O') {
            // horizontal middle
            return 'win';
        } else if (winBoard[2][0] === 'O' && winBoard[2][1] === 'O' && winBoard[2][2] === 'O') {
            //horizontal bottom
            return 'win';
        } else if (winBoard[0][0] === 'O' && winBoard[1][0] === 'O' && winBoard[2][0] === 'O') {
            // vertical start
            return 'win';
        } else if (winBoard[0][1] === 'O' && winBoard[1][1] === 'O' && winBoard[2][1] === 'O') {
            //vertical middle
            return 'win';
        } else if (winBoard[0][2] === 'O' && winBoard[1][2] === 'O' && winBoard[2][2] === 'O') {
            // vertical end
            return 'win';
        } else if (winBoard[0][0] === 'O' && winBoard[1][1] === 'O' && winBoard[2][2] === 'O') {
            //diagonal top left to bottom right
            return 'win';
        } else if (winBoard[0][2] === 'O' && winBoard[1][1] === 'O' && winBoard[2][0] === 'O') {
            // diagonal bottom left to top right
            return 'win';
        }


        //call getToken on tiles to check for winning layouts
    };




    printNewRound()
    return { playRound }
}