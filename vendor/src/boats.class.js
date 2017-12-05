export default class Boats
{
  constructor(boat = {name: "bateau", structure: 100, blindage: 50, capacite: 50, poids: 10, stockage: 0, x: 0, y: 0})
  {
      // Boats
      let property = null;
      for (property in boat) {
          if (boat.hasOwnProperty(property)) {
              this[property] = boat[property];
          }
      }
  }

  movement(map, positionY, positionX) {
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
                console.log("Vous avez maintenant : " + this.stockage + " d'Or");
                if(this.stockage == 2) {
                    this.returnHome();
                }
            }
        }else {
            console.log("Il n'y a pas d'Or en : " + this.y  + " - " + this.x)
        }
    }
    returnHome(){
        this.y = 0;
        this.x = 0;
        console.log("Votre bateau est retourner à Main Harbor ");
        this.parent.wallet.gold += this.stockage;
        this.stockage = 0;
    }
}
