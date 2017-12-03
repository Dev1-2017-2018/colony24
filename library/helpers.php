<?php

/**
 * @return pdo Connect to mysql
 */
function getPDO ()
{

    $defaults = [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, // PDO remonte les erreurs SQL, sinon il retourne une bête erreur PHP
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC // retournera les données dans un tableau associatifs
    ];

    $pdo = new PDO('mysql:host=' . DB_HOST . ';dbname=' . DB_DBNAME, DB_USER, DB_PASSWORD, $defaults);

    return $pdo;

}