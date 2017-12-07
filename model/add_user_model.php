<?php 

function checkEmail(){
	$pdo = getPDO();

	if (!empty($_POST)) {
		$prepare = $pdo->prepare("
		SELECT email
		FROM users
		WHERE email = ?;
	");

	$prepare->bindValue(1, $_POST['email']);

	$prepare->execute();

	return $prepare->fetch();
	}
	
}