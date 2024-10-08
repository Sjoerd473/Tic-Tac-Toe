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

        } return logBoard
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
    
    const setName = (playerOneName, playerTwoName) => {
        let one = playerOneName
        let two = playerTwoName
        return one, two;
    }

    const switchActivePlayer = () => {
     /* activePlayer = */  activePlayer === players[0] ? activePlayer = players[1] : activePlayer = players[0];
    };

    const printNewRound = () => {
        console.table(board.printBoard())
        console.log(`It is currently ${getActivePlayer().name}'s turn to place a token`)

    };

    const endGame = (outcome) => {
        const dialog = document.querySelector('.modal')
        const winText = document.querySelector('.modal > h1')
        const newGameBtn = document.querySelector('.win')
        const closeBtn = document.querySelector('.close')
        
        
        newGameBtn.addEventListener('click',() => window.location.reload());
        
        closeBtn.addEventListener('click', () => dialog.close());

        dialog.showModal()
        if (outcome === 'win'){
        winText.textContent = `${getActivePlayer().name} wins the round!`
        } else if (outcome === 'tie'){
            winText.textContent = `The game ends in a draw!`
        }
    }

    

    const getActivePlayer = () => activePlayer;

    const playRound = (row, column) => {
        board.placeToken(row, column, activePlayer)
        
            checkWin();
            switchActivePlayer();
            
            printNewRound();
            
        
        
    };

   
    const checkWin = () => {
        const winBoard = board.printBoard();
        console.table(board.getBoard());
        if (winBoard.flat().includes(0) === false) {
            endGame('tie');
            return 'tie'
        }
        else if (winBoard[0][0] === 'X' && winBoard[0][1] === 'X' && winBoard[0][2] === 'X') {
            // horizontal top
            console.log(`${getActivePlayer().name} wins the round!`)
            endGame('win');
            return 'win';
        } else if (winBoard[1][0] === 'X' && winBoard[1][1] === 'X' && winBoard[1][2] === 'X') {
            // horizontal middle
            endGame('win')
            return 'win';
        } else if (winBoard[2][0] === 'X' && winBoard[2][1] === 'X' && winBoard[2][2] === 'X') {
            //horizontal bottom
            endGame('win')
            return 'win';
        } else if (winBoard[0][0] === 'X' && winBoard[1][0] === 'X' && winBoard[2][0] === 'X') {
            // vertical start
            endGame('win')
            return 'win';
        } else if (winBoard[0][1] === 'X' && winBoard[1][1] === 'X' && winBoard[2][1] === 'X') {
            //vertical middle
            endGame('win')
            return 'win';
        } else if (winBoard[0][2] === 'X' && winBoard[1][2] === 'X' && winBoard[2][2] === 'X') {
            // vertical end
            endGame('win')
            return 'win';
        } else if (winBoard[0][0] === 'X' && winBoard[1][1] === 'X' && winBoard[2][2] === 'X') {
            //diagonal top left to bottom right
            endGame('win')
            return 'win';
        } else if (winBoard[0][2] === 'X' && winBoard[1][1] === 'X' && winBoard[2][0] === 'X') {
            // diagonal bottom left to top right
            endGame('win')
            return 'win';
        } else if (winBoard[0][0] === 'O' && winBoard[0][1] === 'O' && winBoard[0][2] === 'O') {
            // horizontal top
            endGame('win')
            return 'win';
        } else if (winBoard[1][0] === 'O' && winBoard[1][1] === 'O' && winBoard[1][2] === 'O') {
            // horizontal middle
            endGame('win')
            return 'win';
        } else if (winBoard[2][0] === 'O' && winBoard[2][1] === 'O' && winBoard[2][2] === 'O') {
            //horizontal bottom
            endGame('win')
            return 'win';
        } else if (winBoard[0][0] === 'O' && winBoard[1][0] === 'O' && winBoard[2][0] === 'O') {
            // vertical start
            endGame('win')
            return 'win';
        } else if (winBoard[0][1] === 'O' && winBoard[1][1] === 'O' && winBoard[2][1] === 'O') {
            //vertical middle
            endGame('win')
            return 'win';
        } else if (winBoard[0][2] === 'O' && winBoard[1][2] === 'O' && winBoard[2][2] === 'O') {
            // vertical end
            endGame('win')
            return 'win';
        } else if (winBoard[0][0] === 'O' && winBoard[1][1] === 'O' && winBoard[2][2] === 'O') {
            //diagonal top left to bottom right
            endGame('win')
            return 'win';
        } else if (winBoard[0][2] === 'O' && winBoard[1][1] === 'O' && winBoard[2][0] === 'O') {
            // diagonal bottom left to top right
            endGame('win')
            return 'win';
        } else {return ''};


        //call getToken on tiles to check for winning layouts
    };




    printNewRound()
    return { playRound, getActivePlayer,setName }
}

function displayController(){

    const board=Gameboard();

    const state=Gamestate();

    const nameOne = 'dave'
    const nameTwo = ' harry'
    let activePlayer = state.getActivePlayer();

    const activateTiles = () => {
        let tiles = document.querySelectorAll('[data-tile]');
        tiles[0].addEventListener('click', (e) => {
            changeText(e.target)
            state.playRound(0, 0)
            deactivateTile(e.target);
            
                
        })
        tiles[1].addEventListener('click', (e) => {
            changeText(e.target) 
            state.playRound(0, 1)
            deactivateTile(e.target);
               
        })
        tiles[2].addEventListener('click', (e) => {
            changeText(e.target)
            state.playRound(0, 2)
            deactivateTile(e.target);
                
        })
        tiles[3].addEventListener('click', (e) => {
            changeText(e.target)
            state.playRound(1, 0)
            deactivateTile(e.target);
                
        })
        tiles[4].addEventListener('click', (e) => {
            changeText(e.target)
            state.playRound(1, 1)
            deactivateTile(e.target);
                
        })
        tiles[5].addEventListener('click', (e) => {
            changeText(e.target)
            state.playRound(1, 2)
            deactivateTile(e.target);
                
        })
        tiles[6].addEventListener('click', (e) => {
            changeText(e.target)
            state.playRound(2, 0)
            deactivateTile(e.target);
                
        })
        tiles[7].addEventListener('click', (e) => {
            changeText(e.target)
            state.playRound(2, 1)
            deactivateTile(e.target);
                
        })
        tiles[8].addEventListener('click', (e) => {
            changeText(e.target) 
            state.playRound(2, 2)
            deactivateTile(e.target);
               
        })
    
   
}
    const startButtonActivation = () => {
        let btn =  document.querySelector('.input-items button');
        btn.addEventListener('click', () => {
        activateTiles(),
        clearItems(),
        state.setName(nameOne, nameTwo)})
    }
    const changeText = (button) => {
        activePlayer = state.getActivePlayer();
        button.textContent = `${activePlayer.token}`
        
    }

    const clearItems = () => {
        const items = document.querySelector('.input-items');
        items.remove()
    }

    const deactivateTile = (button) =>{
        button.setAttribute('disabled','');
    }

    startButtonActivation()
    
return {activateTiles, startButtonActivation}
}

// const test1= Gamestate();
const test2= displayController();
