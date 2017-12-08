import Shop from './shop.class';
import Boat from './boat.class';

export default class BuyBoat extends Shop
{
    constructor(id)
    {
        super(id);

        this.id = id;
        this.$el = $("ul#shop");

        this.create_button();

        this.$el.on('click', `input[data-id=${id}]`, { class: Boat, that: this, id: id }, this.buy_boat);
    }

    buy_boat(e){

        let data = e.data;
        let parent = data.that.parent;

        if (parent.wallet.ecu < 100){

            return console.log("Vous n'avez pas assez d'écu");

        } else {

            parent.boats[parent.id] = new data.class(undefined,parent.id);
            parent.id++;

            parent.wallet.ecu -= 100;

            parent.saveDataJson(parent);

        }

    }
}