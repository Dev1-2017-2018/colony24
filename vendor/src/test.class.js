import ShopEquipement from './shop.class';

export default class Equipement extends ShopEquipement
{
    constructor(id,shop_equipement)
    {
        super(id,shop_equipement);
        console.log(this.name);
    }

}