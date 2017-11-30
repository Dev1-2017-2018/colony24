<?php

require_once __DIR__.'/../vendor/fzaninotto/faker/src/autoload.php';
$faker = Faker\Factory::create(); // faker la dépendance sous forme d'un objet PHP

$default = [
	PDO::ATTR_ERRMODE				=> PDO::ERRMODE_EXCEPTION,
	PDO::ATTR_DEFAULT_FETCH_MODE	=> PDO::FETCH_ASSOC
];

$pdo = new PDO('mysql:host=localhost;dbname=colony24', 'root', '', $default);

print_r($pdo);
<<<<<<< HEAD
=======
$pdo = new PDO('mysql:host=DB_HOST;dbname=DB_DBNAME', 'DB_USER', 'DB_PASSWORD', $default);
=======
>>>>>>> 4393293ca619b3665ba363174cee667005244fa8

$users = "
	CREATE TABLE `users` (
		`id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
		`pseudo` VARCHAR (100) NOT NULL,
		`password` VARCHAR (100) NOT NULL,
		`score` BIGINT UNSIGNED NULL DEFAULT 0,
		`or` BIGINT UNSIGNED NULL DEFAULT 0,
		`argent` BIGINT UNSIGNED NULL DEFAULT 0,
		PRIMARY KEY (`id`)
	) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
";

$pdo->exec("DROP TABLE IF EXISTS users");

$pdo->exec($users);

$prepare = $pdo->prepare("INSERT INTO `users` (`pseudo`, `password`) VALUES (?, ?)");

for($i = 0; $i < 5; $i++) {
	$prepare->bindValue(1, $faker->name);
	$prepare->bindValue(2, 'admin');

	$prepare->execute();
}

$prepare = NULL;
