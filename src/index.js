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
    const startPoint = await DOM.getUserInput('.player-cell');
    const endPoint = await DOM.getUserInput('.player-cell');

    console.log("start point is: " + startPoint);
    console.log("end Point is: " + endPoint);

    const orientation = startPoint[0] === endPoint[0] ? 'h' : 'v';
    if (Game.playerBoard.validate(startPoint, endPoint, orientation, shipsLength[index])) {
      Game.playerBoard.placeShip(shipsLength[index], orientation, ...startPoint);
      DOM.renderBoards();
    } else {
      // TODO: Inform user of invalid move
      // index -= 1;
    }
  }
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
