// hamburger menu

$(document).ready(function() {
  $('.header-navbtn').click(function() {
    menu();
}); 



  if($('.header-nav__active')) {
    $('.header-nav__item').click(function() {
     $(this).closest('.header-nav').removeClass('header-nav__active');
     $('body').removeClass('lock-scroll');
    });
  };
});


  if($('.header-nav_active')) {
    $('.header-nav__item').click(function() {
      menu();
    });
  };


function menu() {
  nav();
  navbtn();
};

function navbtn() {
  $('.header-navbtn').toggleClass('header-navbtn__active');
};

function nav() {
    $('.header-nav').toggleClass('header-nav__active');
  };

// lock body (overflow hidden) when mobile menu is opened

      function lockScroll() {
            if ($('body').hasClass('lock-scroll')) {
                $('body').removeClass('lock-scroll');
            }
            else {
                $('body').addClass('lock-scroll');
            }
      }
// anchor scroll

$(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 1000);
                return false;
        });
});

// scroll to top of the page

$(document).ready(function(){
// hide #back-top first
$("#scrollBtn").hide();
 
// fade in #back-top
$(function () {
$(window).scroll(function () {
if ($(this).scrollTop() > 1200) {
$('#scrollBtn').fadeIn();
} else {
$('#scrollBtn').fadeOut();
}
});
// scroll body to 0px on click
$('#scrollBtn a').click(function () {
$('body,html').animate({
scrollTop: 0
}, 800);
return false;
});
});
});
