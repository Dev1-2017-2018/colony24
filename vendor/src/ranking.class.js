export default class Ranking{
    constructor (){

    $('#button-classement').on('click',function(){
            let modal = document.getElementById('popupClassement');

            //  Affiche la popup
            modal.style.display = "block";

            window.onclick = function(event) {
                if (event.target === modal) modal.style.display = 'none';
            }
        });

        $('.close').on('click',function(){
            $(this).closest('.modal').css('display','none');
        });
    }
}