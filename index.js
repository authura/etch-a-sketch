

const generateGrid = (size) => {
    const grid = document.querySelector('#grid');
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;


    //generate grid squares
    for (let i = 0; i < 256; i++) {
        let square = document.createElement('div');
        square.classList.add('grid-square');
        //blue to make visible for now
        square.style.backgroundColor = 'blue';
        grid.insertAdjacentElement("beforeend", square);
        
    }
}

generateGrid(16);

const changeSize = (input) => {
    generateGrid(input);
}