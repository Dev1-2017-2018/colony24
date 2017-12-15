<!-- Affichage de Main Harbor -->
<?php ob_start() ;?>







<!-- POP UP -->
<section id="popUp" style="display: none;">
    <!-- POP UP FOR ASIDE BUTTON-->
    <!-- special -->
    <div id="background"></div>
    <!-- <span class="closeButton">&times;</span> -->
    <!-- shop -->
    <div id="popupShop" class="modal fadeInDown" style="display: none;">
        <ul id="equipement-model">
        </ul>
    </div>
    <!-- inventory -->
    <div id="popupInventory" class="modal fadeInDown" style="display: none;">
        <button class="hvr-wobble-top" id="change">Changer gold en écus</button>
        <ul id="inventory-model"></ul>
    </div>
    <!-- classment -->
    <div id="popupClassement" class="modal fadeInDown" style="display: none;">
    </div>

    <!-- POP UP FOR BOAT -->
    <div id="popupBoat" class="modal flipInX" style="display: none;">
    </div>
    <!-- equipment -->
    <div id="popupEquipment" class="modal zoomIn" style="display: none;">
        <ul id="inventory2-model">
            <p>Inventaire</p>
        </ul>
        <hr>
        <ul id="boatEquipment-model">
            <p>Equipement</p>
        </ul>
    </div>

</section>

<!-- END POP UP -->

