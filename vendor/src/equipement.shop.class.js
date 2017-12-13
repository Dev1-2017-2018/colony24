import Shop from './shop.class';
import Equipement from './equipement.class';
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
                this[shop_equipement[property].Nom] = new Equipement(shop_equipement[property],$el,id_equip, 1);
            }
            $el.on('click',`input[data-id-equip=${id_equip}]`,{that: this, id: id, equipement: shop_equipement[property] }, this.buy_equip);
            id_equip++;
        }
    }

    buy_equip(e){
        let parent = e.data.that.parent;
        let wallet = parent.wallet;
        let equipement = e.data.equipement;
        let equipementName = equipement.Nom;
        let price = equipement.Prix;


        if(wallet.ecu >= price){

            parent.inventory[equipementName] = equipement;
            parent.wallet.ecu -= price;
            console.log(parent.inventory);
            wallet.renderWallet();
            parent.saveDataJson(parent);

        }

        //Action List
        // parent.actionlist.showInAL (`Tu viens d'achter "${ equipment}" comme nouveau équipement`, 0);
        parent.actionlist.showInAL (`Tu as : ${parent.wallet.ecu} d'écu`, 1500);
        parent.actionlist.showInAL (`et Tu as : ${parent.wallet.gold} de gold`, 2000);


    }
}
