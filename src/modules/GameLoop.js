/* eslint-disable no-await-in-loop */
// eslint-disable-next-line import/no-cycle
import DOM from './DOM';
import Game from './Game';


const GameLoop = (() => {
  const shipsLength = [2, 3, 3, 4, 5];

  const placeAllShips = async () => {
    for (let index = 0; index < shipsLength.length; index += 1) {
      const instruction = `Place a ship with <span class="ships-number">${shipsLength[index]}</span> cells length`;
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
        DOM.renderMessage('Invalid Move. Try Again.', 'player-error');
        index -= 1;
      }
    }
    Game.randomizeShips(Game.computerBoard);
  };

  const gameLoop = async () => {
    const instruction = '<button class="btn" id="randomize-btn">Randomize Ships</button><button class="btn" id="start-btn">Start placing ships</button>';
    DOM.renderMessage(instruction, 'player-instruction');
    await DOM.bindListeners();
    if (!Game.getPlayerShipsRandomized()) {
      await placeAllShips();
    }
    DOM.renderMessage('Attack', 'player-instruction');
    while (!Game.isFinished()) {
      const clickedCoordinates = await DOM.getUserInput('.enemy-cell');
      try {
        Game.startTurn(...clickedCoordinates);
        DOM.hideMessage('player-error');
      } catch (error) {
        DOM.renderMessage(error.message, 'player-error');
      }
      DOM.renderBoards();
    }
    DOM.renderMessage(
      `${Game.getWinner().name} won! <button class="btn" id="play-again-btn">Play Again</button>`,
      'player-instruction',
    );
    DOM.updateScores();
  };

  return {
    gameLoop,
  };
})();

export default GameLoop;
