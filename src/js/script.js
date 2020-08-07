$(document).ready(function() {

$('.header-navbtn').click(function() {
	$('.header-navbtn').toggleClass('header-navbtn__active')
	$('.header-nav').toggleClass('header-nav__active');
});

 $(".header-nav__item").click(function() {
    $(".header-nav").removeClass("header-nav__active");
    $(".header-navbtn").removeClass("header-navbtn__active");
});

$('.header-button').click(function() {
	$('#modal-first').toggleClass('modal-active');
});

$('.header-phone__button').click(function() {
	$('#modal-second').toggleClass('modal-active');
});


$('.modal-close').click(function() {
	$('#modal-first').removeClass('modal-active');
	$('#modal-second').removeClass('modal-active');
});

$(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 1000);
                return false;
        });
});

});

  