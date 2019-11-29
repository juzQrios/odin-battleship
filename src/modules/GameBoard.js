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
      cells[ship.x][ship.y + i] = ships.length;
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
      cells[x][y] = 'X';
    }
  };

  const lengthValidate = (pointX, pointY, orientation, shipLength) => {
    if (orientation === ORIENTATION.VERTICAL) {
      return pointY[0] - pointX[0] + 1 === shipLength;
    }
    return pointY[1] - pointX[1] + 1 === shipLength;
  };

  const placementValidate = (pointX, pointY, orientation, shipLength) => {
    let result = true;
    if (orientation === ORIENTATION.VERTICAL) {
      for (let x = pointX[0]; x < pointX[0] + shipLength; x += 1) {
        result = result && (cells[x][pointX[1]] === 0);
      }
    } else {
      for (let x = pointX[1]; x < pointX[1] + shipLength; x += 1) {
        result = result && (cells[pointX[0]][x] === 0);
      }
    }
    return result;
  };

  const orientationValidate = (pointX, pointY) => {
    if (pointX[0] !== pointY[0] && pointX[1] !== pointY[1]) {
      return false;
    }
    return true;
  };

  const boundValidate = (point) => point[0] < 10 && point[1] < 10;

  const validate = (pointX, pointY, orientation, shipLength) => (
    lengthValidate(pointX, pointY, orientation, shipLength)
    && boundValidate(pointY)
    && placementValidate(pointX, pointY, orientation, shipLength)
    && orientationValidate(pointX, pointY)
  );


  const allSunk = () => ships.every((ship) => ship.isSunk());

  return {
    cells, ships, missedShots, placeShip, receiveAttack, allSunk, validate,
  };
};

export default GameBoard;
