/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Game */ \"./src/modules/Game.js\");\n\n\n_modules_Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initGame();\n_modules_Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].startGame();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZSBmcm9tICcuL21vZHVsZXMvR2FtZSc7XG5cbkdhbWUuaW5pdEdhbWUoKTtcbkdhbWUuc3RhcnRHYW1lKCk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/modules/Game.js":
/*!*****************************!*\
  !*** ./src/modules/Game.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ \"./src/modules/Player.js\");\n/* harmony import */ var _GameBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameBoard */ \"./src/modules/GameBoard.js\");\n\n\n\nconst Game = (() => {\n  const initGame = () => {\n    const player = Object(_Player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const computer = Object(_Player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n    const computerBoard = Object(_GameBoard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(10);\n    const playerBoard = Object(_GameBoard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(10);\n\n    player.setEnemyBoard(computerBoard);\n    computer.setEnemyBoard(playerBoard);\n  };\n\n  const startGame = () => {\n\n  };\n\n  return { initGame, startGame };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9HYW1lLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvR2FtZS5qcz9kMzU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXInO1xuaW1wb3J0IEdhbWVCb2FyZCBmcm9tICcuL0dhbWVCb2FyZCc7XG5cbmNvbnN0IEdhbWUgPSAoKCkgPT4ge1xuICBjb25zdCBpbml0R2FtZSA9ICgpID0+IHtcbiAgICBjb25zdCBwbGF5ZXIgPSBQbGF5ZXIoKTtcbiAgICBjb25zdCBjb21wdXRlciA9IFBsYXllcigpO1xuXG4gICAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IEdhbWVCb2FyZCgxMCk7XG4gICAgY29uc3QgcGxheWVyQm9hcmQgPSBHYW1lQm9hcmQoMTApO1xuXG4gICAgcGxheWVyLnNldEVuZW15Qm9hcmQoY29tcHV0ZXJCb2FyZCk7XG4gICAgY29tcHV0ZXIuc2V0RW5lbXlCb2FyZChwbGF5ZXJCb2FyZCk7XG4gIH07XG5cbiAgY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xuXG4gIH07XG5cbiAgcmV0dXJuIHsgaW5pdEdhbWUsIHN0YXJ0R2FtZSB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/Game.js\n");

/***/ }),

/***/ "./src/modules/GameBoard.js":
/*!**********************************!*\
  !*** ./src/modules/GameBoard.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ \"./src/modules/Ship.js\");\n\n\nconst GameBoard = (size) => {\n  const ORIENTATION = {\n    VERTICAL: 'v',\n    HORIZONTAL: 'h',\n  };\n\n  const cells = Array(size).fill(0).map(() => (Array(size).fill(0)));\n  const ships = [];\n  const missedShots = [];\n\n  const fillHorizontal = (ship) => {\n    for (let i = 0; i < ship.length; i += 1) {\n      cells[ship.y][ship.x + i] = ships.length;\n    }\n  };\n\n  const fillVertical = (ship) => {\n    for (let i = 0; i < ship.length; i += 1) {\n      cells[ship.x + i][ship.y] = ships.length;\n    }\n  };\n\n  const placeShip = (length, orientation, startX, startY) => {\n    const ship = Object(_Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(length, orientation, startX, startY);\n    ships.push(ship);\n    if (ship.orientation === ORIENTATION.HORIZONTAL) {\n      fillHorizontal(ship);\n    } else {\n      fillVertical(ship);\n    }\n  };\n\n  const receiveAttack = (x, y) => {\n    if (cells[x][y] === 0) {\n      cells[x][y] = 'M';\n    } else {\n      const i = parseInt(cells[x][y], 10) - 1;\n      const hitShip = ships[i];\n      const hitPos = hitShip.orientation === ORIENTATION.HORIZONTAL ? y - hitShip.y : x - hitShip.x;\n      hitShip.hit(hitPos);\n    }\n  };\n\n  const allSunk = () => ships.every((ship) => ship.isSunk());\n\n  return {\n    cells, ships, missedShots, placeShip, receiveAttack, allSunk,\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameBoard);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9HYW1lQm9hcmQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9HYW1lQm9hcmQuanM/YmU3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2hpcCBmcm9tICcuL1NoaXAnO1xuXG5jb25zdCBHYW1lQm9hcmQgPSAoc2l6ZSkgPT4ge1xuICBjb25zdCBPUklFTlRBVElPTiA9IHtcbiAgICBWRVJUSUNBTDogJ3YnLFxuICAgIEhPUklaT05UQUw6ICdoJyxcbiAgfTtcblxuICBjb25zdCBjZWxscyA9IEFycmF5KHNpemUpLmZpbGwoMCkubWFwKCgpID0+IChBcnJheShzaXplKS5maWxsKDApKSk7XG4gIGNvbnN0IHNoaXBzID0gW107XG4gIGNvbnN0IG1pc3NlZFNob3RzID0gW107XG5cbiAgY29uc3QgZmlsbEhvcml6b250YWwgPSAoc2hpcCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY2VsbHNbc2hpcC55XVtzaGlwLnggKyBpXSA9IHNoaXBzLmxlbmd0aDtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZmlsbFZlcnRpY2FsID0gKHNoaXApID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNlbGxzW3NoaXAueCArIGldW3NoaXAueV0gPSBzaGlwcy5sZW5ndGg7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChsZW5ndGgsIG9yaWVudGF0aW9uLCBzdGFydFgsIHN0YXJ0WSkgPT4ge1xuICAgIGNvbnN0IHNoaXAgPSBTaGlwKGxlbmd0aCwgb3JpZW50YXRpb24sIHN0YXJ0WCwgc3RhcnRZKTtcbiAgICBzaGlwcy5wdXNoKHNoaXApO1xuICAgIGlmIChzaGlwLm9yaWVudGF0aW9uID09PSBPUklFTlRBVElPTi5IT1JJWk9OVEFMKSB7XG4gICAgICBmaWxsSG9yaXpvbnRhbChzaGlwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmlsbFZlcnRpY2FsKHNoaXApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHgsIHkpID0+IHtcbiAgICBpZiAoY2VsbHNbeF1beV0gPT09IDApIHtcbiAgICAgIGNlbGxzW3hdW3ldID0gJ00nO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpID0gcGFyc2VJbnQoY2VsbHNbeF1beV0sIDEwKSAtIDE7XG4gICAgICBjb25zdCBoaXRTaGlwID0gc2hpcHNbaV07XG4gICAgICBjb25zdCBoaXRQb3MgPSBoaXRTaGlwLm9yaWVudGF0aW9uID09PSBPUklFTlRBVElPTi5IT1JJWk9OVEFMID8geSAtIGhpdFNoaXAueSA6IHggLSBoaXRTaGlwLng7XG4gICAgICBoaXRTaGlwLmhpdChoaXRQb3MpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhbGxTdW5rID0gKCkgPT4gc2hpcHMuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpO1xuXG4gIHJldHVybiB7XG4gICAgY2VsbHMsIHNoaXBzLCBtaXNzZWRTaG90cywgcGxhY2VTaGlwLCByZWNlaXZlQXR0YWNrLCBhbGxTdW5rLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZUJvYXJkO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/GameBoard.js\n");

/***/ }),

