<?php

require_once __DIR__."/../app.php";

if($uri == '/'){

	index();

}elseif( $uri === '/add_user' ){

    add_user();

}elseif( $uri === '/auth' && $method == 'POST' ){

    auth();

}elseif( $uri == '/admin' ){

	if( !isset($_SESSION['auth']) ){
		$_SESSION['message'] = "Vous n'avez pas les autorisations pour visiter cette page";
		header('Location: /');
	    exit;
	}

	main();

}elseif($uri == '/score'){

	score();
	
} else {
	header('HTTP:/1.1 404 Not Found');
	echo "<html><body><h1>Page Not Found</h1></body></html>";
}