class Game
{
	constructor(config)
	{
    // Launch
		console.log(`▪️▪️▪️\n[[GAME]] 🇬️🇦️🇲️🇪️ 🇨️🇴️🇱️🇴️🇳️🇾️ 24 🇸️🇹️🇦️🇷️🇹️🇮️🇳️🇬️ \n▪️▪️▪️ `);

		// Creation des environment
		this.wallet = new Wallet(config.gold, config.ecu);
		//obliger de mettre un setTimeout sinon bug de synchro ???
		this.boats = new Boats(config.boats);
		this.inventory = new Inventory();
	}


	expedition()
	{
	}


}
