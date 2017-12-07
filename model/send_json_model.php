<?php
/**
 * Created by PhpStorm.
 * User: Efingbv
 * Date: 06/12/2017
 * Time: 15:29
 */

function send_json_data($user){

    // ouvre le fichier json du joueur
    $fp = fopen('../databases/users/'.$user.'/'.$user.'.json', 'r');

    // écris toutes les infos du joueur à l'intérieur
    $monJson = fread($fp, filesize('../databases/users/'.$user.'/'.$user.'.json'));

    // ferme le fichier
    fclose($fp);

    return $monJson;
}