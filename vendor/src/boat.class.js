import Boats from './boats.class'

export default class Boat extends Boats {
	constructor(boat) {
	    super(boat);

        this.$el = $('ul#boats');
        this.render_boats();
	}

	render_boats(){
	    this.$el.append(`<input type='button' value="${this.name}"/>`);
    }
}