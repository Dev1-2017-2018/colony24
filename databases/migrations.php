<?php


$default = [
	PDO::ATTR_ERRMODE				=> PDO::ERRMODE_EXCEPTION,
	PDO::ATTR_DEFAULT_FETCH_MODE	=> PDO::FETCH_ASSOC
];

$pdo = new PDO('mysql:host=DB_HOST;dbname=DB_DBNAME', 'DB_USER', 'DB_PASSWORD', $defaults);
<<<<<<< HEAD

=======
>>>>>>> c17f8d5c6d508743b0d33f4efa98d75796e3bc7b
