<?php ob_start (); ?>
    <section>
        <div>
            <ul>
                <!-- Check if $prepare not empty -->
                <?php if ( count ($datas) > 0 ) : ?>

                    <?php foreach ( $datas as $data ): ?>
                        <li>
                            <?php
                            echo $data['name'] . '<br>' . " Score : " . $data['score'];
                            ?>
                        </li>
                    <?php endforeach; ?>

                <?php else : ?>
                    <li>Pas de score pour le moment</li>
                <?php endif; ?>
            </ul>

            <div class="pagination">
                <?php
                for ( $i = 1; $i <= $nbPage; $i++ ) {
                    if ( $i == $cPage ) {
                        echo " " . $i . " /";
                    }else {
                        echo "<a href=\"score?page=$i\"> $i </a>/";
                    }
                }
                ?>
            </div>
        </div>
    </section>

<?php $content = ob_get_clean (); ?>

<?php include __DIR__ . '/../layout/master.php' ?>