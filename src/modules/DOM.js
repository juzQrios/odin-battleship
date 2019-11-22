import Game from './Game';

const DOM = (() => {
  const drawBoard = (cells, divId) => {
    const board = document.getElementById(divId);
    cells.forEach((row, i) => {
      const rowElement = document.createElement('div');
      row.forEach((cell, j) => {
        const cellElement = document.createElement('div');
        cellElement.style.display = 'inline';
        cellElement.innerHTML = cell;
        rowElement.appendChild(cellElement);
        if (divId === 'computer-board') {
          cellElement.addEventListener('click', () => Game.playTurn(i, j));
        }
      });
      board.appendChild(rowElement);
    });
  };

  const resetBoards = () => {
    document.getElementById('player-board').innerHTML = '';
    document.getElementById('computer-board').innerHTML = '';
  };

  const renderBoards = () => {
    resetBoards();
    drawBoard(Game.getPlayerBoard().cells, 'player-board');
    drawBoard(Game.getComputerBoard().cells, 'computer-board');
  };

  return { renderBoards };
})();

export default DOM;
