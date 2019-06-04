
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
      } else if (width >991) {
        $(".features-block").removeClass("wow fadeIn");
        $(".features-block").removeClass("wow fadeIn");
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

            right: '-535px' /* чтобы всё содержимое также сдвигалось вправо
               при открытии меню, установим ему положение 285px */

        }, 700); //скорость движения меню в мс
    });

    // 

    // увести кнопку на хедере за пределы окна при вызове модалки

    $('#open-modal').click(function() {
    $('#open-modal').toggleClass('header-btn__active');
  });

/* Закрытие меню */

    $('.closeModal').click(function() { //выбираем класс icon-close и метод click

        $('.header-btn').removeClass('header-btn__active');

        $('.modalDialog').animate({ //выбираем класс menu и метод animate

            right: '-535px' /* при клике на крестик меню вернется назад в свое
               положение и скроется */

        }, 200); //скорость движения меню в мс
        
    $('body').animate({ //выбираем тег body и метод animate

            right: '0px' //а содержимое страницы снова вернется в положение 0px

        }, 200); //скорость движения меню в мс
    });
};

