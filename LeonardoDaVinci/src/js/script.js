// anchor scroll

$(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 1000);
                return false;
        });
});

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