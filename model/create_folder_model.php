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
                 'capacite' => 300,
                 'stockage' => 0,
                 'x' => 0,
                 'y' => 0,
                 'equipement' => array(
                     'Batterie PWR 4' => array(
                         'Energie' => 300,
                         'Marque' => 'Arnson',
                         'Nom' => 'Batterie PWR 4',
                         'Type' => 'Batterie',
                         'Prix' => 600
                     ),
                     'Foreuse DeepBlue' => array(
                         'Marque' => 'Arnson',
                         'Nom' => 'Foreuse DeepBlue',
                         'Puissance' => 3,
                         'Vitesse' => 15,
                         'Type' => 'Foreuse',
                         'Prix' => 1500
                     ),
                     'Sondeuse S1' => array(
                         'Marque' => 'Arnson',
                         'Nom' => 'Sondeuse S1',
                         'Puissance' => 2,
                         'Type' => 'Sondeuse',
                         'Prix' => 100
                     ),
                     'Moteur 032 CV' => array(
                         'Marque' => 'Lukslit',
                         'Nom' => 'Moteur 032 CV',
                         'Propulsion' => 110,
                         'Type' => 'Moteur',
                         'Prix' => 400
                     )
                 )
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