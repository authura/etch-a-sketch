

const generateGrid = () => {
    const grid = document.querySelector('#grid');
    grid.style.gridTemplateColumns = 'repeat(16, 1fr)';
    grid.style.gridTemplateRows = 'repeat(16, 1fr)';


    //generate grid squares
    for (let i = 0; i < 256; i++) {
        let square = document.createElement('div');
        //blue to make visible for now
        square.style.backgroundColor = 'blue';
        grid.insertAdjacentElement("beforeend", square);
        
    }
}