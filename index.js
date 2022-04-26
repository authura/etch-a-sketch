let color = "black";
let click = true;


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
        square.classList.add('grid-square');
        //blue to make visible for now
        square.style.backgroundColor = 'white';
        grid.insertAdjacentElement("beforeend", square);
        
    }
}

generateGrid(16);

const changeSize = (input) => {
    if (input < 2 || input > 100) {
        document.querySelector('.error').innerHTML = "Input must be between 2 and 100";
    } else {
        generateGrid(input);
        document.querySelector('.error').innerHTML = "";
    }
}

function colorSquare() {
    //checks if click toggle is true or false
    if (click) {
        if(color === 'random'){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = color;
        }
    }
}
    

const changeColor = (choice) => {
    color = choice;
}

function clearGrid() {
    const grid = document.querySelector('#grid');
    //remove divs when function is called
    let squares = grid.querySelectorAll('div')
    squares.forEach((div) => div.style.backgroundColor = "white");
}

//toggles mouseover
document.querySelector('.grid').addEventListener("click", (e) => {
    click = !click;
    if (click) {
        document.querySelector('.toggle').innerHTML = "Coloring: On (Click on grid to toggle on/off)"
    } else {
        document.querySelector('.toggle').innerHTML = "Coloring: Off (Click on grid to toggle on/off)"
    }
});