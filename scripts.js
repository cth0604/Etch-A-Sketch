const container = document.createElement('div');
container.classList.add('container');

for (let i = 0; i < 256; i++) {
    const element = document.createElement('div');
    element.classList.add('square')
    container.appendChild(element);
}

const body = document.querySelector('body');
body.appendChild(container);

function changeColorSquare(e) {
    this.classList.add('colored-square');
}

const squares = document.querySelectorAll('.square');
squares.forEach((square) => {
    square.addEventListener('mouseover', changeColorSquare);
});

function deleteGrid() {
    container.innerHTML = '';
}

function createNewGrid() {
    const numSquaresPerSide = prompt("How many squares per side to make the new grid?");
    if (numSquaresPerSide == null || !Number(numSquaresPerSide) || numSquaresPerSide < 1) {
        return;
    }

    deleteGrid();
    for (let i = 0; i < numSquaresPerSide ** 2; i++) {
        const element = document.createElement('div');
        element.classList.add('square')
        element.addEventListener('mouseover', changeColorSquare);
        container.appendChild(element);
    }
    container.style.cssText = `grid-template-columns: repeat(${numSquaresPerSide}, 1fr); grid-template-rows: repeat(${numSquaresPerSide}, 1fr);`
}

const button = document.querySelector('.button');
button.addEventListener('click', createNewGrid);