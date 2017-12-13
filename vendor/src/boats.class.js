export default class Boats
{
    constructor(boat = {name: "Bateau", structure: 100, blindage: 50, capacite: 50, poids: 10, stockage: 0, x: 0, y: 0}, id)
    {
        // Boats ici on crée automatiquement les propriétés de notre objet bateau et on vérifie si le type
        // des propriétés doit être un number ou non
        let property = null;
        for (property in boat) {
            if (boat.hasOwnProperty(property)) {
                if ( !Number.isNaN( Number( boat[property] ) ) ){

                    this[property] = Number(boat[property]);

                } else {

                    this[property] = boat[property];
                }
            }
        }
        this.id = id;
    }

    movement(positionY = 0, positionX = 0) {


        function foo(callback, that){
            $.getJSON( `moveboat?x=${positionX}&y=${positionY}`).done(function (data) {

                callback(data, that);
            });
        }


        foo(function(data, that){
            let x = data.x;
            let y = data.y;
            let success = data.success;
            console.log(data);

            if(x >= 0 && y >= 0 && success === 1) {

                // Modification de la position du bateau
                that.y = positionY;
                that.x = positionX;
                console.log("Votre bateau est maintenant en " + x + " - " + y);
                $(`#li${that.id} > div > p`).html(`${that.name} x:${x} y:${y}`);
                that.goldMining(data.gold);
            }else{
               return console.log("Une île se trouve à cette position");
            }
        }, this);
    }

    goldMining(gold){
         console.log(this);

        // on vérifie qu'il y ait bien de l'or à la position
        if(gold > 0){

            if(this.stockage <= 600){

                let random = Math.random()*100;
                if (random <= 70) {
                    console.log('Soleil');
                    console.log(random);
                    this.stockage += gold;
                    console.log("Vous avez extrait de l'Or en : " + this.y + " - " + this.x);
                    console.log(gold + ' gold');
                }else if(random >70 && random <= 85){
                    console.log('tempête');
                    console.log(random);
                    this.stockage += gold*0.50;
                    console.log("Vous avez extrait de l'Or en : " + this.y + " - " + this.x);
                    console.log('réduction du gain de 50%, ' + this.stockage + ' gold');
                }else if(random >85 && random <= 95){
                    console.log('ouragan');
                    console.log(random);
                    console.log('aucune extraction possible, ' + this.stockage + ' gold');
                    this.returnHome();
                }else{
                    console.log('TSUNAAMIIIII');
                    $("#li"+this.id).remove();
                    delete this.parent.boats[this.id];
                    this.parent.saveDataJson(this.parent);
                    console.log(random);
                    console.log('Bateau detruit');
                    return;
                }

                if(this.stockage >= 600) {

                    this.stockage = 600;
                    this.returnHome();

                } else{

                    this.parent.saveDataJson(this.parent);
                }
            }
        }else {

            console.log("Il n'y a pas d'Or en : " + this.y  + " - " + this.x);
            this.parent.saveDataJson(this.parent);
        }
    }
    returnHome(){

        this.y = 0;
        this.x = 0;
        $(`#li${this.id} > div > p`).html(`${this.name} x:${this.x} y:${this.y}`);

        console.log("Votre bateau est retourné à Main Harbor pour vider son stockage ");

        this.parent.wallet.gold += this.stockage;
        this.parent.wallet.renderWallet();
        this.stockage = 0;

        console.log("Vous avez maintenant : " + this.parent.wallet.gold + " d'Or");

        this.parent.saveDataJson(this.parent);
    }
}
