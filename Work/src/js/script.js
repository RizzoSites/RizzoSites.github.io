
$(document).ready(function(){
  $('.feedback-slider').slick({
  });
  // подсвечивание якорей в навигации в зависимости от расположения секций
  $(window).on("scroll", function() { 
    var scro= $(window).scrollTop();            
    var scr=0;    // начало страницы - хедер
    var scr2=800;   // начало меню "посети курс"
    var scr3=1500;  // начало меню "о чём этот курс
    var scr4=2750;  // начало меню "программа курса"
    var scr5=4180;  // начало меню "спикеры"
    var scr6=5500;  // начало меню "цены"
    var scr7=6000;  // начало меню "отзывы"
/*      положение  скрола относительно пункта хедера    */
    if ( $(window).scrollTop() >= scr && scro <= scr2 ) { $('#m1').addClass('active');}
     else $('#m1').removeClass('active');
/*      положение  скрола относительно пункта "посети курс"   */
  if ( scro > scr2 && scro <= scr3 ) {  $('#m2').addClass('active');}
     else $('#m2').removeClass('active');
/*      положение  скрола относительно пункта "о чём этот курс"   */
    if ( scro > scr3 && scro <= scr4 ) {    $('#m3').addClass('active');}
     else $('#m3').removeClass('active');
/*      положение  скрола относительно пункта "программа курса"  */
  if ( scro > scr4 && scro <= scr5 ) {    $('#m4').addClass('active');}
     else $('#m4').removeClass('active');
/*      положение  скрола относительно пункта "цены"  */
  if ( scro > scr5 && scro <= scr6 ) {    $('#m5').addClass('active');}
     else $('#m5').removeClass('active');
/*      положение  скрола относительно пункта "спикеры"  */
  if ( scro > scr6 && scro <= scr7 ) {    $('#m6').addClass('active');}
     else $('#m6').removeClass('active');
/*      положение  скрола относительно пункта "отзывы"  */
  if ( scro > scr7 ) {    $('#m7').addClass('active');}
     else $('#m7').removeClass('active');
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
    // по нажатии кнопки "Отправить" скрыть первое модальное окно и вызвать второе в секции cost
    $('#sign-button').click(function() {
    $('.sign-in__form').hide();
    $('.cost-modal').show()
  });
    // по нажатии кнопки "Отправить" скрыть первое модальное окно и вызвать второе в секции header
    $('#modal-button').click(function() {
    $('#openModal').hide();
    $('.modal-thankfulness').show()
    $('body').removeClass('lock-scroll');
  });
   
    // код, с помощью которого второе и третье модальное окно исчезает через 5 секунд после появления
  $('.cost-modal').bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function(e) { $(this).remove(); });
  $('.modal-thankfulness').bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function(e) { $(this).remove(); });
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
