import GameBoard from '../modules/GameBoard';

test('available cells are all empty in creation of board', () => {
  const board = GameBoard(2);
  expect(board.cells).toEqual([[0, 0], [0, 0]]);
});

test('fill board cells when horizontal line specified', () => {
  const board = GameBoard(5);

  board.placeShip(4, 'h', 1, 1);
  expect(board.cells).toEqual([
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]);

  const bigBoard = GameBoard(8);

  bigBoard.placeShip(5, 'h', 3, 2);
  expect(bigBoard.cells).toEqual([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

test('fill board cells when vertical line specified', () => {
  const board = GameBoard(4);
  board.placeShip(3, 'v', 1, 1);
  expect(board.cells).toEqual([
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
  ]);


  const bigBoard = GameBoard(8);
  bigBoard.placeShip(5, 'v', 3, 2);
  expect(bigBoard.cells).toEqual([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0],
  ]);
});
