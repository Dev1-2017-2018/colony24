let goldBank = 0;

function returnHome(){
	boat[0] = 0;
	boat[1] = 0;
	console.log("Votre bateau est retourner à Main Harbor ");
	goldBank += goldStockage;
	goldStockage = 0;
}