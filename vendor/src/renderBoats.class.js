export default class RenderBoats{
    constructor() {
        this.name = 'renderBoats';
        this.rendered = false;
    }

    createBoatsButton(boats){
        if ($('#svgBoats').length) {$('#svgBoats').remove()}
        let boatType = [];

        let boatCoordinate = {x:window.innerWidth/120,y:window.innerHeight/140};
        let boatSVGXY = [{x:boatCoordinate.x*27,y:boatCoordinate.y*75.5},{x:boatCoordinate.x*34.5,y:boatCoordinate.y*81},{x:boatCoordinate.x*41,y:boatCoordinate.y*80},{x:boatCoordinate.x*48,y:boatCoordinate.y*77}]
        let svgBoat = '';
            //'<svg width="100%" height="'+window.innerHeight+'" id="svgBoats"">';

        for (let boat in boats) {
            if (boatType.indexOf(boats[boat].name) == -1) {
                boatType.push(boats[boat].name);
                svgBoat += `<img id="${boats[boat].name}" class="iconeBoats" src="assets/svg/${boats[boat].name}.svg" style="left:${boatSVGXY[boatType.length-1].x}px; top:${boatSVGXY[boatType.length-1].y}px"/>`;
            }
        }
        $('#player-boats').html(svgBoat);

        // Click sur un bateau
        $('#player-boats').on('click', 'img',function(){
            // DISPLAY THE POP UP
            $('#popupBoat').html('<div id="boatList"></div>');
            document.getElementById('popupBoat').style.display = "block";
            document.getElementById('popUp').style.display = "grid";

            // CLOSE THE POP UP
            window.onclick = function(event) {
                if (event.target === document.getElementById('background'))
                {
                    document.getElementById('popupBoat').style.display = 'none';
                    document.getElementById('popUp').style.display = 'none';
                }
                if (event.target === document.getElementById('closeEquipment'))
                {
                    $('#popupEquipment').remove();
                }
            }

            let name = this.id;
            console.log(this);
            for (let boat in boats) {
                if(boats[boat].name == name){
                    $('#boatList').append(`<li id="li${boats[boat].id}">
                        <div>
                            <p>${boats[boat].name}</p>
                            <p>x:${boats[boat].x} y:${boats[boat].y}</p>
                            <input type="number" placeholder="x" min="0" max="500"/>
                            <input type="number" placeholder="y" min="0" max="500"/>
                            <div>
                            <input class="hvr-pulse-grow" type="button" id="move" value="Se déplacer"/>
                            <input class="hvr-pulse-grow" type="button" id="boatEquipment" value="Equipement" data-id="${boats[boat].id}"/>
                            </div>
                        </div>
                    </li>`);
                    $(`li#li${boats[boat].id}`).on('click', `input[type='button']#move`, { that: boats[boat]}, function (e) {

                        let context = e.data.that;

                        let inputX = $(`#li${context.id} > div > input:nth-child(3)`).val();
                        let inputY = $(`#li${context.id} > div > input:nth-child(4)`).val();

                        if (inputX != 0 || inputY != 0){
                            context.movement(inputY, inputX);
                        }
                    });

                    // click sur le bouton equipement d'un bateau
                    $(`li#li${boats[boat].id}`).on('click', `input[type='button']#boatEquipment`, { that: boats[boat]}, function (e) {
                        let context = e.data.that;
                        let parent = context.parent;
                        if (parent.renderBoats.rendered == false) {
                            parent.renderBoats.rendered = true;
                            let equipement = parent.inventory;
                            let boatEquipment = context.equipement;
                            let $eqt = $('ul#inventory2-model');
                            let dataId = $(this).data("id");

                            document.getElementById('popupEquipment').style.display = "block";
                            document.getElementById("popUp").style.display = "grid";

                            window.onclick = function (event) {
                                if (event.target === document.getElementById('background')) {
                                    document.getElementById('popupEquipment').style.display = "none";
                                    document.getElementById('popupBoat').style.display = "none";
                                    document.getElementById('popUp').style.display = "none";
                                    parent.renderBoats.rendered = false;
                                    $('#boatList').remove();
                                    $('ul#inventory2-model li').remove();
                                    $('ul#boatEquipment-model li').remove();
                                } else if (event.target === document.getElementById('popupBoat') || event.target === document.getElementById('boatList')){
                                    document.getElementById('popupEquipment').style.display = "none";
                                    parent.renderBoats.rendered = false;
                                    $('ul#inventory2-model li').remove();
                                    $('ul#boatEquipment-model li').remove();
                                }
                            }

                            // Vérification des Values
                            for (let value in equipement) {
                                $eqt.append(`<li id="${value}" data-id="${dataId}"></li>`);
                                if (equipement.hasOwnProperty(value)) {
                                    if (equipement[value] != "id") {
                                        let eqtProperty = "";
                                        for (let carac in equipement[value]) {
                                            if (equipement[value][carac] != "" && equipement[value][carac] != null) {
                                                if (carac != 'id' && carac != 'Nom' && carac != 'Prix') {
                                                    eqtProperty += `<br/> ${carac} : ${equipement[value][carac]}`;
                                                }
                                            }
                                        }
                                        inventoryRender($eqt, value, eqtProperty);
                                    }
                                }
                            }

                            $eqt = $('ul#boatEquipment-model');

                            // Vérification des Values
                            for (let value in boatEquipment) {
                                $eqt.append(`<li class="hvr-grow-shadow" id="${value}" data-id="${dataId}"></li>`);
                                if (boatEquipment.hasOwnProperty(value)) {
                                    if (boatEquipment[value] != "id") {
                                        let eqtProperty = "";
                                        for (let carac in boatEquipment[value]) {
                                            if (boatEquipment[value][carac] != "") {
                                                if (carac != 'id' && carac != 'Nom' && carac != 'Prix') {
                                                    eqtProperty += `<br/> ${carac} : ${boatEquipment[value][carac]}`;
                                                }
                                            }
                                        }
                                        inventoryRender($eqt, value, eqtProperty);
                                    }
                                }
                            }
                        }
                    });

                    function inventoryRender($eqt, value, eqtProperty){
                        $eqt.children().last().append(`
                            <p>
                                ${value}
                                ${eqtProperty}
                            </p>
                        `);
                    }
                }
            }

            let firstBoat = boats[Object.keys(boats)[0]];

            // Click sur un équipement de l'inventaire
            $(`ul#inventory2-model`).on('click', 'li',{ that: firstBoat}, function (e) {
                let context = e.data.that;
                let parent = context.parent;
                let equipement = parent.inventory;
                let equipementName = parent.inventory.Nom;
                let $eqt = $('ul#boatEquipment-model');

                let liId = $(this).attr('id');
                let dataId = $(this).data('id');

                let boatEquipment = parent.boats[dataId];

                // Vérification des Values
                equipement = equipement[liId];
                if (!parent.boats[dataId].equipement){
                    parent.boats[dataId].equipement = {};
                }
                if(!parent.boats[dataId].equipement[liId]) {

                    $eqt.append( `<li id="${liId}" data-id="${dataId}"></li>` );
                    let eqtProperty = "";
                    for ( let carac in equipement ) {
                        if (carac == "Type" && boatEquipment.equipement){
                            boatEquipment = boatEquipment.equipement;
                            for(let value in boatEquipment){
                                if (boatEquipment[value].Type == equipement.Type){
                                    console.log(boatEquipment[value]);
                                    console.log(equipement);
                                    return parent.actionlist.showInAL(`Vous avez déjà un équipement de ce type sur votre ${parent.boats[dataId].name}`);
                                }
                            }
                        }
                        if ( equipement[carac] != "" ) {
                            if ( carac != 'id' && carac != 'Nom' && carac != 'Prix' ) {
                                eqtProperty += `<br/> ${carac} : ${equipement[carac]}`;
                            }
                        }
                    }
                    $( this ).remove();
                    console.log(this);
                    if ( parent.boats[dataId].equipement ) {
                        parent.boats[dataId].equipement[liId] = {};
                        Object.assign(parent.boats[dataId].equipement[liId], equipement);
                    } else {
                        parent.boats[dataId].equipement = {};
                        parent.boats[dataId].equipement[liId] = {};
                        Object.assign(parent.boats[dataId].equipement[liId], equipement);
                    }

                    parent.actionlist.showInAL( `Vous avez retiré ${liId} de votre inventaire` );

                    delete parent.inventory[liId];
                    parent.saveDataJson( parent );
                    inventoryRender( $eqt, liId, eqtProperty );
                } else {
                    parent.actionlist.showInAL("Votre bateau contient déjà cet équipement");
                }
            });

            // Click sur un équipement équipé à notre bateau
            $(`ul#boatEquipment-model`).on('click', 'li',{ that: firstBoat}, function (e) {

                let liId = $(this).attr('id');
                let dataId = $(this).data('id');
                let context = e.data.that;
                let parent = context.parent;
                let equipements = parent.boats[dataId].equipement;
                let equipementName = parent.inventory.Nom;
                let $eqt = $('ul#inventory2-model');

                // Vérification des Values
                let equipement = equipements[liId];

                $eqt.append(`<li id="${liId}" data-id="${dataId}"></li>`);
                let eqtProperty = "";
                for (let carac in equipement) {
                    if(equipement[carac] != "") {
                        if (carac != 'id' && carac != 'Nom'  && carac != 'Prix') {
                            eqtProperty += `<br/> ${carac} : ${equipement[carac]}`;
                        }
                    }
                }
                $(this).remove();

                parent.actionlist.showInAL(`Vous avez retiré ${liId} de l'inventaire de votre ${parent.boats[dataId].name}`);

                parent.inventory[liId] = {};
                Object.assign(parent.inventory[liId], equipement);
                delete equipements[liId];
                parent.saveDataJson(parent);
                inventoryRender($eqt, liId, eqtProperty);
            });

            function inventoryRender($eqt, value, eqtProperty){
                $eqt.children().last().append(`
                    <p>
                        ${value}
                        ${eqtProperty}
                    </p>
                `);
            }

        });

      // end function
    }
}