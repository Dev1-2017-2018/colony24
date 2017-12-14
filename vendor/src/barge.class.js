import Boats from './boats.class';

export default class Barge extends Boats
{
    constructor(barge = {name: "Barge", structure: 50, blindage: 20, capacite: 150, poids: 5, stockage: 0, x: 0, y: 0}, id){
        super(barge, id);

    }
}