import Boats from './boats.class';

export default class Submarine extends Boats
{
    constructor(
        Submarine = {
            name: "Sous-marin",
            structure: 700,
            blindage: 1000,
            capacite: 2500,
            poids: 700,
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
        super(Submarine, id);
    }

}