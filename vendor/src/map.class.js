
export default class Map
{
    constructor()
    {
        this.map = [
            ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
            ["_", "G", "_", "_", "G", "_", "_", "_", "_", "_"],
            ["_", "_", "_", "I", "_", "_", "_", "_", "I", "_"],
            ["_", "_", "_", "_", "_", "_", "_", "G", "_", "_"],
            ["_", "_", "I", "_", "_", "_", "_", "_", "_", "_"],
            ["_", "_", "_", "_", "_", "_", "_", "I", "_", "_"],
            ["I", "_", "_", "_", "_", "_", "_", "_", "_", "G"],
            ["_", "G", "_", "G", "_", "I", "_", "_", "_", "I"],
            ["_", "_", "_", "_", "_", "_", "_", "G", "_", "_"],
            ["_", "_", "I", "_", "_", "_", "_", "_", "I", "_"]
        ];

        /*this.displayMap(this.map);*/
    }

    displayMap(map){
        //vérifier map
        if(Array.isArray(map) == false){
            console.error("crash de la fonction 11");
        }else{
            //afficher les couleurs
            let Chaine = "";
            let map_couleur = [];
            for (let i = 0; i < map.length; i++){
                for(let j = 0; j < map[i].length; j++){
                    if(map[i][j] === "_"){
                        map_couleur.push("background: blue");
                    }else if(map[i][j] === "G"){
                        map_couleur.push("background: yellow");
                    }else if(map[i][j] === "P"){
                        map_couleur.push("background: black");
                    }else if(map[i][j] === "I"){
                        map_couleur.push("background: green");
                    }else if(map[i][j] === "B"){
                        map_couleur.push("background: red");
                    }else{
                        console.error("crash de la fonction");
                        return 0;
                    }
                    Chaine += '%c   ';
                }
                Chaine += '\n';
            }
            console.log(Chaine, ...map_couleur);
            return "La map a été affichée correctement";
        }
    }
}