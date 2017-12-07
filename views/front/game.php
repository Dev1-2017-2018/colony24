<?php ob_start() ;?>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<h1>Main harbor</h1>
    <input type="hidden" id="user" data-name='<?php echo $_SESSION["user"]; ?>'/>
	<p id="demo"></p>

    <ul id="boats"></ul>

    <input type="number" placeholder="x"/>
    <input type="number" placeholder="y"/>
    <input id="déplacement" type="button" value="se déplacer"/>

    <ul id="shop"></ul>

    <?php
        // récupére le username du joueur
        $user = $_SESSION["user"];

        if (isset($_POST['player'])){
            get_json();
        }

        function get_json(){
            $player = $_POST['player'];
            update_json_data($player);
        }

        function send_json($user){
           $monJson =  send_json_data($user);

           return $monJson;
        }

        $data = send_json($user);

    ?>
<script id="myScript">
    var userData = <?php echo $data; ?>;
</script>

<?php $content = ob_get_clean(); ?>
<?php include __DIR__ . '/../layouts/master.php' ?>
