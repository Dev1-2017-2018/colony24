import Shop from './shop.class';
import Equipement from './equipement';
import Inventory from "./inventory.class";

export default class ShopEquipement extends Shop
{
    constructor(id,shop_equipement)
    {
        super(id,shop_equipement);

        let $el = $(document.getElementById('equipement-model'));
        let id_equip = 0;
        let property = null;
        for (property in shop_equipement) {
            if (shop_equipement.hasOwnProperty(property)) {
                this[shop_equipement[property].Name] = new Equipement(shop_equipement[property],$el,id_equip);
            }
            $el.on('click',`input[data-id-equip=${id_equip}]`,{ class: Inventory, that: this, id: id }, this.buy_equip);
            id_equip++;
        }
        console.log(this);
    }
    buy_equip(e){
        let data = e.data;
        let parent = data.that.parent;
        parent.inventory = new data.class();

    }
}