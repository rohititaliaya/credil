(function( $ ) {
	"use strict";

	window.bt_bb_floating_element_loop = function() {
		var win_w = window.innerWidth;
		var win_h = window.innerHeight;
		$( 'html:not(.bt_bb_touch) .bt_bb_floating_element' ).each(function() {
			var elem = $(this).find('.bt_bb_floating_element_html');
			var bounds = this.getBoundingClientRect();
			if ( bounds.top < win_h && bounds.bottom > 0 ) {
				var speed = $(this).attr( 'data-speed' ) / 10;
				var ypos = ( bounds.top - win_h/5 ) * speed;
				elem.css( 'transform', 'translateY(' + ypos + 'px)' );
			}

		});
		window.bt_bb_floating_element_lock = false;
	}
	
	window.bt_bb_floating_element_lock = false;
	
	$( window ).on( 'scroll', function() {
		if ( ! window.bt_bb_floating_element_lock ) {
			window.bt_bb_floating_element_lock = true;
			bt_bb_requestAnimFrame( bt_bb_floating_element_loop );
		}
	});
	
	bt_bb_requestAnimFrame( bt_bb_floating_element_loop );

	$( window ).on( "load", function() {  
		bt_bb_requestAnimFrame( bt_bb_floating_element_loop );
		$('#hero-slider .slick-slider').on('afterChange', function( event, slick, currentSlide, nextSlide ){
			var min = 25; 
			var max = 50;
			var dir = [ -1, 1 ];
			$( this ).find('.slick-current .bt_bb_floating_element_html').each( function() {  
				var p = min + Math.floor( Math.random() * ( max - min ) );
				var d = dir[ Math.floor( Math.random() * dir.length ) ]; 
				var y = 0;
				var ny = y + d * p;
				$( this ).css( 'transform', 'translateY(' + ny + 'px)' );		
			});
		});
	});
	
})( jQuery );