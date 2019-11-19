const Ship = (length) => {
  const hitPositions = Array(length).fill(0);

  const hit = (position) => {
    hitPositions[position] = 1;
  };

  const isSunk = () => hitPositions.every((position) => position === 1);

  return {
    length, hitPositions, hit, isSunk,
  };
};

export default Ship;
