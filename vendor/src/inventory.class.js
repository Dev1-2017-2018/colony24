export default class Inventory
{
    constructor()
    {
        // espace qui contient le bouton inventory
        let $el = $("div#button-inventory");
        $('#button-inventory').on("click", function() {
        	document.getElementById("popupInventory").style.display = "block";
          document.getElementById('popUp').style.display = "grid";

          window.onclick = function(event) {
              if (event.target === document.getElementById('background'))
              {
                document.getElementById('popupInventory').style.display = 'none';
                document.getElementById('popUp').style.display = 'none';
              }
          }
        });

        $('.closeButton').on('click', function() {
          $(this).closest('.modal').css('display','none');
          $(this).closest('.popUp').css('display','none');
        });

        // Appel la function create_inventory
        this.createButtonInventory($el);
    }

    // Création du bouton inventory et de la popup
    createButtonInventory($el)
    {
        let button_inventory = `
            <input type='button' data-type='Inventory' id="InvBtn" value='Inventory'/>
        `
        $el.append(button_inventory);
    }
}
