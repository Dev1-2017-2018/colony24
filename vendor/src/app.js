import logger from './logger';

import Game from './game.js';

logger(); // yes

$(function () {
    let colony24;

    // Initialisation du jeu

    colony24 = new Game(userData);
    colony24.map.createMap();
    console.log(colony24.map.zonesGold);
    console.log(colony24.map.zonesIsles);
    console.log(colony24.map);


});
console.log( 'app loaded' );