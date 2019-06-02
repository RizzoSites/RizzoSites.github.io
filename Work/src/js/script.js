
$(document).ready(function(){
  $('.feedback-slider').slick({
  });
  modalOpen();
});

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

            right: '530px' /* чтобы всё содержимое также сдвигалось вправо
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

            right: '-530px' /* при клике на крестик меню вернется назад в свое
               положение и скроется */

        }, 200); //скорость движения меню в мс
        
    $('body').animate({ //выбираем тег body и метод animate

            right: '0px' //а содержимое страницы снова вернется в положение 0px

        }, 200); //скорость движения меню в мс
    });
};

