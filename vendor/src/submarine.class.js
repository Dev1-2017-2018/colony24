import Boats from './boats.class';

export default class Submarine extends Boats
{
    constructor(Rig = {name: "Sous-marin", structure: 700, blindage: 1000, capacite: 2500, poids: 700, stockage: 0, x: 0, y: 0}, id){
        super(Rig, id);
    }

}