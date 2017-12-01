<?php ob_start() ; ?>
	<div class="form">
		<form action="/auth" method="POST">
		    <?php echo getFlashMessage() ; ?>
		    <p><input type="email" name="email" placeholder="Email"></p>
		    <p><input type="password" name="password" placeholder="Password"></p>
		    <p><input type="submit" name="Connexion" value="Connexion"></p>
		    <input type="hidden" name="token" value="<?php echo md5( date('Y-m-d h:i:00') . SALT ); ?>">
		</form>
		<a href="/add_user">ADD USER</a>
	</div>
<?php $content = ob_get_clean() ; ?>

<?php include __DIR__ . '/../layouts/master.php' ?>