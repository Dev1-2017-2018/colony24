/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./../web/js";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	"use strict";

	// Gestion de la position du bateau
	// Position de départ à changer selon vos envies
	var positionY = 0;
	var positionX = 0;
	var boat = [positionY, positionX];
	console.log("Votre bateau est en " + boat[positionY] + " - " + boat[positionX]);

	// Function de déplacement en rentrant les Coordonnées
	function movement(positionY, positionX) {
		if (positionY >= 0 && positionX >= 0 && positionY <= 9 && positionX <= 9) {
			// Ici, I correspond à une île, à modifier selon la vraie map
			if (map[positionY][positionX] != "I") {
				// Modification de la position du bateau
				boat[0] = positionY;
				boat[1] = positionX;
				console.log("Votre bateau est maintenant en " + boat[0] + " - " + boat[1]);
				goldMining();
			} else {
				console.log("Colision avec une île");
			}
		} else {
			// Empêche de sortir de la map - ici défini en 10x10
			console.log("Votre bateau ne peut s'aventurer aussi loin");
		}
		// displayMap(map);
	}

/***/ })
/******/ ]);