import Ship from './Ship';

const GameBoard = (size) => {
  const ORIENTATION = {
    VERTICAL: 'v',
    HORIZONTAL: 'h',
  };

  const cells = Array(size).fill(0).map(() => (Array(size).fill(0)));
  const ships = [];
  const missedShots = [];

  const fillHorizontal = (length, startX, startY) => {
    // cells[startY] = cells[startY].fill(1, startX, startX + length);
    for (let i = 0; i < length; i += 1) {
      cells[startY][startX + i] = { shipIndex: ships.length - 1, posIndex: i };
    }
  };

  const fillVertical = (length, startX, startY) => {
    for (let i = 0; i < length; i += 1) {
      cells[startX + i][startY] = { shipIndex: ships.length - 1, posIndex: i };
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

  const receiveAttack = (x, y) => {
    if (cells[x][y] === 0) {
      missedShots.push([x, y]);
    } else {
      const theCell = cells[x][y];
      const hitShip = ships[theCell.shipIndex];
      hitShip.hit(theCell.posIndex);
    }
  };

  return {
    cells, ships, missedShots, placeShip, receiveAttack,
  };
};

export default GameBoard;
