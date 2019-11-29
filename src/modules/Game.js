import Player from './Player';
import GameBoard from './GameBoard';

const Game = (() => {
  const player = Player();
  const computer = Player();

  const computerBoard = GameBoard(10);
  const playerBoard = GameBoard(10);

  let winner;

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
    player.play(coordX, coordY);
    let rand = generateRandom(0, 99);
    rand = [Math.floor(rand / 10), rand % 10];
    computer.play(...rand);
  };

  const setWinner = (winnerPlayer) => {
    winner = winnerPlayer;
    return true;
  };

  const getWinner = () => winner;

  const isFinished = () => (computerBoard.allSunk() && setWinner('player')) || (playerBoard.allSunk() && setWinner('computer'));

  return {
    initGame,
    startTurn,
    playerBoard,
    computerBoard,
    isFinished,
    getWinner,
  };
})();

export default Game;
