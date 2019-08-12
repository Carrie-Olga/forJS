const ex = "X";
const nil = "0";
var player = true;

var cells = document.querySelectorAll('.cell');

cells.forEach(cell => {
    cell.addEventListener('click', showSymbol);
    //player != player;
})

function showSymbol(event) {

    var cell = event.target;
    if (player) {
        cell.innerHTML = ex;
    } else {
        cell.innerHTML = nil;
    }
    player = false;
}
