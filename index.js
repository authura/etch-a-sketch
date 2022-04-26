

const generateGrid = (size) => {
    const grid = document.querySelector('#grid');
    let squares = grid.querySelectorAll('div')
    squares.forEach((div) => div.remove());
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;


    //generate grid squares
    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        //blue to make visible for now
        square.style.backgroundColor = 'blue';
        grid.insertAdjacentElement("beforeend", square);
        
    }
}

generateGrid(16);

const changeSize = (input) => {
    if (input < 2 || input > 100) {
        alert("NO!")
    } else {
        generateGrid(input);
    }
}