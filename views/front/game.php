<!-- CSS PAR PAGE -->
<?php ob_start(); ?>
<link rel="stylesheet" href="/assets/css/popup.css">
<?php $cssPopUp = ob_get_clean(); ?>

<?php ob_start() ;?>
	<h1>Main harbor</h1>
    <input type="hidden" id="user" data-name='<?php echo $_SESSION["user"]; ?>'/>
	<p id="demo"></p>

    <ul style="list-style: none" id="boats"></ul>


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
<!-- Popup du shop -->
<div id="myModal" class="modal">
    <div id="modal-content">
        <ul id="equipement-model">

        </ul>
        <span class="close">&times;</span>
    </div>
</div>

<script src = "js/bundle.js"></script>
<script id="myScript">
    let userData = <?php echo $data; ?>;
    let shop_equipement = <?php echo json_encode($datas, JSON_PRETTY_PRINT); ?>
</script>
<?php $content = ob_get_clean(); ?>
<?php include __DIR__ . '/../layouts/master.php' ?>
