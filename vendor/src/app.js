import logger from './logger';

import Game from './game.js';

logger(); // yes

$(function () {
    let colony24;

    // ajaxSetup est la propriété ajax de jQuery, la propriéré async permet de préciser si l'on veut
    // que les requêtes HTTP style post ou get soient synchrones ou asynchrones
    // ici je désactive l'asynchrone ceci est nécessaire puisque l'éxecution de mon script doit se faire
    // dans un certain ordre

    // Initialisation du jeu

    colony24 = new Game(userData);
    colony24.map.createMap();
    console.log(colony24.map.zonesGold);
    console.log(colony24.map.zonesIsles);
    console.log(colony24.map);


});
console.log( 'app loaded' );