
$(document).ready(function() {
  $("#header-navbtn").click(function() {
    $(this).toggleClass("header-navbtn__active");
    $(".header-nav").toggleClass("header-nav-open");

    // this line ▼ prevents content scroll-behind
    lockScroll();
    });

   $(".header-nav__item").click(function() {
    $(".header-nav").removeClass("header-nav-open");
    $(".header-navbtn").removeClass("header-navbtn__active");
    $('body').removeClass('lock-scroll');
});
   $('.portfolio-sliders').slick({ 
responsive: [ 
	{ 
	breakpoint: 1000, 
	settings: { 
		slidesToShow: 1, 
		slidesToScroll: 1 
	}
} 
]
});
}); 

 function lockScroll() {
            if ($('body').hasClass('lock-scroll')) {
                $('body').removeClass('lock-scroll');
            }
            else {
                $('body').addClass('lock-scroll');
            }
      }





// anchor scroll
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});
