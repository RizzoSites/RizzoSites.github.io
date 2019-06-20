
$(document).ready(function(){
  $('.feedback-slider').slick({
  });
  // подсвечивание якорей в навигации в зависимости от расположения секций
  $(window).on("scroll", function() { 
    var scro= $(window).scrollTop();            
    var scr=0;    // начало страницы - хедер
    var scr2=780;   // начало меню "для кого"
    var scr3=1900;  // начало меню "о чём курс
    var scr4=3200;  // начало меню "программа"
    var scr5=4500;  // начало меню "преподаватели"
    var scr6=5170;  // начало меню "цена"
    var scr7=5700;  // начало меню "отзывы"
/*      положение  скрола относительно пункта хедера    */
    if ( $(window).scrollTop() >= scr && scro <= scr2 ) { $('#m1').addClass('active');}
     else $('#m1').removeClass('active');
/*      положение  скрола относительно пункта "посети курс"   */
  if ( scro > scr2 && scro <= scr3 ) {  
    $('#m2').addClass('active');
    document.getElementById('header-nav').style['box-shadow'] = '0px 4px 15px -8px rgba(0,0,0,0.75)';
  }
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
// форма отправки header
  $("#form").submit(function() {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      $('#openModal').hide();
      $('#header-thankfulness').show()
      $('body').removeClass('lock-scroll');
      $("#form").trigger("reset");
    });
    return false;
  });
// форма отправки cost
   $("#sign-in__form").submit(function() {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      $('.sign-in__form').hide();
      $('.cost-modal').show()
      $("#sign-in__form").trigger("reset");
    });
    return false;
  });
// отправка программы по почте
   $("#form-results").submit(function() {
    $.ajax({
      type: "POST",
      url: "mail-program.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
     $('#results-overflow').hide();
     $('#results-thankfulness').show();
      $("#form-results").trigger("reset");
    });
    return false;
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
    // по нажатии кнопки "Скачать программу" вызвать первое модальное окно секции course
     $('#results-button').click(function() {
     $('#results-button').hide();
     $('#results-overflow').show();
  });
    // по нажатии кнопки "Отправить" скрыть первое модальное окно и вызвать второе в секции header
    $('.results-modal__close').click(function() {
    $('#results-overflow').hide();
    $('#results-button').show();
  });
    // код, с помощью которого модальные окна исчезает через определённое время после появления
  $('.cost-modal').bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function(e) { $(this).remove(); });
  $('#header-thankfulness').bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function(e) { $(this).remove(); });
  $('#results-thankfulness').bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function(e) { $(this).remove(); });
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
