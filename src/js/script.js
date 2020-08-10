var stone;
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

$("#form-first").submit(function() {
  stone = $("input[name='stones']:checked").val();
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: {
              name : document.getElementById('form-1-name').value,
              phone : document.getElementById('form-1-phone').value,
              email : document.getElementById('form-1-email').value,
              text : document.getElementById('form-1-text').value,
              stones : stone
            }
    }).done(function() {
      $("#form-first").trigger("reset");
      $('.modal').removeClass('modal-active');
    });
    return false;

  });

$("#form-second").submit(function() {
    $.ajax({
      type: "POST",
      url: "mail-answer.php",
      data: $(this).serialize()
    }).done(function() {
      $("#form-second").trigger("reset");
      $('.modal').removeClass('modal-active');
    });
    return false;
  });


});

  