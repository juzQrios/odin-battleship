const Ship = (length, orientation, x, y) => {
  const hitPositions = Array(length).fill(0);

  const hit = (position) => {
    hitPositions[position] = 1;
  };

  const isSunk = () => hitPositions.every((position) => position === 1);

  return {
    length, hitPositions, hit, isSunk, orientation, x, y,
  };
};

export default Ship;
