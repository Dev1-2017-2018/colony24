<?php ob_start() ; ?>

<h1>HELLO</h1>

<?php $content = ob_get_clean() ; ?>

<?php include __DIR__ . '/../layouts/master.php' ?>