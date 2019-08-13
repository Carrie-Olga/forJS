const ex = "X";
const nil = "O";
var player = true;

var cells = document.querySelectorAll('.cell');

cells.forEach(cell => {
    cell.addEventListener('click', showSymbol);
    //player != player;
})

function showSymbol(event) {

    var cell = event.target;
    cell.classList.add('checked');
    // if (player) {
    //     cell.innerHTML = ex;
    // } else {
    //     cell.innerHTML = nil;
    // }
    cell.innerText = player ? ex : nil;
    player = !player;
}
