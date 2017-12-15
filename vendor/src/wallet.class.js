export default class Wallet
{
    constructor ( gold, ecu )
    {
        this.goldValue = 1.2; //SQL GOLD VALUE A INTEGRER
        this.gold = gold;
        this.ecu = ecu;

        this.renderWallet();

        $(`#popupInventory`).on('click', '#change', {that: this}, function(e)
        {
            let that = e.data.that;
            let parent = that.parent;
            that.convertGoldEcu(that.gold);
            that.renderWallet();
            parent.saveDataJson(parent);
        });
    }

    //Gold convert to Ecu
    convertGoldEcu ( goldChange )
    {
        if ( this.gold >= goldChange ) {
            this.gold -= goldChange;
            this.ecu += goldChange * this.goldValue;
            this.ecu = Math.round(this.ecu);
        }
    }

    // actualise l'affichage des golds et écus dans le DOM
    renderWallet(){
        // Selection des <p> pour render les golds et écus
        let $gold = document.getElementById.bind(document, 'gold');
        let $ecu = document.getElementById.bind(document, 'ecu');

        $gold().innerHTML = this.gold;
        $ecu().innerHTML = this.ecu;
    }
}
