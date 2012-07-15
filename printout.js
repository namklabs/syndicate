;

!function ($) {

  var sp = 500; // speed of animation. Perhaps this could be slightly randomized?
  var $printouts = $("[data-value-printout]");

  $.each( $printouts, function(){

    $t = $(this);
    $t["original"] = $t.text();
    $t["step"] = 0;
    $t["len"] = $t["original"].length;

    $t["effect"] = function(i,x){

      window.setTimeout(
        function(){
        
          // do animation or something
          $t.text( $t.original.slice(0, $t.step++) );
          if( $t.step <= $t.len ){
            $t.effect;
          }

        }, sp + Math.floor( Math.random() * (.40 * sp) ) );
    }();

  });

}(window.jQuery);