/***/ "./src/modules/Player.js":
/*!*******************************!*\
  !*** ./src/modules/Player.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Player = () => {\n  let enemyBoard;\n  const setEnemyBoard = (board) => {\n    enemyBoard = board;\n  };\n\n  const getEnemyBoard = () => enemyBoard;\n\n  const play = (coordX, coordY) => {\n    getEnemyBoard().receiveAttack(coordX, coordY);\n  };\n\n  return { play, setEnemyBoard, getEnemyBoard };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9QbGF5ZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9QbGF5ZXIuanM/YTNjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBQbGF5ZXIgPSAoKSA9PiB7XG4gIGxldCBlbmVteUJvYXJkO1xuICBjb25zdCBzZXRFbmVteUJvYXJkID0gKGJvYXJkKSA9PiB7XG4gICAgZW5lbXlCb2FyZCA9IGJvYXJkO1xuICB9O1xuXG4gIGNvbnN0IGdldEVuZW15Qm9hcmQgPSAoKSA9PiBlbmVteUJvYXJkO1xuXG4gIGNvbnN0IHBsYXkgPSAoY29vcmRYLCBjb29yZFkpID0+IHtcbiAgICBnZXRFbmVteUJvYXJkKCkucmVjZWl2ZUF0dGFjayhjb29yZFgsIGNvb3JkWSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgcGxheSwgc2V0RW5lbXlCb2FyZCwgZ2V0RW5lbXlCb2FyZCB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/Player.js\n");

/***/ }),

/***/ "./src/modules/Ship.js":
/*!*****************************!*\
  !*** ./src/modules/Ship.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Ship = (length, orientation, x, y) => {\n  const hitPositions = Array(length).fill(0);\n\n  const hit = (position) => {\n    hitPositions[position] = 'X';\n  };\n\n  const isSunk = () => hitPositions.every((position) => position === 'X');\n\n  return {\n    length, hitPositions, hit, isSunk, orientation, x, y,\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ship);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9TaGlwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvU2hpcC5qcz82ZGJjIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNoaXAgPSAobGVuZ3RoLCBvcmllbnRhdGlvbiwgeCwgeSkgPT4ge1xuICBjb25zdCBoaXRQb3NpdGlvbnMgPSBBcnJheShsZW5ndGgpLmZpbGwoMCk7XG5cbiAgY29uc3QgaGl0ID0gKHBvc2l0aW9uKSA9PiB7XG4gICAgaGl0UG9zaXRpb25zW3Bvc2l0aW9uXSA9ICdYJztcbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiBoaXRQb3NpdGlvbnMuZXZlcnkoKHBvc2l0aW9uKSA9PiBwb3NpdGlvbiA9PT0gJ1gnKTtcblxuICByZXR1cm4ge1xuICAgIGxlbmd0aCwgaGl0UG9zaXRpb25zLCBoaXQsIGlzU3Vuaywgb3JpZW50YXRpb24sIHgsIHksXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/Ship.js\n");

/***/ })

/******/ });