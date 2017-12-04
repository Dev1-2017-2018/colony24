class Boat extends Boats {
	constructor(name, life, shield, capacity, weight) {
		super(name, life, shield, capacity, weight);
		this.positionY = null;
		this.positionX = null;

		// Pour creer un bateau
	    this.createBoat("TEST", 1000, 1000, 1000, 1000);
	    console.log(`[[FLEET]] Creation Root Boat >> ${this.allBoat}`);
	}

	createBoat(name, life, shield, capacity, weight)
	{
	    let newBoat = [name, life, shield, capacity, weight];
	    this.allBoat.push(newBoat);
	    console.log(`[[FLEET]] A new boat was created ${this.allBoat[this.allBoat.length -1]}`);
	}
}