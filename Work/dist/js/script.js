function lockScroll(){$("body").hasClass("lock-scroll")?$("body").removeClass("lock-scroll"):$("body").addClass("lock-scroll")}$(document).ready(function(){$(".feedback-slider").slick({}),modalOpen(),$(".closeModal").click(function(){$("body").removeClass("lock-scroll")}),width=$(window).width(),width<=991?(swap(),setInterval(swap,3e3),$(".header-btn").click(function(){lockScroll()})):991<width&&($(".features-block").removeClass("wow fadeIn"),$(".features-block").removeClass("wow fadeIn"))});var newsIndex=1;function swap(){$(".features-block__block").hide(),$(".features-block__block"+newsIndex).show();2<++newsIndex&&(newsIndex=1)}var modalOpen=function(){var e=document.querySelectorAll(".header-btn, .open-btn");$(e).click(function(){$(".header-btn").removeClass("header-btn__active"),$(".header-btn").toggleClass("header-btn__active"),$(".modalDialog ").animate({right:"0px"},200)}),$("#open-modal").click(function(){$("#open-modal").toggleClass("header-btn__active")}),$(".closeModal").click(function(){$(".header-btn").removeClass("header-btn__active"),$(".modalDialog").animate({right:"-535px"},200)})};