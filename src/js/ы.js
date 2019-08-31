$(document).ready(function(){
  $('.work-slider').slick({
   	fade: true
  });
  if ($('.work-slider__item__1').hasClass('slick-active')) {
    $('.work-img__1').toggleClass('newClass');
  } else {
  	$('.work-img__1').removeClass('newClass');
  }


  if ($('.work-slider__item__2').hasClass('slick-active')) {
    $('.work-img__2').toggleClass('newClass');
  } else {
  	$('.work-img__2').removeClass('newClass');
  }

});