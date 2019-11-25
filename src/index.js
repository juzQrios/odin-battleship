import './css/reset.css';
import './css/main.css';

import DOM from './modules/DOM';
import Game from './modules/Game';


DOM.renderBoards();
Game.initGame();
// Game.startGame();

// wait for player move => bind each cells with the playturn (getPlayerCoordinates)
const nonamemethod = (x, y) => {
  Game.startTurn(x, y);
  DOM.renderBoards();
};


const cells = document.querySelectorAll('.cell');
cells.forEach((cell, index) => {
  cell.addEventListener('click', () => nonamemethod(Math.ceil(index / 10), index % 10));
});

// check if the point is valid
// play move
// computer playMove
// end of loop: 1. remove bind events
//              2. check if winning position reached

// wait for player move => bind each cells with the playturn (getPlayerCoordinates)
// check if the point is valid
// play move
// computer playMove
// end of loop: 1. remove bind events
//              2. check if winning position reached
