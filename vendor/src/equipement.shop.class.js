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
            for(let n in parent.inventory[equipementName]){
                if (parent.inventory[equipementName][n] == null || parent.inventory[equipementName][n] == ""){
                    delete parent.inventory[equipementName][n];
                }
            }
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
        // Liaison Inventaire
        let $ivt = $('ul#inventory-model');


        // Vérification des Values
        for (let value in equipement) {
            $ivt.append('<li class="hvr-grow-shadow "></li>');
            if (equipement.hasOwnProperty(value)) {
                if (equipement[value] != "id") {
                    let ivtProperty = "";
                    for (let carac in equipement[value]) {
                        if(equipement[value][carac] != null && equipement[value][carac] != "") {
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
            <p>
                ${value}
                ${ivtProperty}
            </p>
        `);
    }

}
