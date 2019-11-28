import Game from './Game';

const DOM = (() => {
  const cellStates = {
    hit: 'hit',
    ship: 'ship',
    empty: 'empty',
    hidden: 'hidden',
    missed: 'missed',
  };

  const setCellClass = (cell, elm) => {
    switch (cell) {
      case 0:
        elm.classList.add(cellStates.empty);
        break;
      case 'M':
        elm.classList.add(cellStates.missed);
        break;
      case 'X':
        elm.classList.add(cellStates.hit);
        break;
      default:
        elm.classList.add(cellStates.ship);
    }
  };

  const drawBoard = (cells, divId) => {
    const board = document.getElementById(divId);
    cells.forEach((row) => {
      const rowElement = document.createElement('div');
      rowElement.classList.add('row');
      row.forEach((cell) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        cellElement.innerHTML = '&#11044;';
        setCellClass(cell, cellElement);
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

  const renderMessage = (message, className) => {
    const ele = document.querySelector(`.${className}`);
    ele.innerHTML = message;
  };

  return { renderBoards, getUserInput, renderMessage };
})();

export default DOM;
