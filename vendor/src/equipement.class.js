export default class Equipement{
    constructor (equipement,$el, id_equip, append)
    {
        if(append){
            $el.append(`<li></li>`);
        }

        let property = null;
        for (property in equipement) {
            if (equipement.hasOwnProperty(property)) {
                if(equipement[property] != null){
                    this[property] = equipement[property];
                    if(append) {
                        if ( property != 'id' && property != 'Prix' ) {
                            this.render_equipement( $el, property, equipement[property] );
                        }
                        if ( property == 'Prix' ) {
                            $el.children().last().append( `<input type="button" data-id-equip="${id_equip}" value="Acheter pour ${equipement[property]} écus">` );
                        }
                    }
                }
            }
        }
    }
    render_equipement($el, property, equipement_property){
        $el.children().last().append(`
            <p>${equipement_property}</p>
        `);
    }
}
