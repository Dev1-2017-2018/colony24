<?php

function getUserScore ( $limit, $offset )
{

    $pdo = getPDO ();

    $prepare = $pdo->prepare ("
		SELECT u.pseudo 
		AS name, us.score AS score 
		FROM users AS u 
		JOIN user_score AS us 
		ON u.id = us.user_id 
		ORDER  BY score DESC 
		LIMIT ?,?
		");

    $prepare->bindValue (1, $limit, PDO::PARAM_INT);
    $prepare->bindValue (2, $offset, PDO::PARAM_INT);
    $prepare->execute ();

    return $prepare->fetchAll ();

}

function getIdScore ()
{

    $pdo = getPDO ();
    $req = $pdo->query ("SELECT COUNT(id) as nbScore FROM users");

    $req->execute ();
    $data = $req->fetch ();

    return $data['nbScore'];
}