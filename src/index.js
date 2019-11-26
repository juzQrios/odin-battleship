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
    const startPoint = await DOM.getUserInput();
    const endPoint =  await DOM.getUserInput();

    console.log("start point is: " + startPoint);
    console.log("end Point is: " + endPoint);

    const orientation = startPoint[0] === endPoint[0] ? 'h' : 'v';
    Game.computerBoard.placeShip(shipsLength[index], orientation, ...startPoint);
    DOM.renderBoards();
    // if (Game.computerBoard.validate(i, j, orientation)) {
    //   console.log('validated');
    //   Game.computerBoard.placeShip(shipsLength[index], orientation, i[0], i[1]);
    //   DOM.renderBoards();
    // } else {
    //   console.log('cells taken');
    //   // TODO: show message that the cells are taken
    // }
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
