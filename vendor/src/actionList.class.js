export default class ActionList{
    constructor ()
    {


    }

    showInAL (message, timeout)
    {
      setTimeout(function(){
        $( "#listText" ).append(`<li class="bounceIn">${message}<li>`);
      }, timeout);
      $('#listText').scrollTop($('#listText')[0].scrollHeight);

      let nbChild = document.getElementById('listText').childNodes.length;

      console.log(nbChild);
      if (nbChild > 50) {
        for (let i = 0; i < 4; i++) {
          $('#listText>li:nth-child('+i+')').remove();
        }
      }
    }
}
