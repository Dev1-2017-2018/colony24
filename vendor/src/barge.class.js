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
                    Type: 'Foreuse',
                    Vitesse: 15,
                },
                "Sondeuse S1": {
                    Marque: "Arnson",
                    Nom: "Sondeuse S1",
                    Type: 'Sondeuse',
                    Puissance: 2,
                },
                "Moteur 032 CV": {
                    id: 5,
                    Marque: "Lukslit",
                    Nom: "Moteur 032 CV",
                    Type: 'Moteur',
                    Propulsion: 110,
                },
                'Batterie PWR 4': {
                    Energie: 300,
                    Marque: 'Arnson',
                    Type: 'Batterie',
                    Nom: 'Batterie PWR 4'
                }
            }
        },
        id)
    {

        super(barge, id);

    }
}