<?php

require_once __DIR__.'/../vendor/fzaninotto/faker/src/autoload.php';
$faker = Faker\Factory::create(); // faker la dépendance sous forme d'un objet PHP

$default = [
	PDO::ATTR_ERRMODE				=> PDO::ERRMODE_EXCEPTION,
	PDO::ATTR_DEFAULT_FETCH_MODE	=> PDO::FETCH_ASSOC
];

$pdo = new PDO('mysql:host=localhost;dbname=colony24', 'root', '', $default);

print_r($pdo);

$users = "
	CREATE TABLE `users` (
		`id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
		`pseudo` VARCHAR (100) NOT NULL,
		`password` VARCHAR (100) NOT NULL,
		PRIMARY KEY (`id`)
	) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
";

$userScore = "
    CREATE TABLE `user_score` (
        `user_id`INT UNSIGNED NOT NULL AUTO_INCREMENT,
      	`score` BIGINT UNSIGNED NULL DEFAULT 0,
		`gold` BIGINT UNSIGNED NULL DEFAULT 0,
		`silver` BIGINT UNSIGNED NULL DEFAULT 0,
		KEY `user_score_user_id_foreign` (`user_id`),
		CONSTRAINT `user_score_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE 
    )  ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
";

$pdo->exec("DROP TABLE IF EXISTS user_score");
$pdo->exec("DROP TABLE IF EXISTS users");

$pdo->exec($users);
$pdo->exec($userScore);

$prepareUser = $pdo->prepare("INSERT INTO `users` (`pseudo`, `password`) VALUES (?, ?)");

for($i = 0; $i < 5; $i++) {
	$prepareUser->bindValue(1, $faker->name);
	$prepareUser->bindValue(2, 'admin');

	$prepareUser->execute();
}

$prepareUser = NULL;


$prepareUserScore = $pdo->prepare("INSERT INTO `user_score` (`score`, `gold`,`silver`) VALUES (?, ?, ?)");

for($i = 0; $i < 5; $i++) {
	$prepareUserScore->bindValue(1, $faker->randomFloat($nbMaxDecimals = NULL, $min = 0, $max = 3000));
	$prepareUserScore->bindValue(2, $faker->randomFloat($nbMaxDecimals = NULL, $min = 0, $max = 3000));
	$prepareUserScore->bindValue(3, $faker->randomFloat($nbMaxDecimals = NULL, $min = 0, $max = 3000));

	$prepareUserScore->execute();
}

$prepareUserScore = NULL;


