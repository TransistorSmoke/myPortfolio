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
        $('.navbar .navbar-brand img').attr('src','img/jma_logo_bw.png');

        $(".navbar").addClass("home-nav-color");
   }

});

/* ========================================
  ADD BACKGROUND COLOR OF NAV SECTION
===========================================*/

$(document).scroll(function() { 
   if($(window).scrollTop() > 50) {
        $(".navbar").addClass("custom-bg");
        /*$('.navbar .navbar-brand img').attr('src','img/jma_logo.png');*/

        /* --- This section sets our nav link colors to white when viewed on mobile display --- */
        var screenWidth = $(window).width();
        if (screenWidth <= 720) {  
            $(".navbar").addClass("home-nav-color");
            $('.navbar .navbar-brand img').attr('src','img/jma_logo_bw.png');
        }    
        
        else{
            $(".navbar").removeClass("home-nav-color");
            $('.navbar .navbar-brand img').attr('src','img/jma_logo.png');
        }
        /* ------------------------------------------------------------------------------------- */
    }
});


/* ================================================
   OWLCAROUSEL EFFECT for ABOUT SECTION CONTENTS
=================================================*/
/*
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
*/

/* ============================================================
   REMOVES TITLE ATTR IN THE CREATION PAGES' img DURING HOVER,
   AND PUTS IT BACK WHEN THE ACTUAL IMAGE IS CLICKED.

   Credits to Shadow Wizard (stackoverflow) for the codes
=============================================================*/

window.onload = function() {
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        link.onmouseover = function() {
            this.setAttribute("origTitle", this.title);
            this.title = "";
        };
        link.onmouseout = function() {
            this.title = this.getAttribute("origTitle");
        };

        link.onclick = function() {
            this.title = this.getAttribute("origTitle");
        };
    }
};
