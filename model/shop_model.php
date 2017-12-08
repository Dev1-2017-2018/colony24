<?php
/**
 * Created by PhpStorm.
 * User: disantnicolas
 * Date: 07/12/2017
 * Time: 12:07
 */

function getShop(){
    $pdo = getPDO();
    $req = $pdo->query("SELECT * FROM shop");

    $req->execute();
    return $req->fetchAll();

}