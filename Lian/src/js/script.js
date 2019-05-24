// hamburger

$(document).ready(function() {
  $('.header-navbtn').click(function() {
    menu();
});

  if($('.header-nav__active')) {
    $('.header-nav__item').click(function() {
     $(this).closest('.header-nav').removeClass('header-nav__active');
    });
  };
});


  if($('.header-nav_active')) {
    $('.header-nav__item').click(function() {
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
    $('.header-nav').toggleClass('header-nav__active');
  };

// header slider 

$(document).ready(function(){
    $(".header-main").hide()
    $(".header-main:first-child").show();
    
    $(".prev-btn").click(function(){
        slidePrev();
    })
    
    $(".next-btn").click(function(){
        slideNext();
    })
    
  $(".nav-btns li").click(function(){
    slideTo($(this).index());
  })
});

function slidePrev() {
    if ($("#header-slider .active").index() == 0) {
        slideTo($("#header-slider .header-main").length - 1);
    }
    else {
        slideTo($("#header-slider .active").index() - 1);
    }
}

function slideNext() {
    if ($("#header-slider .active").index() == $("#header-slider .header-main").length - 1) {
        slideTo(0);
    }
    else {
        slideTo($("#header-slider .active").index() + 1);
    }
}

function slideTo(slide) {
    $("#header-slider .active").fadeOut().removeClass("active");
    $("#header-slider .header-main").eq(slide).fadeIn().addClass("active");
    $(".nav-btns .current").removeClass("current");
    $(".nav-btns li").eq(slide).addClass("current");
}

// projects slider

document.body.onclick = function(event) {
    event = event || window.event;
    
    if (event.target.classList.contains('projects-slider__bottom__img')) {
        var allDivs = document.querySelectorAll('.projects-slider__bottom img');
        // remove active class
        for (var i = 0; i < allDivs.length; i++) {
          allDivs[i].classList.remove('active');
        }
        document.getElementById('project-slider__top').src = event.target.src;
        var parentDiv = event.target
        parentDiv.classList.add('active')
    }

}


//// scroll to top of the page
$(document).ready(function(){
// hide #back-top first
$("#scrollBtn").hide();
 
// fade in #back-top
$(function () {
$(window).scroll(function () {
if ($(this).scrollTop() > 1200) {
$('#scrollBtn').fadeIn();
} else {
$('#scrollBtn').fadeOut();
}
});
// scroll body to 0px on click
$('#scrollBtn a').click(function () {
$('body,html').animate({
scrollTop: 0
}, 800);
return false;
});
});
});


// anchor scroll
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});


// like button

$(".like-button").click(function() {
  $("like-button").removeClass("like-button__active");
  $(this).toggleClass("like-button__active");
});