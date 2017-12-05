<?php ob_start() ;?>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<h1>Main harbor</h1>
	<p id="demo"></p>

    <ul id="boats"></ul>

    <input type="number" placeholder="x"/>
    <input type="number" placeholder="y"/>
    <input id="déplacement" type="button" value="se déplacer"/>

    <ul id="shop"></ul>

<?php $content = ob_get_clean(); ?>
<?php include __DIR__ . '/../layouts/master.php' ?>
