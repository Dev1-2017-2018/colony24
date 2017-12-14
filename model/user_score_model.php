<?php

function getIdScore()
{

    $pdo = getPDO();
    $req = $pdo->query("SELECT COUNT(id) as nbScore FROM users");

    $req->execute();
    $data = $req->fetch();

    return $data['nbScore'];
}