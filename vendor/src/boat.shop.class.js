import Shop from './shop.class';

export default class BuyBoat extends Shop
{
    constructor(id)
    {
        super(id);
        this.id = id;
        this.$el = $("ul#shop");

        this.create_button();

    }

    create_button(){

        let button = `<input type='button' data-id='${this.id}' value='buy a boat ${this.id}'/>`;
        this.$el.append(button);
    }
}