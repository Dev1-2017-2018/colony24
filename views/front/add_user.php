<?php ob_start() ; ?>

<section>
	<form action="" method="POST">
	    <p><input type="text" name="pseudo" placeholder="Pseudo"></p>
	    <p><input type="email" name="email" placeholder="Email"></p>
	    <p><input type="password" name="password" placeholder="Mot de passe"></p>
	    <p><input type="password" name="passcheck" placeholder="Vérification Mot de Passe" ></p>
	    <p><input type="submit" value="Ajouter"></p>
	</form>
</section>

<?php $content = ob_get_clean() ; ?>

<?php include __DIR__ . '/../layouts/master.php' ?>