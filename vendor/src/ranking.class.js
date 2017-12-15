export default class Ranking{
    constructor (){
    $('#button-classement').on('click',function(){
      $( "#popupClassement" ).load( "/getClassement", function() {

        document.getElementById('popupClassement').style.display = "flex";
        document.getElementById('popUp').style.display = "grid";

        window.onclick = function(event) {
            if (event.target === document.getElementById('background'))
            {
              document.getElementById('popupClassement').style.display = 'none';
              document.getElementById('popUp').style.display = 'none';
            }
        }
      });
    });
    }
}
