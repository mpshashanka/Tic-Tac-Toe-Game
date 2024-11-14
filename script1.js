 let board=['','','','','','','','',''];
//this repesents the game of an array of 9 empty strings represent each cell

let currentplayer='x';
//sets the initial player to'x'.. this variable will toggle b/w 'x' and 'o' after each turn...

let gameActive=true;
//a flag indicate if the game is currently active(i.e.,not won or drawn)

const messageDisplay=document.getElementById('message');
//retrives the DOM element where  messages (like win or draw notifications )will displayes....

const cells=document.querySelectorAll('.cell');
// select all the elements with class cell and stores in a nodelist....

const resetButton=document.getElementById('reset');
//which will allow players to restart the game..

const winningConditions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function handlecellclick(clickedcell,index)
//defines a function that will be called when a cell is clicked...
{
if(board[index]!==''||!gameActive){
    return;
}
//this line checks the cell is already filled or game is not active, if the condition is true ,the function exits without doing anything

board[index]=currentplayer;
//updates the board array at the clicked index with symbol of current player('x' or 'o')

clickedcell.textcontent=currentplayer;
//updates the displayed text of clicked cell to show the current player symbol
checkResult();
}
function checkResult(){
    let roundwon=false;
//define a function to check game status . initialise a flag roundwon to trackdown if curren round is won

for(let i=0;i<winningConditions.length;i++){
    const[a,b,c]=winningConditions[i];

if (board[a]==='' || board [b]===''||board [c]==='')
    {
    continue;
}
if (board[a]===board[b]&& board[b]===board[c]){
    roundwon=true;
    break;
}}
if(roundwon){
    messageDisplay.textContent='player ${currentplayer} wins';
    gameActive=false;
    return;
}
if(!board.includes('')){
messageDisplay.textContent="It's a draw match!";
gameActive=false;
return;
}
currentplayer=currentplayer==='x'?'o':'x';
function handlecellclickEvent(event){
    const clickedcell=event.target;
    const index=parseInt(clickedcell.getAttribute('data-index'));
    handlecellclick(clickedcell,index);
}
function resetgame(){
    board=['','','','','','','','',''];
    gameActive=true;
    currentplayer='x';
    messageDisplay.textContent='';
    cells.forEach(cell=>{
        cell.textContent='';
    });
}
cells.forEach(cell=>cell.addEventListener('click',handlecellclickEvent));
resetButton.addEventListener('click',resetgame);
}


