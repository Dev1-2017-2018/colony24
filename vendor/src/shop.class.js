
export default class Shop
{
    constructor(id)
    {
        this.$el = $('div#button-shop');

        this.$el.on('click', `input[data-type=Equipement]`, function(){

            let modal = document.getElementById('myModal');
            let span  = document.getElementsByClassName("close")[0];

            //  Affiche la popup
            modal.style.display = "block";

            // Croix pour fermer la popup
            span.onclick = function() {
                modal.style.display = "none";
            }
            // Quand l'utilisateur clique en dehors de la popup, elle se ferme
            window.onclick = function(event) {
                if (event.target === modal) {
                    modal.style.display = "none";
                }
            }
        });

    }

    // propriété appelée dans boats.shop.class.js
    // On crée deux boutons shop pour l'instant on laisse comme ça mais c'est nul il faut refactoriser
    create_button(){
        let button = `<input type='button' data-id='${this.id}' value='buy a boat'/>`;
        this.$el.append(button);

        let button_shop = `<input type='button' data-type='Equipement' id="myBtn" value='Shop'/>`;
        this.$el.append(button_shop);
    }
}
