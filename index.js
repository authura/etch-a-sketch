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
        square.style.backgroundColor = 'white';
        grid.insertAdjacentElement("beforeend", square);
        
    }
}

generateGrid(16);

const changeSize = (input) => {
    if (input < 2 || input > 100) {
        document.querySelector('.error').innerHTML = "Size must be between 2 and 100";
    } else {
        generateGrid(input);
        document.querySelector('.error').innerHTML = "";
    }
}

function colorSquare() {
    //checks if click toggle is true or false
    if (click) {
        if(color === 'rainbow'){
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
    toggle = document.querySelector('.toggle');

    if (click) {
        toggle.innerHTML = "ON";
        toggle.style.color = 'green';

    } else {
        toggle.innerHTML = "OFF";
        toggle.style.color = 'red';
    }
});