import Player from './Player';
import GameBoard from './GameBoard';

// TODO: remove listeners from already clicked cells becausecauses bug

const Game = (() => {
  const player = Player('Player');
  const computer = Player('Computer');

  const computerBoard = GameBoard(10);
  const playerBoard = GameBoard(10);

  let winner;
  const failOn = [];
  const validShipLengths = [2, 3, 3, 4, 5];

  const initGame = () => {
    player.setEnemyBoard(computerBoard);
    computer.setEnemyBoard(playerBoard);
  };

  const generateRandom = (min, max) => {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    const rand = failOn.includes(num) ? generateRandom(min, max) : num;
    failOn.push(rand);
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

  // https://stackoverflow.com/a/48632068/8437607
  const generateRandoms = (min, max, excluded) => {
    const fail = Array.isArray(failOn) ? excluded : [excluded];
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return failOn.includes(num) ? generateRandom(min, max, fail) : num;
  };

  const randomizeShips = (board) => {
    const failOns = [];
    for (let index = 0; index < validShipLengths.length; index += 1) {
      const rand = generateRandoms(0, 100, failOn);
      const startPoint = [Math.floor(rand / 10), rand % 10];
      const endPoint1 = [startPoint[0] + validShipLengths[index] - 1, startPoint[1]];
      const endPoint2 = [startPoint[0], startPoint[1] + validShipLengths[index] - 1];
      if (board.validate(startPoint, endPoint1, 'v', validShipLengths[index])) {
        board.placeShip(validShipLengths[index], 'v', ...startPoint);
        failOns.push(rand);
      } else if (board.validate(startPoint, endPoint2, 'h', validShipLengths[index])) {
        board.placeShip(validShipLengths[index], 'h', ...startPoint);
        failOns.push(rand);
      } else {
        failOns.push(rand);
        index -= 1;
      }
    }
  };

  return {
    player,
    computer,
    initGame,
    startTurn,
    getWinner,
    isFinished,
    playerBoard,
    computerBoard,
    randomizeShips,
  };
})();

export default Game;
