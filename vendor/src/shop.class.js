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

        $('.closeButton').on('click',function(){
            $(this).closest('.modal').css('display','none');
            $(this).closest('.popUp').css('display','none');
        });

    }

    // propriété appelée dans boats.shop.class.js
    create_button(name){
        let $el = $('#equipement-model');
        let button = `<input type='button' data-id='${this.id}' value='Acheter un ${name}'/>`;
        $el.append(button);
    }
}
