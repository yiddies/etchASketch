let color = "black"
let eraser = 'white'
let click = true;

function createBoard(size) {
    let board = document.querySelector(".board")
    let squares = board.querySelectorAll('div');
    squares.forEach((div => div.remove()))

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div')
        square.addEventListener('mouseover', colorSquare)
        square.className = "boxes"
        board.insertAdjacentElement("beforeend", square)
    }
}

createBoard(16)

function chooseSize(input) {
    if (input >= 2 && input <= 100) {
        createBoard(input)
    } else
        console.log("ERROR")
}

function colorSquare() {
    this.style.background = color

}

function resetBoard() {
    let board = document.querySelector(".board")
    let squares = board.querySelectorAll('div');

    squares.forEach((div => div.style.background = "white"))
}

function chooseColor(input) {
    color = input
}


