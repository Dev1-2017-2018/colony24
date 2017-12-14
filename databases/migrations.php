<?php

require_once __DIR__ . '/../vendor/fzaninotto/faker/src/autoload.php';
$faker = Faker\Factory::create (); // faker la dépendance sous forme d'un objet PHP

$default = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
];

$pdo = new PDO('mysql:host=localhost;dbname=colony24', 'root', '', $default);

print_r ($pdo);

$users = "
	CREATE TABLE `users` (
		`id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
		`pseudo` VARCHAR (100) NOT NULL,
		`email` VARCHAR(100) NOT NULL,
		`password` VARCHAR (100) NOT NULL,
		PRIMARY KEY (`id`)
	) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
";

$userScore = "
    CREATE TABLE `user_score` (
        `user_id`INT UNSIGNED NOT NULL AUTO_INCREMENT,
      	`score` BIGINT UNSIGNED NULL DEFAULT 0,
		KEY `user_score_user_id_foreign` (`user_id`),
		CONSTRAINT `user_score_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
    )  ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
";
$shop = "
	CREATE TABLE `shop` (
	`id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
	`Marque` VARCHAR (100) NOT NULL,
	`Nom` VARCHAR (100) NOT NULL,
	`Puissance` INT UNSIGNED NULL DEFAULT NULL,
	`Propulsion` INT UNSIGNED NULL DEFAULT NULL,
	`Energie` INT UNSIGNED NULL DEFAULT NULL,
	`Vitesse` INT UNSIGNED NULL DEFAULT NULL,
	`Reparation` INT UNSIGNED NULL DEFAULT NULL,
	`Prix` INT UNSIGNED NOT NULL,
	PRIMARY KEY (`id`)
	) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
";

$pdo->exec("DROP TABLE IF EXISTS shop");
$pdo->exec ("DROP TABLE IF EXISTS user_score");
$pdo->exec ("DROP TABLE IF EXISTS users");

$pdo->exec ($users);
$pdo->exec ($userScore);
$pdo->exec($shop);

$prepareUser = $pdo->prepare("INSERT INTO `users` (`pseudo`,`email`, `password`) VALUES (?,?,?)");

for($i = 0; $i < 150; $i++) {
	$prepareUser->bindValue(1, $faker->name);
	$prepareUser->bindValue(2, $faker->unique()->email);
	$prepareUser->bindValue(3, 'admin');

    $prepareUser->execute ();
}

$prepareUser = NULL;

$prepareUserScore = $pdo->prepare ("INSERT INTO `user_score` (`score`) VALUES (?)");

for ( $i = 0; $i < 150; $i++ ) {
    $prepareUserScore->bindValue (1, $faker->randomFloat ($nbMaxDecimals = NULL, $min = 0, $max = 3000));
    $prepareUserScore->execute ();
}

$prepareUserScore = NULL;
$prepareShop = $pdo->prepare("INSERT INTO `shop`
								(`id`, `Marque`, `Nom`, `Puissance`, `Propulsion`, `Energie`, `Vitesse`, `Reparation`, `Prix`)
								VALUES
								(1, 'Arnson', 'Batterie PWR 4', NULL, NULL, 300, NULL, NULL, 600),
								(2, 'Lukslit', 'Batterie SUH 7', NULL, NULL, 500, NULL, NULL, 800),
								(3, 'Arnson', 'Foreuse A-5', 2, NULL, NULL, 10, NULL, 500),
								(4, 'Arnson', 'Foreuse \"DeepBlue\"', 3, NULL, NULL, 15, NULL, 1500),
								(5, 'Lukslit', 'Moteur 032 CV', NULL, 110, NULL, NULL, NULL, 400),
								(6, 'Inland Marine', 'Moteur 128 CV', NULL, 150, NULL, NULL, NULL, 1600),
								(7, 'Arnson', 'Sondeuse S1', 2, NULL, NULL, NULL, NULL, 100),
								(8, 'Yun Capor', 'Sondeuse SD', 3, NULL, NULL, NULL, NULL, 250),
								(9, 'Arnson', 'Kit reparation blindage', NULL, NULL, NULL, NULL, 20, 300);
							");

$prepareShop->execute();

$prepareShop = NULL;
