<?php
/**
 * Created by PhpStorm.
 * User: Efingbv
 * Date: 05/12/2017
 * Time: 14:08
 */

function create_folder($user){

    mkdir ('../databases/users/'.$user);

    create_json($user);
}

function create_json($user){

     $json = array(
         'name' => $user,
         'boats' => array(
             'Bateau' => array(
                 'id'   => 0,
                 'name' => "Bateau",
                 'structure' => 100,
                 'blindage' => 50,
                 'capacite' => 50,
                 'stockage' => 0,
                 'x' => 0,
                 'y' => 0
             ),
         ),
         'wallet' => array(
             'gold' => 100,
             'ecu' => 300
         ),
         'inventory' => array()
     );

    $fp = fopen('../databases/users/'.$user.'/'.$user.'.json', 'w');
    fwrite($fp, json_encode($json, JSON_PRETTY_PRINT));
    fclose($fp);

    return $user;
}