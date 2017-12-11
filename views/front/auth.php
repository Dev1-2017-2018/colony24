<?php ob_start() ; ?>

	<section class="login-page">
	  <div class="form">
			<form action="/auth" method="POST">
			    <?php echo getFlashMessage() ; ?>
	      <input type="email" name="email" placeholder="Email">
	      <input type="password" name="password" placeholder="Mot de passe">
	      <input class="logreg_button" type="submit" name="Connexion" value="Connexion">
				<input type="hidden" name="token" value="<?php echo md5( date('Y-m-d h:i:00') . SALT ); ?>">
	      <p class="message">Pas de compte ? <a href="/add_user">Crée un compte</a></p>
	    </form>
	  </div>
	</section>

<?php $content = ob_get_clean() ; ?>

<?php include __DIR__ . '/../layouts/master.php' ?>
