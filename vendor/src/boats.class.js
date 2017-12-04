class Boats
{
  constructor(boats)
  {
    // Boats
    this.boats = boats;
    this.allBoat = [];
    for (var i = 0; i < this.boats.length; i++) {
      this.allBoat.push(this.boats[i]);
    }
  }
  

  movement(positionY, positionX) {
    if(positionY >= 0 && positionX >= 0 && positionY <= 9 && positionX <= 9) {
      // Ici, I correspond à une île, à modifier selon la vraie map
      if (map[positionY][positionX]  != "I") {
        // Modification de la position du bateau
        boat[0] = positionY;
        boat[1] = positionX;
        console.log("Votre bateau est maintenant en " + boat[0] + " - " + boat[1]);
        goldMining();
      }else{
        console.log("Colision avec une île");
      } 
    }else{
      // Empêche de sortir de la map - ici défini en 10x10
      console.log("Votre bateau ne peut s'aventurer aussi loin");
    }
  }
}
