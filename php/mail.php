<?php
	
	$name      = filter_var($_POST["user-name"], FILTER_SANITIZE_STRING);
	$email     = filter_var($_POST["user-email"], FILTER_SANITIZE_STRING);
	$phone     = filter_var($_POST["user-phone"], FILTER_SANITIZE_STRING);
	$message       = filter_var($_POST["user-message"], FILTER_SANITIZE_STRING);
	$errors;

	
	if (empty($name)) {
		$errors = "Ошибка";
	};
	if (empty($email)) {
		$errors = "Ошибка";
	};
	if (empty($phone)) {
		$errors = "Ошибка";
	};

	$to = "kreat1vesc@gmail.com";
	$mailBody = "Ваши даные\n";
	$mailBody .= "Поле имя: " . $name . "\n";
	$mailBody .= "Поле почта: " . $email . "\n";
	$mailBody .= "Телефон: " . $phone . "\n";
	$mailBody .= "Ваш пол: " . $message . "\n";
	

	if (mail($to, 'Ваши даные', $mailBody)) {
			$output = "ok";
			die($output);
	} else {
			$output = $errors;
			die($output);
	}
?>