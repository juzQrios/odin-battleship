import GameBoard from '../modules/GameBoard';

test('available cells are all empty in creation of board', () => {
  const board = GameBoard(2);
  expect(board.cells).toEqual([[0, 0], [0, 0]]);
});

test('fill board cells when horizontal line specified', () => {
  const board = GameBoard(5);

  board.placeShip(2, 'h', 1, 1);
  expect(board.cells).toEqual([
    [0, 0, 0, 0, 0],
    [0, { shipIndex: 0, posIndex: 0 }, { shipIndex: 0, posIndex: 1 }, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]);

  const bigBoard = GameBoard(8);

  bigBoard.placeShip(3, 'h', 3, 2);
  expect(bigBoard.cells).toEqual([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, { shipIndex: 0, posIndex: 0 },
      { shipIndex: 0, posIndex: 1 },
      { shipIndex: 0, posIndex: 2 }, 0, 0],
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
    [0, { shipIndex: 0, posIndex: 0 }, 0, 0],
    [0, { shipIndex: 0, posIndex: 1 }, 0, 0],
    [0, { shipIndex: 0, posIndex: 2 }, 0, 0],
  ]);


  const bigBoard = GameBoard(8);
  bigBoard.placeShip(5, 'v', 3, 2);
  expect(bigBoard.cells).toEqual([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, { shipIndex: 0, posIndex: 0 }, 0, 0, 0, 0, 0],
    [0, 0, { shipIndex: 0, posIndex: 1 }, 0, 0, 0, 0, 0],
    [0, 0, { shipIndex: 0, posIndex: 2 }, 0, 0, 0, 0, 0],
    [0, 0, { shipIndex: 0, posIndex: 3 }, 0, 0, 0, 0, 0],
    [0, 0, { shipIndex: 0, posIndex: 4 }, 0, 0, 0, 0, 0],
  ]);
});

test('Records the coordinates of the missed attack', () => {
  const board = GameBoard(4);
  board.receiveAttack(1, 1);
  expect(board.missedShots).toEqual([[1, 1]]);
});

test('If a ship is hit, should send the hit signal to that ship', () => {
  // Horizontally placed ship
  const board = GameBoard(4);
  board.placeShip(3, 'h', 1, 1);
  board.receiveAttack(1, 1);
  expect(board.ships[0].hitPositions).toEqual([1, 0, 0]);

  // Vertically Placed ship
  const bigBoard = GameBoard(8);
  bigBoard.placeShip(5, 'v', 3, 2);
  expect(bigBoard.cells).toEqual([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, { shipIndex: 0, posIndex: 0 }, 0, 0, 0, 0, 0],
    [0, 0, { shipIndex: 0, posIndex: 1 }, 0, 0, 0, 0, 0],
    [0, 0, { shipIndex: 0, posIndex: 2 }, 0, 0, 0, 0, 0],
    [0, 0, { shipIndex: 0, posIndex: 3 }, 0, 0, 0, 0, 0],
    [0, 0, { shipIndex: 0, posIndex: 4 }, 0, 0, 0, 0, 0],
  ]);
  bigBoard.receiveAttack(7, 2);
  expect(bigBoard.ships[0].hitPositions).toEqual([0, 0, 0, 0, 1]);
});
