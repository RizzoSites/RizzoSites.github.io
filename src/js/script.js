$(document).ready(function() {
  $('.header-navbtn').click(function() {
    menu();
  
});

  if($('.header-nav__mobile__active')) {
    $('.header-nav__mobile__item').click(function() {
     $(this).closest('.header-nav__mobile').removeClass('header-nav__mobile__active');
    });
  };
});


  if($('.header-nav__mobile__active')) {
    $('.header-nav__mobile__item').click(function() {
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
    $('.header-nav__mobile').toggleClass('header-nav__mobile__active');
  };


$(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 1000);
                return false;
        });
});