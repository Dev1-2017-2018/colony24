export default class Shop
{
    constructor(id,shop_equipement)
    {

        $('#button-shop').on('click',function(){
            let modal = document.getElementById('popupShop');
            console.log('click');

            //  Affiche la popup
            modal.style.display = "block";

            window.onclick = function(event) {
                if (event.target == modal) {
                    console.log(modal);
                    modal.style.display = 'none';
                }
            }
        });

        $('.close').on('click',function(){
            console.log('ici');
            console.log($(this).closest('.modal'));
            $(this).closest('.modal').css('display','none');
        });

    }

    // propriété appelée dans boats.shop.class.js
    create_button(){
        let $el = $('.buttons');
        let button = `<input type='button' data-id='${this.id}' value='buy a boat'/>`;
        console.log('El est :'+$el);
        $el.append(button);
    }
}
