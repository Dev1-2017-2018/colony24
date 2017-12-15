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
	`Nom` VARCHAR (100) NOT NULL,
	`Marque` VARCHAR (100) NOT NULL,
	`Puissance` INT UNSIGNED NULL DEFAULT NULL,
	`Propulsion` INT UNSIGNED NULL DEFAULT NULL,
	`Energie` INT UNSIGNED NULL DEFAULT NULL,
	`Vitesse` INT UNSIGNED NULL DEFAULT NULL,
	`Type` VARCHAR (100) NOT NULL,
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

for($i = 0; $i < 15; $i++) {
	$prepareUser->bindValue(1, $faker->name);
	$prepareUser->bindValue(2, $faker->unique()->email);
	$prepareUser->bindValue(3, 'admin');

    $prepareUser->execute ();
}

$prepareUser = NULL;

$prepareUserScore = $pdo->prepare ("INSERT INTO `user_score` (`score`) VALUES (?)");

for ( $i = 0; $i < 15; $i++ ) {
    $prepareUserScore->bindValue (1, $faker->randomFloat ($nbMaxDecimals = NULL, $min = 0, $max = 3000));
    $prepareUserScore->execute ();
}

$prepareUserScore = NULL;
$prepareShop = $pdo->prepare("INSERT INTO `shop`
								(`id`, `Nom`, `Marque`, `Puissance`, `Propulsion`, `Energie`, `Vitesse`, `Type`,`Prix`)
								VALUES
								(1, 'Batterie PWR 4', 'Arnson', NULL, NULL, 300, NULL, 'Batterie',600),
								(2, 'Batterie SUH 7', 'Luksli', NULL, NULL, 500, NULL, 'Batterie',800),
								(3, 'Foreuse A-5', 'Arnson', 2, NULL, NULL, 10, 'Foreuse',500),
								(4, 'Foreuse DeepPurple', 'Arnson', 3, NULL, NULL, 15, 'Foreuse',1500),
								(5, 'Moteur TK78', 'Lukslit', NULL, 110, NULL, NULL, 'Moteur',400),
								(6, 'Moteur 128 CV', 'Inland Marine', NULL, 150, NULL, NULL, 'Moteur',1600),
								(7, 'Sondeuse S1', 'Arnson', 2, NULL, NULL, NULL, 'Sondeuse',100),
								(8, 'Sondeuse SD', 'Yun Capor', 3, NULL, NULL, NULL, 'Sondeuse',250)
							");

$prepareShop->execute();

$prepareShop = NULL;
