$(document).ready(function() {
  $('.about-more__block__img').click(function() {
    $('.about-more__block__img').toggleClass('about-img__active');
    $('.about-more__block__text').show();
    $('.about-img__active').click(function() {
        $('.about-more__block__text').hide();
        $('.about-more__block__img').removeClass('about-img__active');
    });
  }); 
});