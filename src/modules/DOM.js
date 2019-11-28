import Game from './Game';

const DOM = (() => {
  const drawBoard = (cells, divId) => {
    const board = document.getElementById(divId);
    cells.forEach((row) => {
      const rowElement = document.createElement('div');
      rowElement.classList.add('row');
      row.forEach((cell) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        cellElement.innerHTML = '&#11044;';
        if (cell === 0) {
          cellElement.classList.add('empty-cell');
        } else {
          cellElement.classList.add('ship-cell');
        }
        rowElement.appendChild(cellElement);
        if (divId === 'computer-board') {
          cellElement.classList.add('enemy-cell');
        } else {
          cellElement.classList.add('player-cell');
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
    drawBoard(Game.playerBoard.cells, 'player-board');
    drawBoard(Game.computerBoard.cells, 'computer-board');
  };

  const getUserInput = async (cellClassName) => new Promise((resolve) => {
    const cells = document.querySelectorAll(cellClassName);
    cells.forEach((cell, index) => {
      cell.addEventListener('click', () => {
        resolve([Math.floor(index / 10), index % 10]);
      });
    });
  });


  return { renderBoards, getUserInput };
})();

export default DOM;
