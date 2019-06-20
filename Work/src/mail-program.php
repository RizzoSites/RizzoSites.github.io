<?php

$recepient = $_POST["email"];
$to = "hello@a-techs.ru";

$sitename = "КУРС | Автоматизация ваших финансов";
$headers = "From: hello@a-techs.ru"; 
$headers .= "\r\nReply-To: hello@a-techs.ru"; 
$headers .= "\r\nX-Mailer: PHP/".phpversion();

$name = $_POST["name"];
$phone = $_POST["phone"];
$email = $_POST['email'];

$message = "$name, ваша ссылка на программу курса по автоматизации ваших финансов: \nhttps://vk.com/doc38708625_506627036?hash=542fab65dcb282aef0&dl=8f61e92ef88b24b77c";
$message2 = "Имя: $name\nТелефон: $phone\nПочта: $email";

$info ="Пользователь скачал программу курса с сайта \"$sitename\"";
$pagetitle = "Программа с сайта \"$sitename\"";

mail($recepient, $pagetitle, $message, $headers, "-f hello@a-techs.ru"); echo "Mail sent"; 
mail($to, $info, $message2, $headers, "-f hello@a-techs.ru"); echo "Mail Sent"; ?>
