<?php 

function scoreName(){
	$pdo = getPDO();

	$prepare = $pdo->prepare("
	SELECT pseudo, score
	FROM users, user_score
	WHERE users.id = user_score.user_id
	ORDER BY score DESC
	LIMIT 10;
	");

	$prepare->execute();

	return $prepare->fetchAll();
	
}



function scoreUser(){
	$pdo = getPDO();
	$user = $_SESSION['user'];

	$prepare = $pdo->prepare("
		SELECT pseudo, score
		FROM user_score, users
		WHERE users.id = user_score.user_id
		AND pseudo = ?;
	");

	$prepare->bindValue(1, $user);

	$prepare->execute();

	return $prepare->fetchAll();
}


function rankUser(){
	$pdo = getPDO();
	$scoreUser = scoreUser();
	$score = $scoreUser[0]['score'];

	$prepare = $pdo->prepare("
		SELECT user_id, COUNT(score) as rank
		FROM user_score
		WHERE score > ?;
	");

	$prepare->bindValue(1, $score);

	$prepare->execute();

	return $prepare->fetchAll();
}