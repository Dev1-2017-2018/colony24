export default class Wallet
{
    constructor ( gold, ecu )
    {
        this.goldValue = 1.2; //SQL GOLD VALUE A INTEGRER
        this.gold = gold;
        this.ecu = ecu;

        // Selection des <p> pour render les golds et écus
        this.$gold = document.getElementById.bind(document, 'gold');
        this.$ecu = document.getElementById.bind(document, 'ecu');

        this.renderWallet();
        this.displayActionList();
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
        this.$gold().innerHTML = this.gold;
        this.$ecu().innerHTML = this.ecu;
        console.log(this)
    }
    displayActionList(){
      //Affichage dans la liste des actions

/*
      $('#listText').scrollTop($('#listText')[0].scrollHeight); //scrolling end of div
      setTimeout(function(ctx){$( "#listText" ).append(`<p class="bounceIn">Vous avez actuellement ${ctx.gold} de gold<p>`)}, 1800, this);
      setTimeout(function(ctx){
        $( "#listText" ).append(`<p class="bounceIn">Et vous avez actuellement ${ctx.ecu} d'ecu<p>`)
        $('#listText').scrollTop($('#listText')[0].scrollHeight); //scrolling end of div
      }, 3600, this);
*/


    }
}
