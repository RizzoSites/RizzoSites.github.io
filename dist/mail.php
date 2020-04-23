<?php

$recepient = "rizzononame@yandex.ua";

$sitename = "Викторина";
$headers = "From: hello@a-techs.ru"; 
$headers .= "\r\nReply-To: hello@a-techs.ru"; 
$headers .= "\r\nX-Mailer: PHP/".phpversion();

$name = $_POST["name"];
$phone = $_POST["phone"];
$email = $_POST['email'];

$quiz = $_POST['quiz'];

$message = "Имя: $name\nТелефон: $phone \nПочта: $email \nВикторина: $quiz";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, $headers, "-f hello@a-techs.ru"); echo "Mail sent"; ?>