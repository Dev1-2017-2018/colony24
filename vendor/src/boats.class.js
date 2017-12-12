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

        let map = this.parent.map.map;

        if(typeof positionY == 'string'){
            positionY = Number(positionY);
        }
        if (typeof positionX == 'string'){
            positionX = Number(positionX);
        }

        if(positionY >= 0 && positionX >= 0 && positionY <= 9 && positionX <= 9) {
            // Ici, I correspond à une île, à modifier selon la vraie map
            if (map[positionY][positionX]  != "I") {
                // Modification de la position du bateau
                this.y = positionY;
                this.x = positionX;
                console.log("Votre bateau est maintenant en " + this.y + " - " + this.x);
                this.goldMining(map);
            }else{
                console.log("Colision avec une île");
            }
        }else{
            // Empêche de sortir de la map - ici défini en 10x10
            console.log("Votre bateau ne peut s'aventurer aussi loin");
        }
    }

    goldMining(map){
        // Ici, G correspond à de l'or, à modifier selon la vraie map
        if(map[this.y][this.x] == "G"){
            if(this.stockage <= 2){
                this.stockage++;
                console.log("Vous avez extrait de l'Or en : " + this.y + " - " + this.x);
                this.parent.saveDataJson(this.parent);
                if(this.stockage == 2) {
                    this.parent.saveDataJson(this.parent);
                    this.returnHome();
                }
            }
        }else {
            console.log("Il n'y a pas d'Or en : " + this.y  + " - " + this.x)
            this.parent.saveDataJson(this.parent);
        }
    }
    returnHome(){
        this.y = 0;
        this.x = 0;
        console.log("Votre bateau est retourné à Main Harbor pour vider son stockage ");
        this.parent.wallet.gold += this.stockage;
        this.parent.wallet.renderWallet();
        console.log("Vous avez maintenant : " + this.parent.wallet.gold + " d'Or");
        this.stockage = 0;
        this.parent.wallet.renderWallet();
        this.parent.saveDataJson(this.parent);
    }
}
