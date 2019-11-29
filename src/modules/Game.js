import Player from './Player';
import GameBoard from './GameBoard';

const Game = (() => {
  const player = Player('Player');
  const computer = Player('Computer');

  const computerBoard = GameBoard(10);
  const playerBoard = GameBoard(10);

  let winner;
  const computerExcludeCoordinates = [];

  const initGame = () => {
    player.setEnemyBoard(computerBoard);
    computer.setEnemyBoard(playerBoard);
  };

  const generateRandom = (min, max) => {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    const rand = computerExcludeCoordinates.includes(num) ? generateRandom(min, max) : num;
    computerExcludeCoordinates.push(rand);
    return rand;
  };

  const startTurn = (coordX, coordY) => {
    player.play(coordX, coordY);
    let rand = generateRandom(0, 99);
    rand = [Math.floor(rand / 10), rand % 10];
    computer.play(...rand);
  };

  const setWinner = (winnerPlayer) => {
    winner = winnerPlayer;
    winnerPlayer.increaseScore();
    return true;
  };

  const getWinner = () => winner;

  const isFinished = () => (computerBoard.allSunk() && setWinner(player))
                        || (playerBoard.allSunk() && setWinner(computer));

  return {
    player,
    computer,
    initGame,
    startTurn,
    getWinner,
    isFinished,
    playerBoard,
    computerBoard,
  };
})();

export default Game;
