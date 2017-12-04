console.log("Lancement de Movement.js");

// Création d'une map pour test
// A remplacer par la véritable map

var map = [
	["_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
	["_", "G", "_", "_", "G", "_", "_", "_", "_", "_"],
	["_", "_", "_", "I", "_", "_", "_", "_", "I", "_"],
	["_", "_", "_", "_", "_", "_", "_", "G", "_", "_"],
	["_", "_", "I", "_", "_", "_", "_", "_", "_", "_"],
	["_", "_", "_", "_", "_", "_", "_", "I", "_", "_"],
	["I", "_", "_", "_", "_", "_", "_", "_", "_", "G"],
	["_", "G", "_", "G", "_", "I", "_", "_", "_", "I"],
	["_", "_", "_", "_", "_", "_", "_", "G", "_", "_"],
	["_", "_", "I", "_", "_", "_", "_", "_", "I", "_"]
];

function displayMap(map){
	//vérifier map
	if(Array.isArray(map) == false){
		console.error("crash de la fonction 11");
	}else{
	//afficher les couleurs
		var Chaine = "";
		var map_couleur = [];
		for (var i = 0; i < map.length; i++){
			for(var j = 0; j < map[i].length; j++){
				if(map[i][j] === "_"){
					map_couleur.push("background: blue");
				}else if(map[i][j] === "G"){
					map_couleur.push("background: yellow");
				}else if(map[i][j] === "P"){
					map_couleur.push("background: black");
				}else if(map[i][j] === "I"){
					map_couleur.push("background: green");
				}else if(map[i][j] === "B"){
					map_couleur.push("background: red");
				}else{
					console.error("crash de la fonction");
					return 0;
				}
				Chaine += '%c   ';
			}
			Chaine += '\n';					
		}
		console.log(Chaine, ...map_couleur);
		return "La map a été affichée correctement";
	}
}
console.log(displayMap(map));


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
	displayMap(map);
}

let goldStockage = 0;

function goldMining(){
	// Ici, G correspond à de l'or, à modifier selon la vraie map
	if(map[boat[0]][boat[1]] == "G"){
		if(goldStockage <= 2){
			goldStockage++;
			console.log("Vous avez extrait de l'Or en : " + boat[0] + " - " + boat[1]);
			console.log("Vous avez maintenant : " + goldStockage + " d'Or");
			if(goldStockage == 2) {
				returnHome();
			}
		}
	}else {
		console.log("Il n'y a pas d'Or en : " + boat[0] + " - " + boat[1])
	}
}

let goldBank = 0;

function returnHome(){
	boat[0] = 0;
	boat[1] = 0;
	console.log("Votre bateau est retourner à Main Harbor ");
	goldBank += goldStockage;
	goldStockage = 0;
}