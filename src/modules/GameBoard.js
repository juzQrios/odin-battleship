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
    }
  };

  const lengthValidate = (pointX, pointY, orientation, shipLength) => {
    if (orientation === ORIENTATION.VERTICAL) {
      return pointY[0] - pointX[0] + 1 === shipLength;
    }
    return pointY[1] - pointX[1] + 1 === shipLength;
  };

  const placementValidate = (pointX, pointY, orientation, shipLength) => {
    const index = 0;
    const fixedIndex = orientation === 'h' ? pointX[0] : index;
    const variableIndex = orientation === 'h' ? index : pointX[0];
    // fixed
    // horizontal - 0
    // vertical - 1

    // variable
    // horizontal - 1
    // vertical - 0
    let result = true;
    if (orientation === ORIENTATION.VERTICAL) {
      for (let x = pointX[0]; x < shipLength; x += 1) {
        console.log(`From placement: fixed=${pointX[1]} : variable=${x}`);
        console.log(`cell : ${cells[pointX[1]][x]}`);
        result = result && cells[pointX[1]][x] === 0;
      }
    } else {
      for (let x = pointX[1]; x < shipLength; x += 1) {
        console.log(`From placement: fixed=${pointX[0]} : variable=${x}`);
        console.log(`cell : ${cells[pointX[0]][x]}`);
        result = result && cells[pointX[0]][x] === 0;
      }
    }
    // for (let x = -1; x < shipLength - 1; x += 1) {
    //   console.log(`From placement: fixed=${pointX[1]} : variable=${pointY[0] + x}`);
    // }
    console.log(result);
    return true;
  };

  const validate = (pointX, pointY, orientation, shipLength) => {
    console.log(pointX, pointY, orientation, shipLength);
    return lengthValidate(pointX, pointY, orientation, shipLength) && placementValidate(pointX, pointY, orientation, shipLength);
  };


  const validateCoordinates = (x, y) => cells[x][y] === 0;

  const allSunk = () => ships.every((ship) => ship.isSunk());

  return {
    cells, ships, missedShots, placeShip, receiveAttack, allSunk, validate, validateCoordinates,
  };
};

export default GameBoard;
