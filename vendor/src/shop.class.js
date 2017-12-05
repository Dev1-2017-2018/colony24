import Boat from './boat.class'

export default class Shop
{
    constructor(id)
    {
        this.$el = $('ul');
        this.$el.on('click', `input[data-id=${id}]`, { class: new Boat(), that: this, id: id }, this.buy_boat);

    }

    buy_boat(e){
        let data = e.data;
        let parent = data.that.parent;
        if (parent.wallet.ecu < 100){
            return console.log("Vous n'avez pas assez d'écu");
        } else {

            parent.boats[`bateau${data.id}`] = data.class;
            parent.wallet.ecu -= 100;
            console.log(parent);
        }

    }
}