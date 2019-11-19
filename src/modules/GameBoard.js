import Ship from './Ship';

const GameBoard = (size) => {
  const ORIENTATION = {
    VERTICAL: 'v',
    HORIZONTAL: 'h',
  };

  const cells = Array(size).fill(0).map(() => (Array(size).fill(0)));
  const ships = [];

  const fillHorizontal = (length, startX, startY) => {
    cells[startY] = cells[startY].fill(1, startX, startX + length);
  };

  const fillVertical = (length, startX, startY) => {
    for (let i = 0; i < length; i += 1) {
      cells[startX + i][startY] = 1;
    }
  };

  const placeShip = (length, orientation, startX, startY) => {
    const ship = Ship(length);
    ships.push(ship);
    if (orientation === ORIENTATION.HORIZONTAL) {
      fillHorizontal(length, startX, startY);
    } else {
      fillVertical(length, startX, startY);
    }
  };

  return { cells, placeShip };
};

export default GameBoard;
