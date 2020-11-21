<?php

$recepient = $_POST["email"];
$to = "sleepcookie@yandex.ru";

$sitename = "Добросталь";
$headers = "From: info@sleepcokie.ru"; 
$headers .= "\r\nReply-To: info@sleepcokie.ru"; 
$headers .= "\r\nX-Mailer: PHP/".phpversion();

$name = $_POST["name"];
$phone = $_POST["phone"];
$email = $_POST['email'];
$text = $_POST['text'];

$stones = $_POST['stones'];

$message = "Имя: $name\nТелефон: $phone \nПочта: $email \nРазмеры: $text \nФорма каменки: $stones";

$pagetitle = "Письмо с сайта \"$sitename\"";
mail($to, $pagetitle, $message, $headers, "-f info@sleepcokie.ru"); echo "Mail sent";