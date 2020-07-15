<?php

$recepient = "timokhinai1955@gmail.com";

$sitename = "Викторина";
$headers = "From: info@sleepcokie.ru"; 
$headers .= "\r\nReply-To: info@sleepcokie.ru"; 
$headers .= "\r\nX-Mailer: PHP/".phpversion();

$name = $_POST["name"];
$phone = $_POST["phone"];
$email = $_POST['email'];

$quiz = $_POST['quiz'];
$discount = $_POST['discount'];

$message = "Имя: $name\nТелефон: $phone \nПочта: $email \nВикторина: $quiz \n Скидка: $discount";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, $headers, "-f info@sleepcokie.ru"); echo "Mail sent"; ?>