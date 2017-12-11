<?php

function score ()
{
    #Pagination
    $nbDep = getIdScore();

    $perPage = 4;
    $cPage = 1;
    $nbPage = ceil($nbDep / $perPage);


    if ( isset($_GET['page']) AND $_GET['page'] > 0 AND $_GET['page'] <= $nbPage ) {

        $_GET['page'] = intval($_GET['page']);
        $cPage = $_GET['page'];

    }else {
        $cPage = 1;
    }

    $datas = getUserScore(( $cPage - 1 ) * $perPage, $perPage);
    include __DIR__ . '/../views/back/score.php';
}


function main ()
{
    $datas = getShop();

    include __DIR__ . '/../views/front/game.php';
}