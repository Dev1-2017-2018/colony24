import Boats from './boats.class';

export default class Boat extends Boats {
    constructor(boat = {name: "Bateau", structure: 100, blindage: 50, capacite: 300, poids: 10, stockage: 0, x: 0, y: 0}, id) {
        super(boat, id);
    }
}