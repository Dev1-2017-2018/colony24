import Boats from './boats.class';

export default class Barge extends Boats
{
    constructor(
        barge = {
            name: "Barge",
            structure: 50,
            blindage: 20,
            capacite: 150,
            poids: 5,
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

        super(barge, id);

    }
}