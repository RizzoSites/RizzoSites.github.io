
$(document).ready(function(){
  $('.feedback-slider').slick({
  });
  // вызов модального окна по нажатию на кнопку "Отправить заявку"
  $('.header-btn').click(function() {
    $(this).toggleClass('header-btn__active')
    $('.modalDialog').toggleClass('modal-active');
  });
  // закрытие модального окна по нажатию на стрелочку в модалке и снятие лок-скролла
  $('.closeModal').click(function() {
    $('body').removeClass('lock-scroll');   
    $('.modalDialog').removeClass('modal-active');
    $('.header-btn').removeClass('header-btn__active')
  });
  // вызов модального окна по нажатию на кнопку "Записаться", кнопка "Отправить заявку" уезжает за границы
    $('.open-btn').click(function() {
    $('.modalDialog').toggleClass('modal-active');
    $('.header-btn').toggleClass('header-btn__active')
  });
    // вызов модального окна по нажатию на кнопку "Записаться", кнопка "Отправить заявку" уезжает за границы
    $('#sign-button').click(function() {
    $('.sign-in__form').hide();
    $('.cost-modal').show()
  });
    $('#modal-button').click(function() {
    $('#openModal').hide();
    $('.modal-thankfulness').show()
  });
  $('.cost-modal').bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function(e) { $(this).remove(); });
  // Удаление анимации и локскрина на десктопе   
  width = $(window).width();
    if (width > 1024) {
        $(".features-block").removeClass("wow fadeIn");
        $(".features-block").removeClass("wow fadeIn");
    } else if (width < 1024) {
        $(".header-btn").click(function() {
          lockScroll();
        });
    }
});

// лок на экран во время модалки

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
    }, 600);
});
