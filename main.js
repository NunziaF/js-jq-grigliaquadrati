// Creare in HTML una griglia formata da 8x8 rettangolini tutti bianchi.
// 15 di questi rettangolini (scelti a caso all’inizio) se cliccati diventano rossi, gli altri diventano verdi


$(document).ready(function() {

  var quadratiRossi = ('<div class="square redWannabe"></div>');
  var quadratiVerdi = ('<div class="square"></div>')

  for (var i = 0; i < 15 ; i++) {
    $('.tablecontainer').append(quadratiRossi);
  }

  for (var i = 0; i < 49 ; i++) {
    $('.tablecontainer').append(quadratiVerdi);
  }

  // tenere il punteggio dei Verdi VS Rossi

  var redPoint = 0, greenPoint = 0;

  $('.square').click(
    function () {

      if($(this).hasClass('active')){
        console.log("OH! l'hai già cliccato!");

      } else if($(this).hasClass('redWannabe')){
        $(this).css('background', 'red');
        redPoint++;
        $(this).addClass('active');
        // $(this).attr('active', 'vero');
        console.log("punteggio rosso: " + redPoint);
        $('.prossa').html("punteggio rosso: " + redPoint);

      } else {
        $(this).css('background', 'green');
        greenPoint++;
        $(this).addClass('active');
        console.log("punteggio verde: " + greenPoint);
        $('.pverde').html("punteggio verde: " + greenPoint);
      }
    }
  );
});
