let color = "black";

const generateGrid = (size) => {
    const grid = document.querySelector('#grid');
    //remove divs when size input is changed
    let squares = grid.querySelectorAll('div')
    squares.forEach((div) => div.remove());
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    


    //generate grid squares
    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener("mouseover", colorSquare);
        //blue to make visible for now
        square.style.backgroundColor = 'white';
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

function colorSquare() {
    if(color === 'random'){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
}

const changeColor = (choice) => {
    color = choice;
}

function clearGrid() {
    const grid = document.querySelector('#grid');
    //remove divs when size input is changed
    let squares = grid.querySelectorAll('div')
    squares.forEach((div) => div.style.backgroundColor = "white");
}