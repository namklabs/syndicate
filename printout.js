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
	}

      }, el.speed );

  }

  $.each( $printouts, function(){

    var $t = $(this);
    $t["original"] = $t.text();
    $t["step"] = 0;
    $t["len"] = $t["original"].length;
    $t["speed"] = sp + Math.floor( Math.random() * (.20 * sp) ) - Math.floor( Math.random() * (.20 * sp) );
    $t["delay"] = Math.floor( Math.random() * ( 250 * sp ) );

    window.setTimeout( function(){ printout( $t ); }, $t.delay );

  });

}(window.jQuery);
