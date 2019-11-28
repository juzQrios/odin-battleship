/* eslint-disable no-await-in-loop */
import './css/reset.css';
import './css/main.css';

import DOM from './modules/DOM';
import Game from './modules/Game';

const shipsLength = [2, 3, 3, 4, 5];

const placeCompShips = () => {
  // [startPoint, endPoint]
  const compShipPlacements = {
    0: [[1, 1], 'v'],
    1: [[4, 2], 'h'],
    2: [[0, 4], 'h'],
    3: [[6, 9], 'v'],
    4: [[7, 1], 'h'],
  };
  for (let i = 0; i < shipsLength.length; i += 1) {
    Game.computerBoard.placeShip(
      shipsLength[i],
      compShipPlacements[i][1],
      ...compShipPlacements[i][0],
    );
  }
};

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
  placeCompShips();
};


// start the game
const gameLoop = async () => {
  await placeAllShips();
  while (1) {
    const clickedCoordinates = await DOM.getUserInput('.enemy-cell');
    console.log(clickedCoordinates);
    Game.startTurn(...clickedCoordinates);
    DOM.renderBoards();
  }
};

DOM.renderBoards();
Game.initGame();

gameLoop();


// https://stackoverflow.com/a/48632068/8437607
// function generateRandom(min, max, failOn) {
//   const fail = Array.isArray(failOn) ? failOn : [failOn];
//   const num = Math.floor(Math.random() * (max - min + 1)) + min;
//   return failOn.includes(num) ? generateRandom(min, max, fail) : num;
// }

// const placeRandShips = () => {
//   const failOn = [];
//   for (let index = 0; index < shipsLength.length; index += 1) {
//     const rand = generateRandom(0, 100, failOn);
//     const startPoint = [Math.floor(rand / 10), rand % 10];
//     const orientations = ['h', 'v'];
//     const randOrientation = Math.floor(Math.random() * 2);
//     let endPoint;
//     if (randOrientation === 0) {
//       endPoint = [startPoint[0] + 2, startPoint[1]];
//       const s = Math.floor(rand % 10);
//       let n = 0;
//       while (n < 10) {
//         failOn.push(s + n * 10);
//         n += 1;
//       }
//     } else {
//       endPoint = [startPoint[0], startPoint[1] + 2];
//       const s = rand - Math.floor(rand % 10);
//       let n = 0;
//       while (n < 10) {
//         failOn.push(s + n);
//         n += 1;
//       }
//     }
//     console.log(startPoint, endPoint);
//     // Game.computerBoard.placeShip(shipsLength[index], orientations[randOrientation], ...startPoint);
//     if (Game.computerBoard.validate(startPoint, endPoint, orientations[randOrientation], shipsLength[index])) {
//       Game.computerBoard.placeShip(shipsLength[index], orientations[randOrientation], ...startPoint);
//       failOn.push(rand);
//     } else {
//       index -= 1;
//     }
//   }
//   console.log(Game.computerBoard.cells);
// };