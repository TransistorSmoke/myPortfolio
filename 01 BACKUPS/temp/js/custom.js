/* ========================================
			WOW.js INITIALIZATION
===========================================*/
$(function(){

	//animate on scroll
	new WOW().init();
});

/* ========================================
		CREATIONS - Image Popups
===========================================*/
$(function () {
    $('#creations').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 400 // don't foget to change the duration also in CSS
        }    
    });

});


/* ========================================
        SMOOTH SCROLLING for NAVIGATION
===========================================*/
$(document).ready(function(){
    $('a.smooth-scroll').click(function(e){

        var targetHref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(targetHref).offset().top
        }, 700);


        e.preventDefault();

    });

});







/* Current position is TOP page */
/* ========================================
  REMOVE BACKGROUND COLOR OF NAV SECTION
===========================================*/
$(document).scroll(function() { 
   if($(window).scrollTop() < 50) {
     $(".navbar").removeClass("custom-bg");
   }

});

/* ========================================
  ADD BACKGROUND COLOR OF NAV SECTION
===========================================*/

$(document).scroll(function() { 
   if($(window).scrollTop() > 50) {
     $(".navbar").addClass("custom-bg");

   }
});


/* ================================================
   OWLCAROUSEL EFFECT for ABOUT SECTION CONTENTS
=================================================*/
$(document).ready(function() {
    $("#about-sections").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 900,
        loop: true, 
        autoplayTimeout: 20000,
        autoplayHoverPause: true
    });
});