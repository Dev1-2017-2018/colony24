import ZoneOR from './zoneor.class';
import ZoneISLES from './zoneisles.class';
import Water from './water.class';
import Snapsvg from 'snapsvg-cjs';

export default class Map {
    constructor() {
        this.zonesGold = [];
        this.zonesIsles = [];
        this.zonesWater = [];
        this.sizeMapY = window.innerHeight;
        this.sizeMapX = window.innerWidth;
        this.sizeTotal = this.sizeMapY + this.sizeMapX;

    }

    getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    createMap(nbIles = this.sizeTotal, nbOr = this.sizeTotal) {

        // données de la carte

        let paper = Snap(this.sizeMapX, this.sizeMapY);

        let itOr = 1;
        let itIles = 1;

        let ilePosition = [];

        function drawWater(Map, i, j) {
            console.log(Map);
            Map.zonesWater.push(new Water(j, i, 50, 50));
            let draw = paper.path("M" + j + "," + i + "  l50,0  0,50  -50,0  0,-50");
            draw.attr({
                fill: "blue"
            });
        }

        //générationY
        for (let i = 0; i <= this.sizeMapY; i += 50) {
            let presPosX = 0;
            //générationX
            for (let j = 0; j <= this.sizeMapX; j += 50) {

                let random = this.getRandom(0, 10);
                let it = 0;


                //création de main harbor 2x2 au milieu si la map est paire
                // if (i == sizeMapY / 2 && j == sizeMapX / 2 ||
                //     i == sizeMapY / 2 - 50 && j == sizeMapX / 2 - 50 ||
                //     i == sizeMapY / 2 - 50 && j == sizeMapX / 2 ||
                //     i == sizeMapY / 2 && j == sizeMapX / 2 - 50) {
                //     // port.push(paper.path("M" + j + "," + i + "  l50,0  0,50  -50,0  0,-50"));
                //     console.log('spawn de main harbor');
                // } else {

                    if (random == 0 || random == 1 || random == 2) {

                        if (itOr <= nbOr) {

                            this.zonesGold.push(new ZoneOR(j, i, 50, 50));
                            let drawGold = paper.path("M" + j + "," + i + "  l50,0  0,50  -50,0  0,-50");
                            drawGold.attr({
                                fill: "yellow"
                            });

                            itOr++;

                        } else { drawWater(this,i,j);}


                    } else if (random == 3) {


                        if (itIles <= nbIles) {
                            if (j > presPosX + 50) {

                                presPosX = j;

                                this.zonesIsles.push(new ZoneISLES(j, i, 50, 50));
                                let drawIsles = paper.path("M" + j + "," + i + "  l50,0  0,50  -50,0  0,-50");
                                drawIsles.attr({
                                    fill: "grey"
                                });

                                itIles++;

                            } else {drawWater(this,i,j);}
                        } else { drawWater(this,i,j);}

                    } 
                    else { drawWater(this,i,j);}

            }
        }

    }
}