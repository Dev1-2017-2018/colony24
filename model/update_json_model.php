<?php
/**
 * Created by PhpStorm.
 * User: Efingbv
 * Date: 05/12/2017
 * Time: 23:19
 */

function update_json_data($user){

    // ouvre le fichier json du joueur
    $fp = fopen('../databases/users/'.$user['name'].'/'.$user['name'].'.json', 'w');

    // écris toutes les infos du joueur à l'intérieur
    fwrite($fp, json_encode($user, JSON_PRETTY_PRINT));

    // ferme le fichier
    fclose($fp);
}