export default class Boats
{
    constructor(boat, id)
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
            if(positionX > 500 || positionY > 500){
                return that.parent.actionlist.showInAL("Vous ne pouvez pas fuir de la planète, réglez votre dette");
            }
            $.getJSON( `moveboat?x=${positionX}&y=${positionY}`).done(function (data) {
                callback(data, that);
            });
        }


        foo(function(data, that){
            let x = data.x;
            let y = data.y;

            let success = data.success;

            if(x >= 0 && y >= 0 && success === 1) {

                // Perte d'énérgie sur les déplacements
                let n;
                if(that.equipement) {
                    for ( n in that.equipement ) {
                        if ( that.equipement[n].hasOwnProperty( 'Energie' ) ) {
                            if ( that.equipement[n]['Energie'] > 10 ) {
                                that.equipement[n]['Energie'] -= 10;
                                that.parent.actionlist.showInAL( "Votre bateau est maintenant en " + x + " - " + y );
                                that.x = x;
                                that.y = y;
                                return that.goldMining( data.gold );
                            } else if ( that.equipement[n]['Energie'] < 10 ) {
                                return that.parent.actionlist.showInAL("Vous n'avez pas assez de batterie, rachetez en une !!");
                            }
                        }
                    }
                    return that.parent.actionlist.showInAL("Vous n'avez pas de batterie équipée");
                } else{
                    that.parent.actionlist.showInAL("Vous n'avez pas d'équipement sur votre bateau");
                }
            }else if (x >= 0 && y >= 0 && success === 0){
                return that.parent.actionlist.showInAL("Une île se trouve à cette position");
            }
        }, this);
    }

    goldMining(gold){

        // on vérifie qu'il y ait bien de l'or à la position
        if(gold > 0){

            if(this.stockage <= this.capacite){

                // Désignation par Random du climat
                let random = Math.random()*100;

                // Climat Positif : Soleil
                if (random <= 70) {
                    // Annonce du CLimat
                    this.parent.actionlist.showInAL(`Le beau temps annonce une belle prise : ${gold} gold rajoutés.`, 0);
                    // Stock les Gold sur le Bateau
                    this.stockage += gold;

                    // Climat Négatif : Tempête (Perte de Santé du Bateau et de 50% de la récolte de Gold)
                }else if(random > 70 && random <= 85){
                    // Annonce du CLimat
                    this.parent.actionlist.showInAL(`C'est la tempête, les récoltes sont réduites : ${gold*0.50} gold rajoutés.`, 0);
                    // Stock les Gold sur le Bateau
                    this.stockage += gold*0.50;
                    // Dégâts dû à la Météo :
                    // On diminue d'abord le Blindage du Bateau
                    if(this.blindage > 0) {
                        this.blindage -= 10;
                        // On sauvegarde sa nouvelle valeur
                        this.parent.saveDataJson(this.parent);
                        // Si le Blindage passe dans le négatif, on retire ce surplus à la Structure
                        if(this.blindage < 0) {
                            this.structure += this.blindage;
                            this.blindage = "0";
                            // On sauvegarde...
                            this.parent.saveDataJson(this.parent);
                        }
                        // On diminue maintenant la Structure du Bateau
                    } else if (this.blindage <= 0) {
                        this.structure -= 20;
                        // Le Bateau n'a ni Blindage ni Structure donc il coule
                    } else if(this.blindage <= 0 && this.structure <= 0) {
                        $("#li"+this.id).remove();
                        delete this.parent.boats[this.id];
                        this.parent.saveDataJson(this.parent);
                        return;
                    }
                    // Climat Négatif : Ouragan (Perte de Santé du Bateau et de retour forcé à Main Harbor)
                }else if(random >85 && random <= 95){
                    this.parent.actionlist.showInAL(`L'ouragan vous empèche de continuer.`, 0);
                    this.returnHome();
                    if(this.blindage > 0) {
                        this.blindage -= 20;
                        this.parent.saveDataJson(this.parent);
                        if(this.blindage < 0) {
                            this.structure += this.blindage;
                            this.blindage = "0";
                            this.parent.saveDataJson(this.parent);
                        }
                    } else if (this.blindage <= 0) {
                        this.structure -= 40;
                        this.parent.saveDataJson(this.parent);
                    } else if(this.blindage <= 0 && this.structure <= 0) {
                        $("#li"+this.id).remove();
                        delete this.parent.boats[this.id];
                        this.parent.saveDataJson(this.parent);
                        return;
                    }
                    // Climat Négatif : Tsunami (Perte du Bateau et des Gold qu'il contenait)
                }else if(random > 95) {
                    this.parent.actionlist.showInAL(`ALERTE TSUNAMI, votre bateau chavire et rejoint les poissons.`, 0);
                    $("#li"+this.id).remove();
                    delete this.parent.boats[this.id];
                    this.parent.saveDataJson(this.parent);
                    return;
                }

                if(this.stockage >= this.capacite) {

                    this.stockage = this.capacite;
                    console.log(this.stockage);
                    this.returnHome();
                }
            }
        }else {

            this.parent.actionlist.showInAL(`Il n'y a pas d'Or en : ${this.x} - ${this.y}`);
            $(`#li${this.id} > div > p:nth-child(2)`).html(`x:${this.x} y:${this.y}`);
            this.parent.saveDataJson(this.parent);
        }
    }
    returnHome(){

        this.y = 0;
        this.x = 0;
        $(`#li${this.id} > div > p:nth-child(2)`).html(`x:${this.x} y:${this.y}`);

        this.parent.actionlist.showInAL(`Votre ${this.name} est retourné à Main Harbor pour vider son stockage `, 0);

        this.parent.wallet.gold += this.stockage;

        this.parent.wallet.renderWallet();

        $.get( `update?gold=${this.stockage}`).done(function(data){
        });

        this.stockage = 0;

        this.parent.actionlist.showInAL(`Vous avez maintenant : ${this.parent.wallet.gold} d'Or`, 1000);

        this.parent.saveDataJson(this.parent);
    }
}