<section class="container">

    <!-- ASIDE -->
    <div class="aside actionList">
        <ul id="listText"></ul>
    </div>
    <div class="aside buttons">
        <div id="shop" class="hvr-float">
            <p class="button" id="button-shop">Shop</p>
        </div>
        <div id="inventory" class="hvr-float">
            <p class="button" id="button-inventory">Inventaire</p>
        </div>
        <div id="classement" class="button-classment hvr-float">
            <p class="button" id="button-classement">Classement</p>
        </div>
    </div>

    <!-- INFO PLAYER -->
    <div class="player-info">
        <div id="player-name">
            <p class="hvr-wobble-top"><?php echo $_SESSION["user"]?></p>
        </div>
        <div id="player-wallet">
            <div class="hvr-wobble-top">
                <svg width="10" height="20" id="gold_colony24" data-name="gold_colony24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489.6 411.44">
                    <title>gold_colony24</title>
                    <path d="M437,319.13H410.36L360.68,220.7H330.11l-45.7-90.55H207.19l-45.7,90.55H130.93L81.25,319.13H54.66L1,425.44H490.6ZM169.53,393.76,135.84,327h67.38Zm76.27-98.43-29.71-58.88h59.43Zm76.27,98.43L288.38,327h67.39ZM262.86,71.09H227.43V14h35.43Zm63.54,28L296.2,80.56,327.29,29.9l30.2,18.54Zm49.18,55.53-18-30.52,44.91-26.49,18,30.53ZM166.09,99.1,135,48.44,165.2,29.9l31.09,50.67Zm-49.17,55.52L72,128.13,90,97.61l44.91,26.49Zm0,0" transform="translate(-1 -14)"/>
                </svg>
                <p>GOLD :</p>
                <p id="gold"></p>
            </div>
            <div class="hvr-wobble-top">
                <svg width="10" height="20" id="ecu_colony24" data-name="gold_colony24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489.6 411.44">
                    <title>ecu_colony24</title>
                    <path d="M104.3,31.1c-4.4,8.2-9.6,19.3-9.6,32.2c0,11.8,4.1,22.8,7.7,31.1c3.5,8,7.5,15.1,11.7,22.4c0.4,0.7,1.6,2.7,9,4.1
  								c1.7,0.3,3.5,0.5,5.4,0.5c6.1,0,11.8-1.8,17.3-3.5c5.2-1.6,10.2-3.2,15.1-3.2h0.2c7.4,0.1,14.3,2.4,21.6,4.8c3.2,1,6.4,2.2,9.8,3
  								c1.4,0.4,2.3,0,2.9-0.3c16.4-8.7,30.7-20.2,40.1-32.5c4.7-6.1,8.7-14.3,12.2-25.1c1.6-5,3.4-12.4,0.3-19.4
  								c-4.1-9-14.8-10.1-22.5-10.1c-2.3,0-16.5,0.5-20.2,0.5c-9.5,0-20.5-0.7-30.9-6c-4.5-2.3-8.7-5.3-13.2-8.4
  								c-6.8-4.8-13.8-9.7-22-12.3c-2.3-0.7-4.6-1.1-6.8-1.1C116.7,8,107.3,25.4,104.3,31.1z"/>
                    <path d="M221.1,153.6c-6.5-6.1-12.5-11.5-18.8-16.8c-5.7-2-17.2-2.1-24.1-4.3c-6.4-2.1-13.1-4.4-19.9-4c-6.3,0.4-12.1,2.6-18.1,4.1
  								c-6.8,1.6-13.3,2.1-20.2,0.8c0,0-9.4-1.4-31.5-17.7c-9-6.7-18.6-12.6-29.6-15c-10.5-2.3-15,13.8-4.4,16.1c10.1,2.2,18.4,8,26.5,14
  								c0,0,0,0,0.1,0c-11.5,1.5-22.2,6.1-33.4,9.2c-10.4,2.8-6,19,4.4,16.1c11.3-3.1,22.5-8.5,34.3-9.1c1.9-0.1,3.7,0.1,5.5,0.5
  								c-26.4,21.7-50.7,45.6-68,75.4c-15,25.8-21.7,55.8-12.7,84.9c5.3,17,15.4,32.1,27.1,45.3C48.5,364.4,60,374.8,73.7,382
  								c24.7,13,53.5,18.3,81.1,19.4c29.6,1.2,60.2-2.9,87.5-14.8c24.9-10.9,46-29.7,54.9-55.9c11.6-34.6,1.4-73-15.5-103.9
  								C266.3,198.6,244.5,175.7,221.1,153.6z M100.3,255.9c2.4,0,4.5,0.9,6.2,2.6c1.8,1.8,2.6,3.9,2.6,6.4c0,2.5-0.9,4.6-2.6,6.3
  								c-1.8,1.7-3.8,2.6-6.2,2.6H82.7v18.2h26.5c2.5,0,4.6,0.9,6.3,2.7c1.7,1.8,2.6,3.8,2.6,6.2c0,2.6-0.9,4.7-2.6,6.4
  								c-1.7,1.7-3.8,2.6-6.3,2.6H74c-2.3,0-4.4-0.9-6.2-2.6c-1.8-1.7-2.7-3.9-2.7-6.4v-66.6c0-2.3,0.8-4.4,2.5-6.2
  								c1.7-1.9,3.8-2.8,6.4-2.8h35.2c2.5,0,4.6,0.9,6.3,2.7c1.7,1.8,2.6,3.9,2.6,6.4c0,2.6-0.9,4.7-2.6,6.4c-1.7,1.7-3.8,2.5-6.3,2.5
  								H82.7v12.9H100.3z M143.9,284.5c0.7,1.5,1.5,2.8,2.6,3.9c1.1,1.1,2.4,2,3.8,2.6c1.5,0.6,3,0.9,4.7,0.9c2.3,0,4.3-0.5,6.1-1.6
  								c1.8-1.1,3.2-2.5,4.4-4.2c1-1.5,2-2.7,3-3.7c1.1-1,2.8-1.5,5.2-1.5s4.5,0.9,6.2,2.6c1.8,1.7,2.6,3.9,2.6,6.4c0,0.9-0.2,1.7-0.5,2.5
  								c-0.3,0.8-0.7,1.6-1.1,2.5c-2.6,4.5-6.2,8.1-10.9,10.8c-4.7,2.7-9.7,4-15.1,4c-3.9,0-7.6-0.8-11.3-2.3c-3.6-1.5-6.8-3.7-9.6-6.4
  								c-2.8-2.7-5-5.9-6.6-9.5c-1.6-3.7-2.5-7.6-2.5-11.9v-24.4c0-4,0.8-7.8,2.3-11.4c1.5-3.6,3.7-6.8,6.4-9.6c2.7-2.8,5.9-5,9.5-6.6
  								c3.6-1.6,7.5-2.5,11.7-2.5c5.3,0,10.3,1.3,15,4c4.7,2.7,8.4,6.4,11.1,11.2c0.4,0.6,0.7,1.4,1,2.3c0.3,0.9,0.5,1.7,0.5,2.5
  								c0,2.5-0.9,4.6-2.6,6.4c-1.8,1.8-3.9,2.6-6.4,2.6c-1.9,0-3.5-0.5-4.8-1.5c-1.2-1-2.3-2.3-3.3-3.8c-1.1-1.8-2.5-3.2-4.3-4.2
  								c-1.8-1.1-3.9-1.6-6.2-1.6c-1.7,0-3.2,0.3-4.7,0.9c-1.5,0.6-2.7,1.5-3.8,2.6c-1.1,1.1-2,2.4-2.6,3.9c-0.7,1.5-1,3.1-1,4.8v24.4
  								C142.9,281.4,143.2,283,143.9,284.5z M249.1,279.6c-0.1,4.1-0.9,7.9-2.5,11.5c-1.5,3.6-3.7,6.8-6.4,9.6c-2.7,2.8-5.9,5-9.5,6.6
  								c-3.7,1.6-7.6,2.5-11.9,2.5c-4.1,0-7.9-0.8-11.5-2.3c-3.6-1.5-6.7-3.7-9.3-6.4c-2.6-2.7-4.8-5.9-6.4-9.6c-1.6-3.7-2.5-7.6-2.7-11.9
  								v-45.4c0-2.5,0.9-4.6,2.6-6.4c1.7-1.8,3.9-2.7,6.4-2.7c2.5,0,4.5,0.9,6.2,2.7c1.7,1.8,2.5,3.9,2.5,6.4v45.4c0,1.8,0.3,3.4,1,4.8
  								c0.7,1.5,1.5,2.8,2.6,3.9c1.1,1.1,2.4,2,3.8,2.7c1.5,0.6,3,0.9,4.7,0.9c1.7,0,3.3-0.3,4.8-0.9c1.5-0.6,2.8-1.5,3.9-2.7
  								c1.1-1.1,2-2.5,2.7-3.9c0.7-1.5,1-3.1,1-4.8v-45.4c0-2.5,0.9-4.6,2.6-6.4c1.7-1.8,3.9-2.7,6.4-2.7c2.5,0,4.6,0.9,6.3,2.7
  								c1.7,1.8,2.6,3.9,2.6,6.4V279.6z"/>
                </svg>
                <p>ECU :</p>
                <p id="ecu"></p>
            </div>
        </div>
    </div>

    <!-- MAIN -->
    <div id="player-boats">
        <ul id="boats"></ul>
    </div>
    <div id="main">
        <img src="assets/svg/island.svg" class="island">
    </div>
</section>

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
    let userData = <?php echo $data; ?>;
    let shop_equipement = <?php echo json_encode($datas, JSON_PRETTY_PRINT); ?>;
</script>

<script src ="js/bundle.js"></script>

<?php $content = ob_get_clean(); ?>
<?php include __DIR__ . '/../layouts/master.php' ?>