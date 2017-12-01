<?php

define("DB_HOST", "localhost");
define("DB_USER", "root");
define("DB_PASSWORD", "");
define("DB_DBNAME", "colony24"); // A DEFINIR

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

# autoloader
require_once __DIR__ . '/library/helpers.php';
require_once __DIR__ . '/controllers/back_controller.php';
require_once __DIR__ . '/model/user_score_model.php';