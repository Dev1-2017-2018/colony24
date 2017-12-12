<?php ob_start() ; ?>

<section class="login-page">
	<div class="form reg">
		<form action="" method="POST">
			<input type="text" name="pseudo" placeholder="Pseudo">
			<input type="email" name="email" placeholder="Email">
			<input type="password" name="password" placeholder="Mot de passe">
			<input type="password" name="passcheck" placeholder="Vérification Mot de Passe" >
			<p><input class="logreg_button" type="submit" value="Ajouter"></p>
<<<<<<< HEAD
			<p class="message">Deja compte ? <a href="/">Connectez vous !</a></p>
=======
			<p class="message">Deja un compte ? <a href="/">Connectez vous !</a></p>
>>>>>>> 049fa603fd1fca9ea3e0d101858834022659acb2
		</form>
	</div>
</section>

<?php $content = ob_get_clean() ; ?>
<<<<<<< HEAD
<?php include __DIR__ . '/../layouts/master.php'?>
=======

<?php include __DIR__ . '/../layouts/master.php' ?>
>>>>>>> 049fa603fd1fca9ea3e0d101858834022659acb2
