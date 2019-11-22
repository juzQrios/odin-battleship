import Ship from './Ship';

const GameBoard = (size) => {
  const ORIENTATION = {
    VERTICAL: 'v',
    HORIZONTAL: 'h',
  };

  const cells = Array(size).fill(0).map(() => (Array(size).fill(0)));
  const ships = [];
  const missedShots = [];

  const fillHorizontal = (ship) => {
    for (let i = 0; i < ship.length; i += 1) {
      cells[ship.y][ship.x + i] = ships.length;
    }
  };

  const fillVertical = (ship) => {
    for (let i = 0; i < ship.length; i += 1) {
      cells[ship.x + i][ship.y] = ships.length;
    }
  };

  const placeShip = (length, orientation, startX, startY) => {
    const ship = Ship(length, orientation, startX, startY);
    ships.push(ship);
    if (ship.orientation === ORIENTATION.HORIZONTAL) {
      fillHorizontal(ship);
    } else {
      fillVertical(ship);
    }
  };

  const receiveAttack = (x, y) => {
    if (cells[x][y] === 0) {
      cells[x][y] = 'M';
    } else {
      const i = parseInt(cells[x][y], 10) - 1;
      const hitShip = ships[i];
      const hitPos = hitShip.orientation === ORIENTATION.HORIZONTAL ? y - hitShip.y : x - hitShip.x;
      hitShip.hit(hitPos);
    }
  };

  const allSunk = () => ships.every((ship) => ship.isSunk());

  return {
    cells, ships, missedShots, placeShip, receiveAttack, allSunk,
  };
};

export default GameBoard;
