// значения из каждого вопроса викторины
let firstValue;
let secondValue;
let thirdValue;
let fourthValue;
let allValues;
let discount = 0;

let firstBlock,
	secondBlock,
	thirdBlock,
	fourthBlock;


$(document).ready(function() {
	// открытие модалки по клику на кнопку в хедер
	$('.header-body__button').click(function() {
		$('.modal').toggleClass('modal-active');
		$('.overlay').toggleClass('overlay-active');
	});
	// закрытие модалки по клику на крестик
	$('.modal-note__close').click(function() {
		$('.modal').removeClass('modal-active');
		$('.overlay').removeClass('overlay-active');
	});
	// закрытие модалки на смартфонах по клику на крестик
	$('.mobile-close').click(function() {
   		$('.modal').removeClass('modal-active');
   		$('.overlay').removeClass('overlay-active');
   	});
	$("#stage-1").submit(function() { //Change

   	event.preventDefault();
   	// если ответил на вопрос - записать его в соответствующую переменную (здесь firstValue)
   	// потом все эти переменные соберутся в allValues и отправятся на сервер
   	// так же если ответил на вопрос - добавить в переменную discount 5%
   	// и вывести discount на экран в modal-note
   	// так же если добавились 5% - повесить блок на этот вопрос, чтобы больше от него 5% не добавлялись
    if (document.querySelector('input[name="linen"]:checked')) {
    	firstValue = '1: ' + document.querySelector('input[name="linen"]:checked').value;
    	if (firstBlock !== true) {
    		discount += 5;
    		$('.modal-discount__number').html(discount + '%');
    		firstBlock = true;
    	}
    } else {
    	firstValue = '-';
    }

	});

	$("#stage-2").submit(function() { //Change

   	event.preventDefault();

   	if (document.querySelector('input[name="goods"]:checked')) {
    	secondValue = '2: ' + document.querySelector('input[name="goods"]:checked').value;
    	if (secondBlock !== true) {
    		discount += 5;
    		$('.modal-discount__number').html(discount + '%');
    		secondBlock = true;
    	}
    } else {
    	secondValue = '-';
    }
	});

	$("#stage-3").submit(function() { //Change

   	event.preventDefault();

   	if (document.querySelector('input[name="gender"]:checked')) {
    	thirdValue = '3: ' + document.querySelector('input[name="gender"]:checked').value;
    	if (thirdBlock !== true) {
    		discount += 5;
    		$('.modal-discount__number').html(discount + '%');
    		thirdBlock = true;
    	}
    } else {
    	thirdValue = '-';
    }
	});
	});

	$("#stage-4").submit(function() { //Change

   	event.preventDefault();

   	if (document.querySelector('input[name="other"]:checked')) {
    	fourthValue = '4: ' + document.querySelector('input[name="other"]:checked').value;
    	if (fourthBlock !== true) {
    		discount += 5;
    		$('.modal-discount__number').html(discount + '%');
    		fourthBlock = true;
    	}
    } else {
    	fourthValue = '-';
    }
	});

	// отправка формы contact
	$("#contact-form").submit(function() {
	  allValues = `${firstValue}\n${secondValue}\n${thirdValue}\n${fourthValue}.`;
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: { quiz : allValues,
      		  name : document.getElementById('contact-name').value,
      		  phone : document.getElementById('contact-phone').value,
      		  email : document.getElementById('contact-email').value,
      		  discount : discount
      		}
    }).done(function() {
      $("#contact-form").trigger("reset");
      $('.modal-questions__button').click(function() {
      	$('.modal').removeClass('modal-active');
      	$('.overlay').removeClass('overlay-active')
      });
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