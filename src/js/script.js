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

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("header-tab__content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("header-tablinks__link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

