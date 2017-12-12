import Shop from './shop.class';
import Equipement from './equipement';
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
                this[shop_equipement[property].Nom] = new Equipement(shop_equipement[property],$el,id_equip);
            }
            $el.on('click',`input[data-id-equip=${id_equip}]`,{that: this, id: id, equipement: shop_equipement[property] }, this.buy_equip);
            id_equip++;
        }
        console.log(this);
    }

    buy_equip(e){
        let parent = e.data.that.parent;
        let wallet = parent.wallet;
        let equipement = e.data.equipement;
        let equipementName = equipement.Nom;
        let price = equipement.Prix;

        console.log(equipement);

        if(wallet.ecu >= price){

            parent.inventory[equipementName] = equipement;
            parent.wallet.ecu -= price;

            wallet.renderWallet();

        }


    }
}