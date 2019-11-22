import Player from './Player';
import GameBoard from './GameBoard';
import DOM from './DOM';

const Game = (() => {
  const player = Player();
  const computer = Player();

  const computerBoard = GameBoard(10);
  const playerBoard = GameBoard(10);

  const getComputerBoard = () => computerBoard;
  const getPlayerBoard = () => playerBoard;


  const initGame = () => {
    player.setEnemyBoard(computerBoard);
    computer.setEnemyBoard(playerBoard);
  };

  const randomMove = () => [2, 3];

  const playTurn = (coordX, coordY) => {
    player.play(coordX, coordY);
    computer.play(...randomMove());
    DOM.renderBoards();
  };


  return {
    initGame,
    playTurn,
    getPlayerBoard,
    getComputerBoard,
  };
})();

export default Game;
