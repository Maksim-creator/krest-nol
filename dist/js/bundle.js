/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/checkWinner.js":
/*!*******************************!*
  !*** ./src/js/checkWinner.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script */ "./src/js/script.js");

const checkWinner = () => {
    

    const boxes = document.querySelectorAll('.box'),
          resX = document.querySelector('.results_x'),
          resO = document.querySelector('.results_o');

    let array = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0,3,6],
        [1,4,7],
        [2,5,8],

        [0,4,8],
        [2,4,6]
    ]
    for (let i = 0; i < array.length; i++) {
        if(boxes[array[i][0]].textContent === 'X' && boxes[array[i][1]].textContent === 'X' && boxes[array[i][2]].textContent === 'X'){
            _script__WEBPACK_IMPORTED_MODULE_0__.default.x = _script__WEBPACK_IMPORTED_MODULE_0__.default.x + 1
            resX.innerHTML = `
            Крестики победили ${_script__WEBPACK_IMPORTED_MODULE_0__.default.x} раз(а)!
            `
            console.log(_script__WEBPACK_IMPORTED_MODULE_0__.default);
            
        } else if(boxes[array[i][0]].innerHTML === 'O' && boxes[array[i][1]].innerHTML === 'O' && boxes[array[i][2]].innerHTML === 'O'){
            // Number(stat.o);
            _script__WEBPACK_IMPORTED_MODULE_0__.default.o = _script__WEBPACK_IMPORTED_MODULE_0__.default.o + 1
            resO.innerHTML = `
            Нолики победили: ${_script__WEBPACK_IMPORTED_MODULE_0__.default.o} раз(а)!
            `
            console.log(_script__WEBPACK_IMPORTED_MODULE_0__.default);
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkWinner);



/***/ }),

/***/ "./src/js/clearGame.js":
/*!*****************************!*
  !*** ./src/js/clearGame.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script */ "./src/js/script.js");


const clearGame = () => {
    const clear = document.querySelector('.clear'),
          mainField = document.querySelector('.main-field');
    clear.addEventListener('click', (e) => {
        e.preventDefault();
        mainField.textContent = '';
        _script__WEBPACK_IMPORTED_MODULE_0__.default = {
            'x': 0,
            'y': 0
        }
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearGame);

/***/ }),

/***/ "./src/js/clickHandler.js":
/*!********************************!*
  !*** ./src/js/clickHandler.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _checkWinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkWinner */ "./src/js/checkWinner.js");


const clickHandler = () => {
    const mainField = document.querySelector('.main-field');
    let checkStep = 0;
    

    mainField.addEventListener('click', (e) => {
        

        let target = e.target;
        if(target.textContent === 'X' || target.textContent === 'O'){
            return 0;
        } else if(checkStep % 2 === 0){
            target.innerHTML = 'X';

        }   else {
            target.innerHTML = 'O';
        }
        checkStep++;
        
        (0,_checkWinner__WEBPACK_IMPORTED_MODULE_0__.default)();
    })
    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clickHandler);

/***/ }),

/***/ "./src/js/newGame.js":
/*!***************************!*
  !*** ./src/js/newGame.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
const newGame = () => {
    const newGameBtn = document.querySelector('.new-game'),
          boxes = document.querySelectorAll('.box');

        

    newGameBtn.addEventListener('click', (e) => {
        e.preventDefault()
        boxes.forEach(box => {
            box.innerHTML = '';
            
        })
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newGame);

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _clickHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clickHandler.js */ "./src/js/clickHandler.js");
/* harmony import */ var _newGame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newGame.js */ "./src/js/newGame.js");
/* harmony import */ var _clearGame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clearGame.js */ "./src/js/clearGame.js");





const stat = {
    'x': 0, 
    'o': 0
 }

;(0,_clickHandler_js__WEBPACK_IMPORTED_MODULE_0__.default)();
(0,_newGame_js__WEBPACK_IMPORTED_MODULE_1__.default)();
(0,_clearGame_js__WEBPACK_IMPORTED_MODULE_2__.default)();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stat);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/js/script.js");
/******/ })()
;
//# sourceMappingURL=bundle.js.map