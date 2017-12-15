export default class Shop
{
    constructor(id,shop_equipement)
    {

        $('#button-shop').on('click',function(){
            document.getElementById('popupShop').style.display = "block";
            document.getElementById('popUp').style.display = "grid";

            window.onclick = function(event) {
                if (event.target === document.getElementById('background'))
                {
                  document.getElementById('popupShop').style.display = 'none';
                  document.getElementById('popUp').style.display = 'none';
                }
            }
        });
    }

    // propriété appelée dans boats.shop.class.js
    create_button(text){
        let $el = $('#equipement-model');
        let button = `<input class="hvr-pulse-grow" type='button' data-id='${this.id}' value='${text}'/>`;
        $el.append(button);
    }
}
