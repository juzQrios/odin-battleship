const Ship = (length, orientation, x, y) => {
  const hitPositions = Array(length).fill(0);

  const hit = (position) => {
    hitPositions[position] = 'X';
  };

  const isSunk = () => hitPositions.every(position => position === 'X');

  return {
    length, hitPositions, hit, isSunk, orientation, x, y,
  };
};

export default Ship;
