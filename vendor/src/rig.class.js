import Boats from './boats.class';

export default class Rig extends Boats
{
    constructor(Rig = {name: "Plateforme", structure: 1000, blindage: 1500, capacite: 10000, poids: 1000, stockage: 0, x: 0, y: 0}, id){
        super(Rig, id);
    }

}