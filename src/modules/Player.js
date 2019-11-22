const Player = () => {
  let enemyBoard = '';
  const setEnemyBoard = (board) => {
    enemyBoard = board;
  };

  const getEnemyBoard = () => enemyBoard;

  const play = (coordX, coordY) => {
    getEnemyBoard().receiveAttack(coordX, coordY);
  };

  return { play, setEnemyBoard, getEnemyBoard };
};

export default Player;
