import Boat from './boat.class'

export default class Shop
{
    constructor(id)
    {
        this.$el = $('ul#shop');
        this.$el.on('click', `input[data-id=${id}]`, { class: Boat, that: this, id: id }, this.buy_boat);

    }

    buy_boat(e){

        let data = e.data;
        let parent = data.that.parent;

        if (parent.wallet.ecu < 100){

            return console.log("Vous n'avez pas assez d'écu");

        } else {

            parent.boats[parent.id] = new data.class();
            parent.boats[parent.id].id = parent.id;
            parent.id++;

            parent.wallet.ecu -= 100;

            parent.saveDataJson(parent);

        }

    }
}