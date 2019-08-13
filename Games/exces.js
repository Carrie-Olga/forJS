var player = true;
var cells = document.querySelectorAll('.cell');
const board = document.querySelector('.board');

cells.forEach(cell => {
    cell.addEventListener('click', showSymbol);
});

function showSymbol(event) {
    var cell = event.target;
    cell.classList.add('checked');
    cell.innerText = player ? 'X' : 'O';
    player = !player;
    checkWinner();
};

function checkWinner() {
    if ((cells[0].innerHTML == 'X' && cells[1].innerHTML == 'X' && cells[2].innerHTML == 'X') || 
        (cells[3].innerHTML == 'X' && cells[4].innerHTML == 'X' && cells[5].innerHTML == 'X') ||
        (cells[6].innerHTML == 'X' && cells[7].innerHTML == 'X' && cells[8].innerHTML == 'X') ||
        (cells[0].innerHTML == 'X' && cells[3].innerHTML == 'X' && cells[6].innerHTML == 'X') ||
        (cells[1].innerHTML == 'X' && cells[4].innerHTML == 'X' && cells[7].innerHTML == 'X') ||
        (cells[2].innerHTML == 'X' && cells[5].innerHTML == 'X' && cells[8].innerHTML == 'X') ||
        (cells[2].innerHTML == 'X' && cells[4].innerHTML == 'X' && cells[6].innerHTML == 'X') ||
        (cells[0].innerHTML == 'X' && cells[4].innerHTML == 'X' && cells[8].innerHTML == 'X') ) {
            var winner = document.createElement('div');
            winner.innerText = 'X won!';
            board.innerHTML = '';
            board.appendChild(winner);
            var button = document.createElement('button');
            button.innerText = 'Play again';
            button.setAttribute('type', 'button');
            board.appendChild(button);
            button.addEventListener('click', refreshPage);
            function refreshPage(){
                window.location.reload();
            }
        } else if ((cells[0].innerHTML == 'O' && cells[1].innerHTML == 'O' && cells[2].innerHTML == 'O') || 
        (cells[3].innerHTML == 'O' && cells[4].innerHTML == 'O' && cells[5].innerHTML == 'O') ||
        (cells[6].innerHTML == 'O' && cells[7].innerHTML == 'O' && cells[8].innerHTML == 'O') ||
        (cells[0].innerHTML == 'O' && cells[3].innerHTML == 'O' && cells[6].innerHTML == 'O') ||
        (cells[1].innerHTML == 'O' && cells[4].innerHTML == 'O' && cells[7].innerHTML == 'O') ||
        (cells[2].innerHTML == 'O' && cells[5].innerHTML == 'O' && cells[8].innerHTML == 'O') ||
        (cells[2].innerHTML == 'O' && cells[4].innerHTML == 'O' && cells[6].innerHTML == 'O') ||
        (cells[0].innerHTML == 'O' && cells[4].innerHTML == 'O' && cells[8].innerHTML == 'O') ) {
            var winner = document.createElement('div');
            winner.innerText = 'O won!';
            board.innerHTML = '';
            board.appendChild(winner);
            var button = document.createElement('button');
            button.innerText = 'Play again';
            button.setAttribute('type', 'button');
            board.appendChild(button);
            button.addEventListener('click', refreshPage);
            function refreshPage(){
                window.location.reload();
            }
        } 
};

