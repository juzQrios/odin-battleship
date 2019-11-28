import Player from './Player';
import GameBoard from './GameBoard';

const Game = (() => {
  const player = Player();
  const computer = Player();

  const computerBoard = GameBoard(10);
  const playerBoard = GameBoard(10);

  const failOn = [];

  const initGame = () => {
    player.setEnemyBoard(computerBoard);
    computer.setEnemyBoard(playerBoard);
  };

  // function getRndInteger(min, max) {
  //   return [Math.floor(Math.random() * (max - min + 1)) + min,
  //     Math.floor(Math.random() * (max - min + 1)) + min];
  // }

  function generateRandom(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    const rand = failOn.includes(num) ? generateRandom(min, max) : num;
    failOn.push(rand);
    return rand;
  }

  const startTurn = (coordX, coordY) => {
    if (Game.computerBoard.validateCoordinates(coordX, coordY)) {
      player.play(coordX, coordY);
      let rand = generateRandom(0, 99);
      rand = [Math.floor(rand / 10), rand % 10];
      computer.play(...rand);
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
