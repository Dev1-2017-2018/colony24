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