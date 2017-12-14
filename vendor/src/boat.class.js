import Boats from './boats.class';

export default class Boat extends Boats
{
    constructor(
        boat = {
            name: "Bateau",
            structure: 100,
            blindage: 300,
            capacite: 300,
            poids: 10,
            stockage: 0,
            x: 0,
            y: 0,
            equipement: {
                "Foreuse DeepBlue": {
                    Marque: "Arnson",
                    Nom: "Foreuse DeepBlue",
                    Puissance: 3,
                    Vitesse: 15,
                },
                "Sondeuse S1": {
                    Marque: "Arnson",
                    Nom: "Sondeuse S1",
                    Puissance: 2,
                },
                "Moteur 032 CV": {
                    id: 5,
                    Marque: "Lukslit",
                    Nom: "Moteur 032 CV",
                    Propulsion: 110,
                }
            }
        },
            id)
    {
        super(boat, id);
    }
}