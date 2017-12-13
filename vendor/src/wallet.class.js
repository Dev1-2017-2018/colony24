export default class Wallet
{
    constructor ( gold, ecu )
    {
        this.goldValue = 1.2; //SQL GOLD VALUE A INTEGRER
        this.gold = gold;
        this.ecu = ecu;

        this.renderWallet();
        console.log( `[[WALLET]] goldValue is ${this.goldValue} \n[[WALLET]] gold is ${this.gold } \n[[WALLET]] ecu is ${this.ecu } \n` );
    }

    //Gold convert to Ecu
    convertGoldEcu ( goldChange )
    {
        console.log( `[[WALLET convertGoldToEcu()]] In Wallet > ${this.ecu} ecu & ${this.gold} gold & ${this.goldValue} goldValue\n` );
        if ( this.gold >= goldChange ) {
            console.log( `[[WALLET convertGoldToEcu()]] You convert ${goldChange} gold to ecu with a ${this.goldValue} Value Gold \n` );
            this.gold -= goldChange;
            this.ecu += goldChange * this.goldValue;
            console.log( `[[WALLET convertGoldToEcu()]] You have now ${this.ecu} ecu and ${this.gold} gold\n` );
        }
        else
            console.log( `[[WALLET convertGoldToEcu()]] you are missing ${goldChange - this.gold} to complete this transaction\n` );
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
