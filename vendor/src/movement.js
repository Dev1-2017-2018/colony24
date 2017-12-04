// Gestion de la position du bateau
// Position de départ à changer selon vos envies
let positionY = 0;
let positionX = 0;
let boat = [positionY, positionX];
console.log("Votre bateau est en " + boat[positionY] + " - " + boat[positionX]);

// Function de déplacement en rentrant les Coordonnées
function movement(positionY, positionX) {
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
	// displayMap(map);
}