export default class Inventory
{
    constructor()
    {
        // espace qui contient le bouton inventory
        let $el = $("div#button-inventory");
        $('#button-inventory').on("click", function() {
        	let inventory = document.getElementById("popupInventory");

        	inventory.style.display = "block";

        	window.onclick = function(event) {
        		if (event.target === inventory) inventory.style.display = "none";
        	}
        });

        $('.close').on('click', function() {
        	$(this).closest('.modal').css('display', 'none');
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