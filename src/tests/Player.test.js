import Player from '../modules/Player';
import GameBoard from '../modules/GameBoard';

test('setting enemy board', () => {
  const board = GameBoard(5);
  const player = Player();

  player.setEnemyBoard(board);
  expect(player.getEnemyBoard().cells).toEqual(board.cells);
});

test('play function marks the enemy board cells as M if missed a shot', () => {
  const board = GameBoard(3);
  const player = Player();

  player.setEnemyBoard(board);
  player.play(1, 1);

  expect(board.cells).toEqual([[0, 0, 0], [0, 'M', 0], [0, 0, 0]]);
});

test('play function marks enemy board cell as X if located a ship', () => {
  const board = GameBoard(3);
  const player = Player();

  board.placeShip(2, 'h', 0, 0);

  player.setEnemyBoard(board);
  player.play(0, 0);

  expect(board.ships[0].hitPositions).toEqual(['X', 0]);
});
