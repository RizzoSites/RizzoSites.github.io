$(document).ready(function(){
  $('.work-slider').slick({
   	fade: true
  });
  

   $('.slick-next').click(function() {

   	if ($('.work-slider__item__1').hasClass('slick-active')) {
    	$('.work-img__1').removeClass('work-img__1__active__active')
    } 


    if ($('.work-slider__item__2').hasClass('slick-active')) {
    	$('.work-img__1').toggleClass('work-img__1__active__active')
    	$('.work-img__2').toggleClass('work-img__2__active')
    } else {
    	$('.work-img__2').removeClass('work-img__2__active')
    }

    if ($('.work-slider__item__3').hasClass('slick-active')) {
    	$('.work-img__3').toggleClass('work-img__3__active')
    } else {
    	$('.work-img__3').removeClass('work-img__3__active')
    }

    if ($('.work-slider__item__4').hasClass('slick-active')) {
    	$('.work-img__4').toggleClass('work-img__4__active')
    } else {
    	$('.work-img__4').removeClass('work-img__4__active')
    }

    if ($('.work-slider__item__5').hasClass('slick-active')) {
    	$('.work-img__5').toggleClass('work-img__5__active')
    } else {
    	$('.work-img__5').removeClass('work-img__5__active')
    }

    if ($('.work-slider__item__6').hasClass('slick-active')) {
    	$('.work-img__6').toggleClass('work-img__6__active')
    } else {
    	$('.work-img__6').removeClass('work-img__6__active')
    }

     if ($('.work-slider__item__7').hasClass('slick-active')) {
    	$('.work-img__7').toggleClass('work-img__7__active')
    } else {
    	$('.work-img__7').removeClass('work-img__7__active')
    }
  });

   $('.slick-prev').click(function() {

   	if ($('.work-slider__item__1').hasClass('slick-active')) {
    	$('.work-img__1').removeClass('work-img__1__active__active')
    } else {
    	$('.work-img__1').removeClass('work-img__1__active')
    }

    if ($('.work-slider__item__2').hasClass('slick-active')) {
    	$('.work-img__2').toggleClass('work-img__2__active')
    } else {
    	$('.work-img__2').removeClass('work-img__2__active')
    }

    if ($('.work-slider__item__3').hasClass('slick-active')) {
    	$('.work-img__3').toggleClass('work-img__3__active')
    } else {
    	$('.work-img__3').removeClass('work-img__3__active')
    }

    if ($('.work-slider__item__4').hasClass('slick-active')) {
    	$('.work-img__4').toggleClass('work-img__3__active')
    } else {
    	$('.work-img__4').removeClass('work-img__3__active')
    }

    if ($('.work-slider__item__5').hasClass('slick-active')) {
    	$('.work-img__5').toggleClass('work-img__5__active')
    } else {
    	$('.work-img__5').removeClass('work-img__5__active')
    }

    if ($('.work-slider__item__6').hasClass('slick-active')) {
    	$('.work-img__6').toggleClass('work-img__6__active')
    } else {
    	$('.work-img__6').removeClass('work-img__6__active')
    }

     if ($('.work-slider__item__7').hasClass('slick-active')) {
     	$('.work-img__1').toggleClass('work-img__1__active__active')
    	$('.work-img__7').toggleClass('work-img__7__active')
    } else {
    	$('.work-img__7').removeClass('work-img__7__active')
    }
  });

});
