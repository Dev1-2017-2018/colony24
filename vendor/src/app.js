import logger from './logger';

import Game from './game.js';


logger(); // yes

$(function () {
    let colony24;

    //JSON TABLE A MODIF
    let config =
        {
            "boats": {
                "Sous_marin": {
                    "name": "Sous_marin",
                    "structure": 100,//Structure (Sante du Bateau)
                    "blindage": 50,//Blindage (Bouclier)
                    "capacite": 50,//Capacite (Nb Equipements Embarquables)
                    "poids": 10,//Poids (Poids du bataeau et equipement)
                    "stockage": 0,
                    "x": 0,
                    "y": 0
                },

                "Plateforme": {
                    "name": "Plateforme",
                    "structure": 100,//Structure (Sante du Bateau)
                    "blindage": 50,//Blindage (Bouclier)
                    "capacite": 50,//Capacite (Nb Equipements Embarquables)
                    "poids": 10,//Poids (Poids du bataeau et equipement)
                    "stockage": 0,
                    "x": 0,
                    "y": 0
                },
                "Bateau": {
                    "name": "Bateau",
                    "structure": 100,//Structure (Sante du Bateau)
                    "blindage": 50,//Blindage (Bouclier)
                    "capacite": 50,//Capacite (Nb Equipements Embarquables)
                    "poids": 10,//Poids (Poids du bataeau et equipement)
                    "stockage": 0,
                    "x": 0,
                    "y": 0
                }
            },

            "gold" : 100,
            "ecu" : 300
        };

    colony24 = new Game(config);

})
console.log( 'app loaded' );