export default class RenderBoats{
	constructor() {
	    this.name = 'renderBoats';
    }

    createBoatsButton(boats){
        if ($('#svgBoats').length) {$('#svgBoats').remove()}
        let boatType = [];
        let svgBoat = '<svg width="100%" height="'+window.innerHeight+'" id="svgBoats">';
        //  ----------------------------------------
        let coordinate = {
            x : 500,
            y : 200
        }
        //  ----------------------------------------
        for (let boat in boats) {
            if (boatType.indexOf(boats[boat].name) == -1) {
                boatType.push(boats[boat].name);
                svgBoat += '<rect x="'+coordinate.x+'" y="'+coordinate.y+'" width="100" height="100" style="fill:rgb(0,255,150);" id="'+boats[boat].name+'"/>';
                // ---------------------------------
                coordinate.x += 150
                // ---------------------------------
            }
        }
        svgBoat += '</svg>';
        $('#player-boats').prepend(svgBoat);
        $('#svgBoats').find('rect').on('click',function(){
            let list = '<div id="boatList" style="background-color: rgba(0,250,125,0.5); position: absolute;width: 90%;height: 90%;left: 5%;top: 5%"><h1 id="echapBoat" style="position:absolute;right:2%;top:0px;">X</h1></div>';
            $('body').append(list);
            let id = this.id;
            for (let boat in boats) {
                if(boats[boat].name == id){
                    $('#boatList').append(`<li id="li${boats[boat].id}" style="display: inline-block">
                        <div>
                            <p style="width: 30%; margin: 0 auto">${boats[boat].name} x:${boats[boat].x} y:${boats[boat].y}</p>
                            <input style="width: 45%; margin: 0 auto" type="number" placeholder="x"/>
                            <input style="width: 45%; margin: 0 auto" type="number" placeholder="y"/>
                            <input type="button" value="Move"/>
                        </div>
                    </li>`);
                    $(`li#li${boats[boat].id}`).on('click', `input[type='button']`, { that: boats[boat]}, function (e) {

                        let context = e.data.that;
    
                        console.log(context);
    
                        let inputX = $(`#li${context.id} > div > input:nth-child(2)`).val();
                        let inputY = $(`#li${context.id} > div > input:nth-child(3)`).val();
    
                        if (inputX != 0 || inputY != 0){
                            context.movement(inputY, inputX);
                            $(`#li${context.id} > div > p`).html(`${context.name} x:${context.x} y:${context.y}`);
                        }
                    });
                }
            }
            $('#echapBoat').on('click', function(){
                this.closest('div').remove();
            })
        });
    }
}