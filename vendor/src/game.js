import Wallet from './wallet.class';

import Boat from './boat.class';

import Map from './map.class'

import Shop from './boat.shop.class';

export default class Game
{
	constructor(config)
	{
	    this.name = config.name;

        // Launch map
	    this.map = new Map();

		// Creation de la wallet
		this.wallet = new Wallet(Number(config.wallet.gold), Number(config.wallet.ecu));

        // Creation des bateaux
		this.boats = {};

        let boat = null;

        for (boat in config.boats) {
            if (config.boats.hasOwnProperty(boat)) {
                this.boats[boat] = new Boat(config.boats[boat]);
            }
        }

        // Creation de main Harbor
        this.mainHarbor = {};

        // Creation du shop
        this.mainHarbor.shop = {};

        for (let i = 0; i < 1; i++){
            this.mainHarbor.shop[`button ${i}`] = new Shop(i);
        }

		//this.inventory = new Inventory();

        // Creation des références au parent dans les enfants

        this.setBoatParent(this);

        this.setWalletParent(this);

        this.setShopParent(this);

        this.boats.Bateau.movement(this.map.map, 1, 1);

        this.saveDataJson(this);
        console.log(this);
	}

	// crée une référence au parent dans tous les enfants de bateau
    setBoatParent (o){
        if(o.boats != undefined){

            let n = null;
            for(n in o.boats){

                o.boats[n].parent = o;
                this.setBoatParent(o.boats[n]);
            }
        }
    }

    // crée une référence au parent dans tous les enfants de wallet
    setWalletParent(o){
        if (o.wallet != undefined){

            o.wallet.parent = o;
        }
    }

    // crée une référence au parent dans tous les enfants de shop
    setShopParent(o){
        if (o.mainHarbor.shop != undefined){

            let n = null;
            for(n in o.mainHarbor.shop){

                o.mainHarbor.shop[n].parent = o;
                this.setBoatParent(o.mainHarbor.shop[n]);
            }
        }
    }

    // fonction pour sauvegarder l'objet du joueur dans son json aproprié
    saveDataJson(o){

        // premièrement dans cette fonction on va devoir enlever toutes les références au parent dans les enfants
        // donc on fait la même chose que dans les setParent, sauf qu'on delete les propriétés au lieu de les crées

        if(o.boats != undefined){

            let n = null;
            for(n in o.boats){

                delete o.boats[n].parent;
                delete o.boats[n].$el;
            }
        }
        if (o.wallet != undefined){

            delete o.wallet.parent;
        }
        if (o.mainHarbor.shop != undefined){

            let n = null;
            for(n in o.mainHarbor.shop){

                delete o.mainHarbor.shop[n].parent;
                delete o.mainHarbor.shop[n].$el;
            }
        }

        // ensuite on peut lancer la requete du fichier update_json_model.php

        $.ajaxSetup({
            async: false
        });

        $.post('', {
            player: o
        });

        $.ajaxSetup({
            async: true
        });

        this.setBoatParent(this);

        this.setWalletParent(this);

        this.setShopParent(this);
    }

}
