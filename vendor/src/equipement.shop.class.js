import Shop from './shop.class';
import Equipement from './equipement.class';
import Inventory from './inventory.class';

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

            e.data.that.inventoryPush(parent);
        }
    }

    inventoryPush(parent)
    {
        let equipement = parent.inventory;
        console.log(parent.inventory);
        // Liaison Inventaire
        let $ivt = $('ul#inventory-model');

        // console.log($ivt);


        // Vérification des Values
        for (let value in equipement) {
            $ivt.append('<li></li>');
            if (equipement.hasOwnProperty(value)) {
                if (equipement[value] != "id") {
                    let ivtProperty = "";
                    for (let carac in equipement[value]) {
                        if(equipement[value][carac] != "") {
                            if (carac != 'id' && carac != 'Nom'  && carac != 'Prix') {
                                ivtProperty += `<br/> ${carac} : ${equipement[value][carac]}`;
                            }
                        }
                    }
                    this.inventoryRender($ivt, value, ivtProperty);
                }
            }
        }
    }

    inventoryRender($ivt, value, ivtProperty)
    {
        $ivt.children().last().append(`
            <p style="color:black;">
                ${value}
                ${ivtProperty}
            </p>
        `);
    }
}