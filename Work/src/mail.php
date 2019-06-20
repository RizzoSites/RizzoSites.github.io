<?php

$recepient = "hello@a-techs.ru";

$sitename = "КУРС | Автоматизация ваших финансов";
$headers = "From: hello@a-techs.ru"; 
$headers .= "\r\nReply-To: hello@a-techs.ru"; 
$headers .= "\r\nX-Mailer: PHP/".phpversion();

$name = $_POST["name"];
$phone = $_POST["phone"];
$email = $_POST['email'];
$message = "Имя: $name \nТелефон: $phone \nПочта: $email";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, $headers, "-f hello@a-techs.ru"); echo "Mail sent"; ?>