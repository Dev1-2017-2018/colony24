import Wallet from './wallet.class';

import Boat from './boat.class';

import Barge from './barge.class';

import Rig from './rig.class';

import Submarine from './submarine.class';

import Ranking from './ranking.class';

import BuyBoat from './boat.shop.class';

import BuyBarge from './barge.shop.class';

import BuyRig from './rig.shop.class';

import BuySubmarine from './submarine.shop.class';

import ShopEquipement from './equipement.shop.class';

import Inventory from './inventory.class';

import Equipement from './equipement.class';

import ActionList from './actionList.class';

import RenderBoats from './renderBoats.class';

export default class Game
{
    constructor(config,shop_equipement)
    {
        this.name = config.name;

        // Launch map
        this.actionlist = new ActionList();

        // Creation de la wallet
        this.wallet = new Wallet(Number(config.wallet.gold), Number(config.wallet.ecu));

        // Creation des bateaux
        this.boats = {};

        this.id = 0;

        for (let boat in config.boats) {
            if (config.boats.hasOwnProperty(boat)) {
                switch (config.boats[boat].name){
                    case "Bateau":
                        this.boats[this.id] = new Boat(config.boats[boat], this.id);
                        break;
                    case "Barge":
                        this.boats[this.id] = new Barge(config.boats[boat], this.id);
                        break;
                    case "Sous-marin":
                        this.boats[this.id] = new Submarine(config.boats[boat], this.id);
                        break;
                    case "Plateforme":
                        this.boats[this.id] = new Rig(config.boats[boat], this.id);
                        break;
                }
                this.id = this.boats[this.id].id;
                this.id++;
            }
        }

        // Creation de main Harbor
        this.mainHarbor = {};

        // Création des svg pour les bateaux
        this.renderBoats = new RenderBoats();
        this.renderBoats.createBoatsButton(this.boats);

        // Creation du shop
        this.mainHarbor.shop = {};
        this.mainHarbor.shop.equipement = {};

        this.mainHarbor.shop[`button 0`] = new BuyBoat(this.id);
        this.id++;
        this.mainHarbor.shop['button 1'] = new BuyBarge(this.id);
        this.id++;
        this.mainHarbor.shop['button 2'] = new BuySubmarine(this.id);
        this.id++;
        this.mainHarbor.shop['button 3'] = new BuyRig(this.id);
        this.id++;

        this.mainHarbor.shop.equipement = new ShopEquipement(this.id,shop_equipement);

        this.inventory = new Inventory();

        for (let equipement in config.inventory) {
            if (config.inventory.hasOwnProperty(equipement)) {
                this.inventory[config.inventory[equipement].Nom] = new Equipement(config.inventory[equipement],
                    $(document.getElementById('equipement-model')),
                    config.inventory[equipement].id);
            }
        }

        this.mainHarbor.shop.equipement.inventoryPush(this);

        let ostChill = new Audio("../assets/audio/Ambient1.wav");

        let ostPop = new Audio("../assets/audio/Ambient2.wav");

        ostChill.play();

        ostChill.onended = function () {
            ostPop.play();
        };

        ostPop.onended = function () {
            ostChill.play();
        };

        this.ranking = new Ranking();/*
        this.ranking.test(this.wallet);*/

        // Creation des références au parent dans les enfants

        this.setBoatParent(this);

        this.setWalletParent(this);

        this.setShopParent(this);

        this.saveDataJson(this);

        //Show Action List Start
        this.actionlist.showInAL (`Salut ${this.name} !`, 0);
        this.actionlist.showInAL (`Tu as ${this.wallet.ecu} écus `, 1000);
        this.actionlist.showInAL (`et ${this.wallet.gold} gold`, 1500);
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

    // fonction pour sauvegarder l'objet du joueur dans son json approprié
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

            delete o.mainHarbor.shop;
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
