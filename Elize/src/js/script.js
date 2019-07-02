$(document).ready(function() {
  // подробная информация по клику на странице about
  $('.about-more__block__1 .about-more__block__img').click(function() {
    $('.about-more__block__1 .about-more__block__img').toggleClass('about-img__active');
    $('.about-more__block__1 .about-more__block__text').toggleClass('about-text__active');
  }); 
  $('.about-more__block__1 .about-img__active').click(function() {
     $('.about-more__block__1 .about-more__block__img').toggleClass('about-img__active');
     $('.about-more__block__1 .about-more__block__text').toggleClass('about-text__active');
    });
  $('.about-more__block__2 .about-more__block__img').click(function() {
    $('.about-more__block__2 .about-more__block__img').toggleClass('about-img__active');
    $('.about-more__block__2 .about-more__block__text').toggleClass('about-text__active');
  }); 
  $('.about-more__block__2 .about-img__active').click(function() {
     $('.about-more__block__2 .about-more__block__img').toggleClass('about-img__active');
     $('.about-more__block__2 .about-more__block__text').toggleClass('about-text__active');
  });
});
  // таб-контент на странице help
  function nextTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("help-tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("help-tab__links");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" tab-active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " tab-active";
}
