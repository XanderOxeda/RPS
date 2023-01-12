
const options = ['rock','paper','scissor'];

let playerOneScore = 0;
let playerTwoScore = 0;
let draw = 0;

function computerChoice() {
  return options[Math.floor(Math.random()*options.length)]
}

function play(playerOne) {
  let playerTwo = computerChoice();
  if (playerOne === playerTwo) {
    draw++;
    document.getElementById('draw').innerHTML = draw;
  } else if (playerOne === 'rock' && playerTwo === 'scissor' || 
             playerOne === 'paper' && playerTwo === 'rock' ||
             playerOne === 'scissor' && playerTwo === 'paper') {
    playerOneScore++;
    document.getElementById('player').innerHTML = playerOneScore;
  } else {
    playerTwoScore++;
    document.getElementById('bot').innerHTML = playerTwoScore;
  }  
}

function resetScores() {
  playerOneScore = 0;
  playerTwoScore = 0;
  draw = 0;
}