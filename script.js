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
}

function Cell(){
    const test = () =>
        alert('boop')
    return {test}
}

function Gamestate(){

}