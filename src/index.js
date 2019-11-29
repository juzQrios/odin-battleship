/* eslint-disable no-await-in-loop */
import './css/reset.css';
import './css/main.css';

import DOM from './modules/DOM';
import Game from './modules/Game';

const shipsLength = [2, 3, 3, 4, 5];

// https://stackoverflow.com/a/48632068/8437607
const generateRandom = (min, max, failOn) => {
  const fail = Array.isArray(failOn) ? failOn : [failOn];
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return failOn.includes(num) ? generateRandom(min, max, fail) : num;
};

const placeRandShips = () => {
  const failOn = [];
  for (let index = 0; index < shipsLength.length; index += 1) {
    const rand = generateRandom(0, 100, failOn);
    const startPoint = [Math.floor(rand / 10), rand % 10];
    const endPoint1 = [startPoint[0] + shipsLength[index] - 1, startPoint[1]];
    const endPoint2 = [startPoint[0], startPoint[1] + shipsLength[index] - 1];
    if (Game.computerBoard.validate(startPoint, endPoint1, 'v', shipsLength[index])) {
      Game.computerBoard.placeShip(shipsLength[index], 'v', ...startPoint);
      failOn.push(rand);
    } else if (Game.computerBoard.validate(startPoint, endPoint2, 'h', shipsLength[index])) {
      Game.computerBoard.placeShip(shipsLength[index], 'h', ...startPoint);
      failOn.push(rand);
    } else {
      failOn.push(rand);
      index -= 1;
    }
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
      DOM.hideMessage('player-error');
      DOM.renderBoards();
    } else {
      const message = 'Invalid Move. Try Again.';
      DOM.renderMessage(message, 'player-error');
      index -= 1;
    }
  }
  const instruction = 'Attack!';
  DOM.updateScores();
  DOM.renderMessage(instruction, 'player-instruction');
  placeRandShips();
};


// start the game
const gameLoop = async () => {
  await placeAllShips();
  while (!Game.isFinished()) {
    const clickedCoordinates = await DOM.getUserInput('.enemy-cell');
    Game.startTurn(...clickedCoordinates);
    DOM.renderBoards();
  }
  DOM.renderMessage(`${Game.getWinner().name} won!`, 'player-instruction');
  DOM.updateScores();
};

DOM.renderBoards();
Game.initGame();

gameLoop();
