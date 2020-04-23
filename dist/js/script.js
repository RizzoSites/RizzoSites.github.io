// значения из каждого вопроса викторины
let firstValue;
let secondValue;
let thirdValue;
let fourthValue;
let allValues;


$(document).ready(function() {

	$('.header-body__button').click(function() {
		$('.modal').toggleClass('modal-active');
		$('.overlay').toggleClass('overlay-active');
	});
	$('.modal-note__close').click(function() {
		$('.modal').removeClass('modal-active');
		$('.overlay').removeClass('overlay-active');
	});

	$("#stage-1").submit(function() { //Change

   	event.preventDefault();

    if (document.querySelector('input[name="linen"]:checked')) {
    	firstValue = '1: ' + document.querySelector('input[name="linen"]:checked').value;
    } else {
    	firstValue = '-';
    }
	});

	$("#stage-2").submit(function() { //Change

   	event.preventDefault();

   	if (document.querySelector('input[name="goods"]:checked')) {
    	secondValue = '2: ' + document.querySelector('input[name="goods"]:checked').value;
    } else {
    	secondValue = '-';
    }
	});

	$("#stage-3").submit(function() { //Change

   	event.preventDefault();

   	if (document.querySelector('input[name="gender"]:checked')) {
    	thirdValue = '3: ' + document.querySelector('input[name="gender"]:checked').value;
    } else {
    	thirdValue = '-';
    }
	});
	});

	$("#stage-4").submit(function() { //Change

   	event.preventDefault();

   	if (document.querySelector('input[name="other"]:checked')) {
    	fourthValue = '4: ' + document.querySelector('input[name="other"]:checked').value;
    } else {
    	fourthValue = '-';
    }
	});

	let lol = 'sasasasas';
	// отправка формы contact
	$("#contact-form").submit(function() {
	  allValues = `${firstValue}\n${secondValue}\n${thirdValue}\n${fourthValue}.`;
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: { quiz : allValues,
      		  name : document.getElementById('contact-name').value,
      		  phone : document.getElementById('contact-phone').value,
      		  email : document.getElementById('contact-email').value
      		}
    }).done(function() {
      $("#contact-form").trigger("reset");
    });
    return false;
  });

	// следующий вопрос викторины
	$('#button-first').click(function() {
		$('.modal-questions__first').removeClass('modal-questions__active');
		$('.modal-questions__second').toggleClass('modal-questions__active');
	});

	$('#button-second').click(function() {
		$('.modal-questions__second').removeClass('modal-questions__active');
		$('.modal-questions__third').toggleClass('modal-questions__active');
	});

	$('#button-third').click(function() {
		$('.modal-questions__third').removeClass('modal-questions__active');
		$('.modal-questions__fourth').toggleClass('modal-questions__active');
	});

	$('#button-fourth').click(function() {
		$('.modal-questions__fourth').removeClass('modal-questions__active');
		$('.modal-questions__fifth').toggleClass('modal-questions__active');
	});
	// предыдущий вопрос викторины
	$('#back-first').click(function() {
		$('.modal-questions__second').removeClass('modal-questions__active');
		$('.modal-questions__first').toggleClass('modal-questions__active');
	});

	$('#back-second').click(function() {
		$('.modal-questions__third').removeClass('modal-questions__active');
		$('.modal-questions__second').toggleClass('modal-questions__active');
	});

	$('#back-third').click(function() {
		$('.modal-questions__fourth').removeClass('modal-questions__active');
		$('.modal-questions__third').toggleClass('modal-questions__active');
	});