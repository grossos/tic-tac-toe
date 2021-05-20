let playerX = "X";
let playerO = "O";
let isWinner = false;
let xWon =false;
let oWon = false;
let isTie = false;
let currentPlayer = playerX;
let playerXarray = [];
let playerOarray = [];

let restartButton = document.querySelector('#restart');

let div = document.querySelector('#result');

const cells = Array.from(document.getElementsByClassName('cell'));

const board = () => {
    cells.forEach((cell, index) => {
        cell.addEventListener('click', clickedCells);
        
    });
};

const clickedCells = (e) => {
    if(!isWinner){
        const cell = e.target;
        const cellId = e.target.id;

        if(cell.innerText == ""){
            e.target.innerText = currentPlayer;

            if(currentPlayer == playerX) 
                playerXarray.push(cellId);
            else playerOarray.push(cellId);

            currentPlayer = currentPlayer == playerX ? playerO : playerX;
            checkWinner();
        }
    }

    tie();
};




const checkWinner = () => {
    if((playerXarray.includes("1") && playerXarray.includes("2") && playerXarray.includes("3")) || 
    (playerXarray.includes("4") && playerXarray.includes("5") && playerXarray.includes("6")) || 
    (playerXarray.includes("1") && playerXarray.includes("5") && playerXarray.includes("9")) ||
    (playerXarray.includes("3") && playerXarray.includes("5") && playerXarray.includes("7")) ||
    (playerXarray.includes("1") && playerXarray.includes("4") && playerXarray.includes("7")) ||
    (playerXarray.includes("2") && playerXarray.includes("5") && playerXarray.includes("8")) ||
    (playerXarray.includes("3") && playerXarray.includes("6") && playerXarray.includes("9"))){
        isWinner = true;
        xWon = true;
        outputMessage();
    }
    else if((playerOarray.includes("1") && playerOarray.includes("2") && playerOarray.includes("3")) || 
    (playerOarray.includes("4") && playerOarray.includes("5") && playerOarray.includes("6")) || 
    (playerOarray.includes("1") && playerOarray.includes("5") && playerOarray.includes("9")) ||
    (playerOarray.includes("3") && playerOarray.includes("5") && playerOarray.includes("7")) ||
    (playerOarray.includes("1") && playerOarray.includes("4") && playerOarray.includes("7")) ||
    (playerOarray.includes("2") && playerOarray.includes("5") && playerOarray.includes("8")) ||
    (playerOarray.includes("3") && playerOarray.includes("6") && playerOarray.includes("9"))){
        isWinner = true;
        oWon = true;
        outputMessage();
    }
};

const tie = () => {
    if(((playerOarray.length == 4 && playerXarray.length == 5) || (playerOarray.length == 5 && playerXarray.length == 4)) && !isWinner){
        isTie = true;
        outputMessage();
    }
};

const outputMessage = () => {
    
    
    if(xWon){
        div.className = 'text-success';
        var message = document.createTextNode('Winner is X');
        div.appendChild(message);
    }
    else if(oWon){
        div.className = 'text-success';
        var message = document.createTextNode('Winner is O');
        div.appendChild(message);
    }
    else if(isTie){
        div.className = 'text-info';
        var message = document.createTextNode('Tie');
        div.appendChild(message);
    }
};

const restartGame = () => {
    isWinner = false;
    xWon = false;
    oWon = false;
    isTie = false;

    cells.forEach((cell, index) => {
        cell.innerText = "";
    });

    while(playerXarray.length > 0)
        playerXarray.pop();
    
    while(playerOarray.length > 0){
        playerOarray.pop();
    }

    result.innerText = '';
};

restartButton.addEventListener('click', restartGame);




board();

