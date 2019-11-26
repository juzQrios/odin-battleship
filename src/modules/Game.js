import Player from './Player';
import GameBoard from './GameBoard';

const Game = (() => {
  const player = Player();
  const computer = Player();

  const computerBoard = GameBoard(10);
  const playerBoard = GameBoard(10);

  const initGame = () => {
    player.setEnemyBoard(computerBoard);
    computer.setEnemyBoard(playerBoard);
  };

  function getRndInteger(min, max) {
    return [Math.floor(Math.random() * (max - min + 1)) + min,
      Math.floor(Math.random() * (max - min + 1)) + min];
  }

  const startTurn = (coordX, coordY) => {
    if (Game.computerBoard.validateCoordinates(coordX, coordY)) {
      player.play(coordX, coordY);
      computer.play(...getRndInteger(0, 9));
    } else {
      // TODO: handle invalid cells
    }
  };


  return {
    initGame,
    startTurn,
    playerBoard,
    computerBoard,
  };
})();

export default Game;
