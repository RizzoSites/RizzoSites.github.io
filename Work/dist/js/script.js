$(document).ready(function(){$(".feedback-slider").slick({}),menuFirst(),menuSecond()});var menuFirst=function(){$(".header-btn").click(function(){$(".modalDialog ").animate({right:"0px"},200),$("body").animate({right:"530px"},700)}),$(".closeModal").click(function(){$(".modalDialog").animate({right:"-530px"},200),$("body").animate({right:"0px"},200)})},menuSecond=function(){$(".open-btn").click(function(){$(".modalDialog ").animate({right:"0px"},200),$("body").animate({right:"530px"},700)}),$(".closeModal").click(function(){$(".modalDialog").animate({right:"-530px"},200),$("body").animate({right:"0px"},200)})};