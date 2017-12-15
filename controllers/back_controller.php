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

function map ()
{
    $x = $_GET['x'];
    $y = $_GET['y'];

    $im = imagecreatefrompng("../databases/map.png");
    $rgb = imagecolorat($im, $x, $y);
    $r = ($rgb >> 16) & 0xFF;
    $g = ($rgb >> 8) & 0xFF;
    $b = $rgb & 0xFF;

    $data = ["x" => $x, "y" => $y, "p" => $r, "g" => $g, "i" => $b]; 
    $json = json_encode($data);
    echo $json;
}

function moveBoat () {

    $x = $_GET['x'];
    $y = $_GET['y'];

    $im = imagecreatefrompng("../databases/map.png");
    $rgb = imagecolorat($im, $x, $y);
    $r = ($rgb >> 16) & 0xFF;
    $g = ($rgb >> 8) & 0xFF;
    $b = $rgb & 0xFF;

    $data = [
    "success"=>0,
    "x"=>$x,
    "y"=>$y
    ];

    if($b == 0){
        $data["success"] = 1;
        $data["gold"]  = $g;
        if($g>0){
            $color = imagecolorallocate($im, $r, 0, $b);
            imagesetpixel($im, $x, $y, $color);
            imagepng($im, "../databases/map.png");
            imagedestroy($im);
        }
    }

    echo json_encode($data);
}

function update(){

    $pdo = getPDO();

    $user = $_SESSION['user'];

    $prepare = $pdo->prepare("SELECT score 
                              FROM user_score, users
                              WHERE users.id = user_score.user_id 
                              AND pseudo = ?");

    $prepare->bindValue(1, $user);

    $prepare->execute();
    $scoreActuel = $prepare->fetch();

    $prepare = NULL;

    $gold = $_GET['gold'];
    var_dump($scoreActuel);
    echo $gold;
    $scoremodif = $scoreActuel['score'] + $gold;
    $id = $_SESSION['auth'];

    $prepare = $pdo->prepare("UPDATE user_score 
                              SET score = ?
                              WHERE user_id = ?");

    $prepare->bindValue(1, $scoremodif);
    $prepare->bindValue(2, $id);

    $prepare->execute();

    include __DIR__ . '/../views/front/game.php';
}


function main (){
    $datas = getShop();
    $datasScore = scoreName();
    $scoreUser = scoreUser();
    $rankUser = rankUser();

    include __DIR__ . '/../views/front/game.php';
}

function getClassement(){
    $datasScore = scoreName();
    $scoreUser = scoreUser();
    $rankUser = rankUser();

    include __DIR__ . '/../views/front/getClassement.php';
}