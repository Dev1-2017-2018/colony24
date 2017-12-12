import logger from './logger';

import Game from './game.js';

logger(); // yes

$(function () {
    let colony24;

    // Initialisation du jeu

    colony24 = new Game(userData,shop_equipement);

})
console.log( 'app loaded' );