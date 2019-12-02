/* eslint-disable no-await-in-loop */
import './css/reset.css';
import './css/main.css';

import DOM from './modules/DOM';
import Game from './modules/Game';
import GameLoop from './modules/GameLoop';

// DOM.bindListeners();
Game.initGame();
DOM.renderBoards();
GameLoop.gameLoop();
