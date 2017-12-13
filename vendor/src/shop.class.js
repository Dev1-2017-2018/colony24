export default class Shop
{
    constructor(id,shop_equipement)
    {

        $('#button-shop').on('click',function(){
            let modal = document.getElementById('popupShop');

            //  Affiche la popup
            modal.style.display = "block";

            window.onclick = function(event) {
                if (event.target === modal) modal.style.display = 'none';
            }
        });

        $('.close').on('click',function(){
            $(this).closest('.modal').css('display','none');
        });

    }

    // propriété appelée dans boats.shop.class.js
    create_button(){
        let $el = $('#equipement-model');
        let button = `<input type='button' data-id='${this.id}' value='Acheter un bateau'/>`;
        console.log('El est :'+$el);
        $el.append(button);
    }
}
