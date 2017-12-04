<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>Action Pearl harbor</title>
	<link rel="stylesheet" href="css/pixel_studio.css">
</head>

<body>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<script src="app/game.js"></script>
	<script src="app/wallet.class.js"></script>
	<script src="app/boats.class.js"></script>
	<script src="app/inventory.class.js"></script>

	<h1>Main harbor</h1>
	<p id="demo"></p>

	<!-- <input id="expedition" type="button" value="Envoyer en expe" onclick="colony24.Expedition();" /> -->

	<script>
		let colony24;

		$(function()
		{
			//JSON TABLE A MODIF
			let config =
			{
				boats: [
								["Sous-Marin",
									100,//Structure (Sante du Bateau)
								  	50,//Blindage (Bouclier)
									50,//Capacite (Nb Equipements Embarquables)
									10//Poids (Poids du bataeau et equipement)
								 ],
								 ["Plateforme",
									200,//Structure (Sante du Bateau)
									1000,//Blindage (Bouclier)
									500,//Capacite (Nb Equipements Embarquables)
									5000//Poids  (Poids du bataeau et equipement)
								 ],
								 ["Bateau",
									50,//Structure (Sante du Bateau)
									2000,//Blindage (Bouclier)
									40,//Capacite (Nb Equipements Embarquables)
									2000//Poids  (Poids du bataeau et equipement)
								 ]
							 ],

					gold : 100,
					ecu : 300
			}
			colony24 = new Game(config);

			/*setTimeout(function() {
				console.log("C");

				console.log(`//TEST ${colony24.fleet.ecu}\n▪️▪️▪️`);
				console.log(`//TEST ${colony24.wallet.ecu}\n▪️▪️▪️`);
				colony24.wallet.ecu--;
				console.log(`//TEST ${colony24.fleet.ecu}\n▪️▪️▪️`);
				console.log(`//TEST ${colony24.fleet.allBoat}\n▪️▪️▪️`);
				console.log(`//TEST ${colony24.wallet.ecu}\n▪️▪️▪️`);

			}, 200);*/

		});
	</script>
</body>
</html>
