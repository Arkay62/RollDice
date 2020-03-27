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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_partie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

var partie = new _classes_partie__WEBPACK_IMPORTED_MODULE_0__["default"](5, 4);
partie.initialiser();
partie.lancer();
partie.afficher_gagnant();


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _joueur__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _gobelet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


var Partie = /** @class */ (function () {
    function Partie(nb_tours, nb_des) {
        this._joueurs = new Array();
        this._nb_tours = nb_tours;
        this._gobelet = new _gobelet__WEBPACK_IMPORTED_MODULE_1__["default"](nb_des);
    }
    Partie.prototype.initialiser = function () {
        var nom_joueurs = ["Nicole", "Michel", "Jean", "Mireille"];
        for (var _i = 0, nom_joueurs_1 = nom_joueurs; _i < nom_joueurs_1.length; _i++) {
            var nom = nom_joueurs_1[_i];
            this._joueurs.push(new _joueur__WEBPACK_IMPORTED_MODULE_0__["default"](nom));
        }
    };
    Partie.prototype.lancer = function () {
        console.log("La partie commence ! Celle-ci comportera " + this._nb_tours + " tours.\n");
        console.log("Les joueurs pr\u00E9sents sont :");
        for (var _i = 0, _a = this._joueurs; _i < _a.length; _i++) {
            var joueur = _a[_i];
            console.log("" + joueur.get_nom());
        }
        console.log("");
        for (var i = 1; i <= this._nb_tours; i++) {
            console.log("Tour " + i + " :");
            for (var _b = 0, _c = this._joueurs; _b < _c.length; _b++) {
                var joueur = _c[_b];
                joueur.jouer(this._gobelet);
            }
        }
        console.log("Fin de la partie !");
    };
    Partie.prototype.afficher_gagnant = function () {
        var gagnant = this._joueurs[0];
        for (var _i = 0, _a = this._joueurs; _i < _a.length; _i++) {
            var joueur = _a[_i];
            if (joueur.get_score() > gagnant.get_score()) {
                gagnant = joueur;
            }
        }
        console.log("Le gagnant est " + gagnant.get_nom() + " !!!");
    };
    return Partie;
}());
/* harmony default export */ __webpack_exports__["default"] = (Partie);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Joueur = /** @class */ (function () {
    function Joueur(nom) {
        this._nom = nom;
        this._score = 0;
    }
    Joueur.prototype.get_nom = function () {
        return this._nom;
    };
    Joueur.prototype.get_score = function () {
        return this._score;
    };
    Joueur.prototype.jouer = function (gobelet) {
        console.log(this.get_nom() + " lance le gobelet !");
        gobelet.lancer();
        console.log(this.get_nom() + " fait " + gobelet.afficher_score() + " !");
        this._score += gobelet.afficher_score();
        this.afficher_score();
    };
    Joueur.prototype.afficher_score = function () {
        console.log(this.get_nom() + " a un total de " + this.get_score() + " !\n");
    };
    return Joueur;
}());
/* harmony default export */ __webpack_exports__["default"] = (Joueur);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _de__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

