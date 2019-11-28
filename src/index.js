/* eslint-disable no-await-in-loop */
import './css/reset.css';
import './css/main.css';

import DOM from './modules/DOM';
import Game from './modules/Game';


DOM.renderBoards();
Game.initGame();
// place ships logic

const shipsLength = [2, 3, 3, 4, 5];
const placeAllShips = async () => {
  for (let index = 0; index < shipsLength.length; index += 1) {
    const instruction = `Place a ship of length ${shipsLength[index]}`;
    DOM.renderMessage(instruction, 'player-instruction');
    let startPoint = await DOM.getUserInput('.player-cell');
    let endPoint = await DOM.getUserInput('.player-cell');
    const orientation = startPoint[0] === endPoint[0] ? 'h' : 'v';
    if (startPoint[0] > endPoint[0] || startPoint[1] > endPoint[1]) {
      const x = startPoint;
      startPoint = endPoint;
      endPoint = x;
    }
    if (Game.playerBoard.validate(startPoint, endPoint, orientation, shipsLength[index])) {
      Game.playerBoard.placeShip(shipsLength[index], orientation, ...startPoint);
      DOM.renderMessage('', 'player-error');
      DOM.renderBoards();
    } else {
      const message = 'Invalid Move. Try Again.';
      DOM.renderMessage(message, 'player-error');
      index -= 1;
    }
  }
  const instruction = 'All ships Placed';
  DOM.renderMessage(instruction, 'player-instruction');
};
placeAllShips();

// start the game
// const gameLoop = async () => {
//   while (1) {
//     const clickedCoordinates = await DOM.getUserInput();
//     Game.startTurn(...clickedCoordinates);
//     DOM.renderBoards();
//   }
// };

// gameLoop();
