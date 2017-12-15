export default class Equipement{
    constructor (equipement,$el, id_equip, append)
    {
        if(append){
            $el.append(`<li class="hvr-grow-shadow "></li>`);
        }

        let property = null;
        for (property in equipement) {
            if (equipement.hasOwnProperty(property)) {
                if(equipement[property] != null){
                    this[property] = equipement[property];
                    if(append) {
                        if ( property != 'id' && property != 'Prix' && property != 'Vitesse' && property != 'Energie' && property != 'Puissance' && property != 'Propulsion' && property != 'Reparation') {
                            this.render_equipement( $el, property, equipement[property] );
                        }
                        if ( property == 'Vitesse' || property == 'Energie' || property == 'Puissance' || property == 'Propulsion' || property == 'Reparation' ) {
                          $el.children().last().append(`
                              <p>
                                  ${property} : ${equipement[property]}
                              </p>
                          `);
                        }
                        if ( property == 'Prix' ) {
                            $el.children().last().append( `<input class="hvr-pulse-grow" type="button" data-id-equip="${id_equip}" value="${equipement[property]}">` );
                        }
                    }
                }
            }
        }
    }
    render_equipement($el, property, equipement_property){
        $el.children().last().append(`
            <p>
                ${equipement_property}
            </p>
        `);
    }
}
