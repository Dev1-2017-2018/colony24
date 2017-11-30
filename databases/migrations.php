<?php

require_once __DIR__.'/../vendor/fzaninotto/faker/src/autoload.php';
$faker = Faker\Factory::create(); // faker la dépendance sous forme d'un objet PHP

$default = [
	PDO::ATTR_ERRMODE				=> PDO::ERRMODE_EXCEPTION,
	PDO::ATTR_DEFAULT_FETCH_MODE	=> PDO::FETCH_ASSOC
];

$pdo = new PDO('mysql:host=localhost;dbname=colony24', 'root', 'root', $default);

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

$prepare = $pdo->prepare("INSERT INTO `users` (`pseudo`, `password`) VALUES (?, ?)");

for($i = 0; $i < 5; $i++) {
	$prepare->bindValue(1, $faker->name);
	$prepare->bindValue(2, 'admin');

	$prepare->execute();
}

$prepare = NULL;


