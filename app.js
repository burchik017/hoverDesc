const doc = document;
const board = doc.querySelector('#board');
const startBtn = doc.querySelector('#start');
const resetBtn = doc.querySelector('#reset');
const input = document.querySelector('#num')
let SQUARES_NUMBER = 400;

const colors = ['#e74c3c', '#8e44ad', '#3490db', '#e67e22', '#2ecc71'];

startBtn.addEventListener('click', gameStart);
resetBtn.addEventListener('click', resetGame);

function gameStart() {
    board.style.display = 'flex';

    SQUARES_NUMBER = input.value;

    for (let i = 0; i < SQUARES_NUMBER; i++) {
        const square = doc.createElement('div');
        square.classList.add('square');
    
        square.addEventListener('mouseover', () => setColor(square));
        square.addEventListener('mouseleave', () => removeColor(square));
    
        board.append(square);
    };
};

function resetGame() {
    input.value = 400;
    board.innerHTML = ''
};
function setColor(element) {
    if (element.style.backgroundColor !== 'transparent') {
        const color = getRandomColor();
        element.style.backgroundColor = color; 
        element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    };
}

function removeColor(element) {
    element.style.backgroundColor = 'transparent';
    element.style.boxShadow = `unset`;
    element.style.border = `unset`;

}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);

  return colors[index];
}