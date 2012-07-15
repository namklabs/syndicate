;

!function ($) {

  var sp = 5; // speed of animation. Perhaps this could be slightly randomized?
  var $printouts = $("[data-value-printout]");

  function printout( el ){

    window.setTimeout(
      function(){
      
	// do animation
	el.text( el.original.slice(0, el.step++) );
	if( el.step <= el.len ){
	  printout( el );
	} else {
          el.css({"display":el.dtype});
        }

      }, el.speed );

  }

  $.each( $printouts, function(){

    var $t = $(this);
    $t["original"] = $t.text();
    $t["step"] = 0;
    $t["len"] = $t["original"].length;
    $t["speed"] = sp + Math.floor( Math.random() * (.20 * sp) ) - Math.floor( Math.random() * (.20 * sp) );
    $t["delay"] = Math.floor( Math.random() * ( 175 * sp ) );
    $t["dtype"] = $t.css("display"); // used to set the display css type back to normal after the effect is complete.

//alert( $t.speed );

    window.setTimeout( function(){ 

      $t.animate({
        opacity: 1.0
      }
/*
       , $t.len * $t.speed );
*/
       , 5 );

      $t.css({
        "height": $t.height(),
        "width": $t.width(),
        "display": "block"
      });
      printout( $t ); 

    }, $t.delay );

  });

}(window.jQuery);
