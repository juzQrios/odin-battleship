/* eslint-disable no-await-in-loop */
import './css/reset.css';
import './css/main.css';

import DOM from './modules/DOM';
import Game from './modules/Game';

DOM.bindListeners();

const shipsLength = [2, 3, 3, 4, 5];


const placeAllShips = async () => {
  for (let index = 0; index < shipsLength.length; index += 1) {
    const instruction = `Place a ship with <span class="ships-number">${shipsLength[index]}</span> cells length or <button class="btn" id="randomize-btn">Randomize Ships</button>`;
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
  Game.randomizeShips(Game.computerBoard);
};


// start the game
const gameLoop = async () => {
  await placeAllShips();
  while (!Game.isFinished()) {
    const clickedCoordinates = await DOM.getUserInput('.enemy-cell');
    Game.startTurn(...clickedCoordinates);
    DOM.renderBoards();
  }
  DOM.renderMessage(
    `${Game.getWinner().name} won! <button class="btn" id="play-again-btn">Play Again</button`,
    'player-instruction',
  );
  DOM.updateScores();
};

DOM.renderBoards();
Game.initGame();

gameLoop();
