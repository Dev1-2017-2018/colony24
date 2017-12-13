export default class Ranking{
    constructor (){

    $('#button-classement').on('click',function(){
            let modal = document.getElementById('popupClassement');
            console.log('click');

            //  Affiche la popup
            modal.style.display = "block";

            window.onclick = function(event) {
                if (event.target == modal) {
                    console.log(modal);
                    modal.style.display = 'none';
                }
            }
        });

        $('.close').on('click',function(){
            $(this).closest('.modal').css('display','none');
        });
    }
}