var Gobelet = /** @class */ (function () {
    function Gobelet(nb_des) {
        this._valeur = 0;
        this._des = new Array();
        for (var i = 0; i < nb_des; i++) {
            this._des.push(new _de__WEBPACK_IMPORTED_MODULE_0__["default"]());
        }
    }
    Gobelet.prototype.get_valeur = function () {
        var value = 0;
        for (var _i = 0, _a = this._des; _i < _a.length; _i++) {
            var de = _a[_i];
            value += de.get_valeur();
        }
        return value;
    };
    Gobelet.prototype.lancer = function () {
        for (var _i = 0, _a = this._des; _i < _a.length; _i++) {
            var de = _a[_i];
            de.lancer();
        }
    };
    Gobelet.prototype.afficher_score = function () {
        return this.get_valeur();
    };
    return Gobelet;
}());
/* harmony default export */ __webpack_exports__["default"] = (Gobelet);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var De = /** @class */ (function () {
    function De() {
        this._valeur = 0;
    }
    De.prototype.get_valeur = function () {
        return this._valeur;
    };
    De.prototype.lancer = function () {
        this._valeur = Math.floor(Math.random() * 6) + 1;
    };
    return De;
}());
/* harmony default export */ __webpack_exports__["default"] = (De);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL3BhcnRpZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9qb3VldXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvZ29iZWxldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7OztBQ2xGQTtBQUFBO0FBQXdDO0FBRXhDLElBQU0sTUFBTSxHQUFZLElBQUksdURBQU0sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7QUFFeEMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ3JCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNoQixNQUFNLENBQUMsZ0JBQWdC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QU0sRUFBRSxDQUFDO1NBQ1o7SUFDRixDQUFDO0lBRUQsZ0NBQWMsR0FBZDtRQUNDLE9BQU8sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDRixjQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7O0FDOUJEO0FBQUE7SUFFQztRQUNDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFFRCx1QkFBVSxHQUFWO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxtQkFBTSxHQUFOO1FBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNGLFNBQUM7QUFBRCxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCAgUGFydGllICBmcm9tIFwiLi9jbGFzc2VzL3BhcnRpZVwiO1xyXG5cclxuY29uc3QgcGFydGllIDogUGFydGllID0gbmV3IFBhcnRpZSg1LDQpO1xyXG5cclxucGFydGllLmluaXRpYWxpc2VyKCk7XHJcbnBhcnRpZS5sYW5jZXIoKTtcclxucGFydGllLmFmZmljaGVyX2dhZ25hbnQoKTsiLCJpbXBvcnQgSm91ZXVyIGZyb20gJy4vam91ZXVyJztcclxuaW1wb3J0IEdvYmVsZXQgZnJvbSAnLi9nb2JlbGV0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnRpZSB7XHJcbiAgICBwcml2YXRlIF9qb3VldXJzOiBBcnJheTxKb3VldXI+O1xyXG4gICAgcHJpdmF0ZSBfbmJfdG91cnM6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2dvYmVsZXQ6IEdvYmVsZXQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmJfdG91cnM6IG51bWJlciwgbmJfZGVzOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9qb3VldXJzID0gbmV3IEFycmF5PEpvdWV1cj4oKTtcclxuICAgICAgICB0aGlzLl9uYl90b3VycyA9IG5iX3RvdXJzO1xyXG4gICAgICAgIHRoaXMuX2dvYmVsZXQgPSBuZXcgR29iZWxldChuYl9kZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpc2VyKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBub21fam91ZXVycyA9IFtcIk5pY29sZVwiLCBcIk1pY2hlbFwiLCBcIkplYW5cIiwgXCJNaXJlaWxsZVwiXTtcclxuICAgICAgICBmb3IgKGxldCBub20gb2Ygbm9tX2pvdWV1cnMpIHtcclxuICAgICAgICAgICAgdGhpcy5fam91ZXVycy5wdXNoKG5ldyBKb3VldXIobm9tKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxhbmNlcigpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgTGEgcGFydGllIGNvbW1lbmNlICEgQ2VsbGUtY2kgY29tcG9ydGVyYSAke3RoaXMuX25iX3RvdXJzfSB0b3Vycy5cXG5gKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgTGVzIGpvdWV1cnMgcHLDqXNlbnRzIHNvbnQgOmApO1xyXG4gICAgICAgIGZvciAobGV0IGpvdWV1ciBvZiB0aGlzLl9qb3VldXJzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke2pvdWV1ci5nZXRfbm9tKCl9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiXCIpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0aGlzLl9uYl90b3VyczsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUb3VyICR7aX0gOmApO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqb3VldXIgb2YgdGhpcy5fam91ZXVycykge1xyXG4gICAgICAgICAgICAgICAgam91ZXVyLmpvdWVyKHRoaXMuX2dvYmVsZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBGaW4gZGUgbGEgcGFydGllICFgKTtcclxuICAgIH1cclxuXHJcbiAgICBhZmZpY2hlcl9nYWduYW50KCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBnYWduYW50OiBKb3VldXIgPSB0aGlzLl9qb3VldXJzWzBdO1xyXG4gICAgICAgIGZvciAobGV0IGpvdWV1ciBvZiB0aGlzLl9qb3VldXJzKSB7XHJcbiAgICAgICAgICAgIGlmIChqb3VldXIuZ2V0X3Njb3JlKCkgPiBnYWduYW50LmdldF9zY29yZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBnYWduYW50ID0gam91ZXVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBMZSBnYWduYW50IGVzdCAke2dhZ25hbnQuZ2V0X25vbSgpfSAhISFgKTtcclxuICAgIH1cclxufSIsImltcG9ydCBHb2JlbGV0IGZyb20gJy4vZ29iZWxldCc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpvdWV1ciB7XHJcblx0cHJpdmF0ZSBfbm9tOiBzdHJpbmc7XHJcblx0cHJpdmF0ZSBfc2NvcmU6IG51bWJlcjtcclxuXHJcblx0Y29uc3RydWN0b3Iobm9tOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9ub20gPSBub207XHJcbiAgICAgICAgdGhpcy5fc2NvcmUgPSAwO1xyXG5cdH1cclxuXHJcblx0Z2V0X25vbSgpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHRoaXMuX25vbTtcclxuXHR9XHJcblxyXG5cdGdldF9zY29yZSgpOiBudW1iZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3Njb3JlO1xyXG5cdH1cclxuXHJcblx0am91ZXIoZ29iZWxldDogR29iZWxldCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuZ2V0X25vbSgpfSBsYW5jZSBsZSBnb2JlbGV0ICFgKTtcclxuICAgICAgICBnb2JlbGV0LmxhbmNlcigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuZ2V0X25vbSgpfSBmYWl0ICR7Z29iZWxldC5hZmZpY2hlcl9zY29yZSgpfSAhYCk7XHJcbiAgICAgICAgdGhpcy5fc2NvcmUgKz0gZ29iZWxldC5hZmZpY2hlcl9zY29yZSgpO1xyXG4gICAgICAgIHRoaXMuYWZmaWNoZXJfc2NvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZmZpY2hlcl9zY29yZSgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmdldF9ub20oKX0gYSB1biB0b3RhbCBkZSAke3RoaXMuZ2V0X3Njb3JlKCl9ICFcXG5gKTtcclxuICAgIH1cclxuICAgIFxyXG59IiwiaW1wb3J0IERlIGZyb20gJy4vZGUnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHb2JlbGV0IHtcclxuXHRwcml2YXRlIF92YWxldXI6IG51bWJlcjtcclxuXHRwcml2YXRlIF9kZXM6IEFycmF5PERlPjtcclxuXHJcblx0Y29uc3RydWN0b3IobmJfZGVzOm51bWJlcikge1xyXG5cdFx0dGhpcy5fdmFsZXVyID0gMDtcclxuXHRcdHRoaXMuX2RlcyA9IG5ldyBBcnJheTxEZT4oKTtcclxuXHRcdGZvciAobGV0IGk6bnVtYmVyID0gMDsgaSA8IG5iX2RlczsgaSsrKSB7XHJcblx0XHRcdHRoaXMuX2Rlcy5wdXNoKG5ldyBEZSgpKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldF92YWxldXIoKTogbnVtYmVyIHtcclxuXHRcdGxldCB2YWx1ZTogbnVtYmVyID0gMDtcclxuXHRcdGZvciAobGV0IGRlIG9mIHRoaXMuX2Rlcykge1xyXG5cdFx0XHR2YWx1ZSArPSBkZS5nZXRfdmFsZXVyKCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBcclxuXHRsYW5jZXIoKTogdm9pZCB7XHJcblx0XHRmb3IgKGxldCBkZSBvZiB0aGlzLl9kZXMpIHtcclxuXHRcdFx0ZGUubGFuY2VyKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhZmZpY2hlcl9zY29yZSgpOiBudW1iZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0X3ZhbGV1cigpO1xyXG5cdH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERlIHtcclxuXHRwcml2YXRlIF92YWxldXI6IG51bWJlcjtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuX3ZhbGV1ciA9IDA7XHJcblx0fVxyXG5cclxuXHRnZXRfdmFsZXVyKCk6IG51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5fdmFsZXVyO1xyXG5cdH1cclxuXHRsYW5jZXIoKTogdm9pZCB7XHJcblx0XHR0aGlzLl92YWxldXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqIDYpICsgMTtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9