<?php ob_start() ;

echo "Connecté";


$content = ob_get_clean() ; ?>

<?php include __DIR__ . '/../layouts/master.php' ?>