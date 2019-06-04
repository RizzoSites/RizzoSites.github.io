
$(document).ready(function(){
  $('.feedback-slider').slick({
  });

  // открытие модального окна
  modalOpen();
  $('.closeModal').click(function() {
        $('body').removeClass('lock-scroll');   
  });
  
  width = $(window).width();
    if (width <= 991) {
        // смена блоков в секции features
        swap();
        setInterval(swap, 3000);
        // лок экрана на смартфонах при нажатии на кнопку хедера
        $(".header-btn").click(function() {
          lockScroll();
        });
      }
});


/* Функция для смены блоков в секции features */

var newsIndex = 1;
function swap() {
  $(".features-block__block").hide();
  $(".features-block__block" + newsIndex).show();
  
  var newsCount = 2;
  newsIndex++;
  if(newsIndex > newsCount) {
    newsIndex = 1;
  }
}


// Функция для смены блоков, показывает блоки по очереди, начальный блок задаётся выше

function blockAnimate() {
    var length = $('.features-block .features-block__block').length - 1;
    $('.features-block .features-block__block').each(function(index) {
        if($(this).hasClass('active') && index != length) {
            $(this).removeClass('active').fadeOut(1000).next('.features-block__block').addClass('active').fadeIn(1000);
            return false;
        } else if (index == length) {
            $(this).removeClass('active').fadeOut(1000);
            $('.features-block .features-block__block').eq(0).addClass('active').fadeIn(1000);
            return false;
        }
    });
};

/* Открытие модального окна */

var modalOpen = function() { // главная функция

	var menuOpen = document.querySelectorAll('.header-btn, .open-btn');

    $(menuOpen).click(function() { /* выбираем класс icon-menu и
               добавляем метод click с функцией, вызываемой при клике */
        $('.header-btn').removeClass('header-btn__active');
        $('.header-btn').toggleClass('header-btn__active');

        $('.modalDialog ').animate({ //выбираем класс menu и метод animate

            right: '0px' /* теперь при клике по иконке, меню, скрытое за
               левой границей на 285px, изменит свое положение на 0px и станет видимым */

        }, 200); //скорость движения меню в мс
        
        $('body').animate({ //выбираем тег body и метод animate

            right: '-1024px' /* чтобы всё содержимое также сдвигалось вправо
               при открытии меню, установим ему положение 285px */

        }, 700); //скорость движения меню в мс
    });

    // 

    $('#open-modal').click(function() {
    $('#open-modal').toggleClass('header-btn__active');
  });

/* Закрытие меню */

    $('.closeModal').click(function() { //выбираем класс icon-close и метод click

        $('.header-btn').removeClass('header-btn__active');

        $('.modalDialog').animate({ //выбираем класс menu и метод animate

            right: '-1024px' /* при клике на крестик меню вернется назад в свое
               положение и скроется */

        }, 200); //скорость движения меню в мс
        
    $('body').animate({ //выбираем тег body и метод animate

            right: '0px' //а содержимое страницы снова вернется в положение 0px

        }, 200); //скорость движения меню в мс
    });
};

function lockScroll() {
            if ($('body').hasClass('lock-scroll')) {
                $('body').removeClass('lock-scroll');
            }
            else {
                $('body').addClass('lock-scroll');
            }
      }
