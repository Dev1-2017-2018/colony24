import Wallet from './wallet.class';

import Boat from './boat.class';

import Map from './map.class';

import Shop from './boat.shop.class';

export default class Game
{
	constructor(config)
	{
        // Launch map
	    this.map = new Map();

		// Creation de la wallet
		this.wallet = new Wallet(config.gold, config.ecu);

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

        console.log(this.mainHarbor);

        this.boats.Bateau.movement(this.map.map, 1, 1);
	}

	// crée une référence au parent dans tous les enfants de bateau
    setBoatParent (o){
        if(o.boats != undefined){

            let n = null;
            for(n in o.boats){
                console.log(n);
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

    setShopParent(o){
        if (o.mainHarbor.shop != undefined){

            let n = null;
            for(n in o.mainHarbor.shop){
                console.log(n);
                o.mainHarbor.shop[n].parent = o;
                this.setBoatParent(o.mainHarbor.shop[n]);
            }
        }
    }

    setBoatMovement(){

    }
}
