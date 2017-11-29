<?php

require_once __DIR__."/../app.php";

if($uri == '/'){
	//...
} else {
	header('HTTP:/1.1 404 Not Found');
	echo "<html><body><h1>Page Not Found</h1></body></html>";
}