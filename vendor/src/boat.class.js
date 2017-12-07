import Boats from './boats.class'

export default class Boat extends Boats {
	constructor(boat, id) {
	    super(boat, id);

        this.$el = $("ul#boats");

        this.create_boat_button();

        $(`li#li${id}`).on('click', `input[type='button']`, { that: this}, function (e) {

            let context = e.data.that;

            let inputX = $(`#li${context.id} > div > input:nth-child(2)`).val();
            let inputY = $(`#li${context.id} > div > input:nth-child(3)`).val();

            if (inputX != 0 || inputY != 0){
                e.data.that.movement(inputY, inputX);
                $(`#li${context.id} > div > p`).html(`${context.name} x:${context.x} y:${context.y}`);
            }
        });
	}

	create_boat_button(){
	    this.$el.append(`<li id="li${this.id}" style="display: inline-block">
                            <div>
                                <p style="width: 30%; margin: 0 auto">${this.name} x:${this.x} y:${this.y}</p>
                                <input style="width: 45%; margin: 0 auto" type="number" placeholder="x"/>
                                <input style="width: 45%; margin: 0 auto" type="number" placeholder="y"/>
                                <input type="button" value="Move"/>
                            </div>
                         </li>`
        );
    }


}