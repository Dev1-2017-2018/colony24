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
    <div class="modal-content">
        <span class="close">&times;</span>
        <?php $id = 1;?>
        <ul>
            <?php foreach($datas as $val):?>
                <li style="margin-bottom: 30px;">
                    <?php
                    echo 'Marque : '.$val['brand'].'<br>'.
                        'Nom : '.$val['name'].'<br>';
                    if (isset($val['energy'])){
                        echo 'Energie disponible : '.$val['energy'].'<br>';
                    }elseif(isset($val['power']) && isset($val['speed'])){
                        echo 'Puissance : '.$val['power'].'<br>'.
                            'Vitesse : '.$val['speed'].'<br>';
                    }elseif (isset($val['propulsion'])){
                        echo 'Propulsion : '.$val['propulsion'].'<br>';
                    }elseif (isset($val['power'])){
                        echo 'Puissance : '.$val['power'].'<br>';
                    }else{
                        echo 'Réparation : '.$val['repair'].'<br>';
                    }
                    echo 'Prix : '.$val['price'].'<br>';
                    ?>
                    <input type='button' id="<?php echo $id;?>" value='Acheter'/>
                    <?php $id++;?>
                </li>
            <?php endforeach; ?>
        </ul>
    </div>
</div>

<script id="myScript">
    var userData = <?php echo $data; ?>;
</script>

<?php $content = ob_get_clean(); ?>
<?php include __DIR__ . '/../layouts/master.php' ?>
