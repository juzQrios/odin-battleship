const Player = (name) => {
  let score = 0;
  let enemyBoard;

  const setEnemyBoard = (board) => {
    enemyBoard = board;
  };

  const getEnemyBoard = () => enemyBoard;

  const increaseScore = () => {
    score += 1;
  };

  const getScore = () => score;

  const play = (coordX, coordY) => {
    try {
      getEnemyBoard().receiveAttack(coordX, coordY);
    } catch (error) {
      throw new Error('Wrong move');
    }
  };

  return {
    name,
    play,
    getScore,
    setEnemyBoard,
    getEnemyBoard,
    increaseScore,
  };
};

export default Player;
